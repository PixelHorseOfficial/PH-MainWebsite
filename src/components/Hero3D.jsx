import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useAnimations, Environment, Preload } from "@react-three/drei";
import { Suspense, useRef, useEffect, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { KTX2Loader } from "three/examples/jsm/loaders/KTX2Loader.js";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";
import { MeshoptDecoder } from "three/examples/jsm/libs/meshopt_decoder.module.js";
import { useLoader } from "@react-three/fiber";

const makeGlowTex = (r0,g0,b0, r1,g1,b1) => {
  const size=128,h=size/2; const c=document.createElement("canvas"); c.width=c.height=size;
  const ctx=c.getContext("2d"); const g=ctx.createRadialGradient(h,h,0,h,h,h);
  g.addColorStop(0,`rgba(${r0},${g0},${b0},1)`); g.addColorStop(0.25,`rgba(${r1},${g1},${b1},0.6)`);
  g.addColorStop(0.6,`rgba(${r1},${g1},${b1},0.15)`); g.addColorStop(1,`rgba(${r1},${g1},${b1},0)`);
  ctx.fillStyle=g; ctx.fillRect(0,0,size,size); const t=new THREE.CanvasTexture(c); t.colorSpace=THREE.SRGBColorSpace; return t;
};
const GLOW_WARM = makeGlowTex(255,230,100, 255,150,10);
const GLOW_GOLD = makeGlowTex(255,225,150, 255,190,60);

function StreetLamp({ position, intensity=2.8, distance=0.8, glowScale=0.18, color="#ffdd55", glowTex=GLOW_WARM, glowColor="#ffcc44", flicker=true }) {
  const lightRef=useRef(); const spriteRef=useRef(); const seed=(position.x??position[0]??0)*13.7;
  useFrame(({clock})=>{ const f=flicker?1+0.035*Math.sin(clock.getElapsedTime()*8.1+seed):1; if(lightRef.current) lightRef.current.intensity=intensity*f; if(spriteRef.current) spriteRef.current.material.opacity=0.65*f; });
  return (<group position={position}><pointLight ref={lightRef} color={color} intensity={intensity} distance={distance} decay={2}/><sprite ref={spriteRef} scale={[glowScale,glowScale,1]}><spriteMaterial map={glowTex} color={glowColor} transparent opacity={0.65} depthWrite={false} blending={THREE.AdditiveBlending}/></sprite></group>);
}

function LightsFromScene({scene}){
  const [lights,setLights]=useState([]); const [coinPos,setCoinPos]=useState(null); const [coinRad,setCoinRad]=useState(0.15);
  useEffect(()=>{ if(!scene) return; scene.updateMatrixWorld(true); const wp=new THREE.Vector3(),found=[]; scene.traverse(n=>{if(n.name.startsWith("aiAreaLight")){n.getWorldPosition(wp); if(!found.some(p=>p.distanceTo(wp)<0.02)) found.push(wp.clone());}}); setLights(found); const coin=scene.getObjectByName("pixe_coin")||scene.getObjectByName("coin_building"); if(coin){ const box=new THREE.Box3().setFromObject(coin); if(!box.isEmpty()){ const c=new THREE.Vector3(),s=new THREE.Vector3(); box.getCenter(c); box.getSize(s); setCoinPos(c); setCoinRad(Math.max(s.x,s.y,s.z)/2); } } },[scene]);
  return (<>{lights.map((p,i)=><StreetLamp key={i} position={p}/>)}{coinPos && <StreetLamp position={coinPos} intensity={3.5} distance={coinRad*2.8} glowScale={coinRad*1.4} color="#ffce66" glowTex={GLOW_GOLD} glowColor="#ffd889" flicker={false}/>}</>);
}

const VIDEO_SCREENS=[{nodeName:"polySurface2",src:"/videos/lalithaa.mp4"},{nodeName:"smokeandsizzel",src:"/videos/smoke-and-sizzle.mp4"},{nodeName:"anamorphicscreen",src:"/videos/tiger.mp4"}];
function useLoopingVideoTexture(src){ const [tex,setTex]=useState(null); useEffect(()=>{ if(!src) return; const v=document.createElement("video"); v.src=src; v.crossOrigin="anonymous"; v.loop=true; v.muted=true; v.playsInline=true; v.play().catch(()=>{}); window.addEventListener("click",()=>v.play().catch(()=>{}),{once:true}); const t=new THREE.VideoTexture(v); t.colorSpace=THREE.SRGBColorSpace; t.flipY=false; setTex(t); return()=>{ v.pause(); t.dispose(); }; },[src]); return tex; }
function VideoScreens({scene}){
  const t1=useLoopingVideoTexture(VIDEO_SCREENS[0].src), t2=useLoopingVideoTexture(VIDEO_SCREENS[1].src), t3=useLoopingVideoTexture(VIDEO_SCREENS[2].src);
  useEffect(()=>{ if(!scene) return; const m={[VIDEO_SCREENS[0].nodeName]:t1,[VIDEO_SCREENS[1].nodeName]:t2,[VIDEO_SCREENS[2].nodeName]:t3}; Object.entries(m).forEach(([n,tx])=>{ if(!tx) return; const node=scene.getObjectByName(n); if(!node?.isMesh) return; (Array.isArray(node.material)?node.material:[node.material]).forEach(mat=>{ if(!mat) return; mat.map=tx; if("emissiveMap" in mat){ mat.emissive=new THREE.Color(0xffffff); mat.emissiveMap=tx; mat.emissiveIntensity=1.2; } mat.needsUpdate=true; }); }); },[scene,t1,t2,t3]); return null;
}

function CityModel({ autoRotate, rotationSpeed }){
  const groupRef=useRef(); const [readyScene,setReadyScene]=useState(null);
  const gltf = useLoader(GLTFLoader, "/models/city6-prod.glb", (loader)=>{
    THREE.Cache.enabled = false;
    const ktx2Loader = new KTX2Loader().setTranscoderPath("https://unpkg.com/three@0.160.0/examples/jsm/libs/basis/").detectSupport(new THREE.WebGLRenderer());
    const dracoLoader = new DRACOLoader().setDecoderPath("https://www.gstatic.com/draco/v1/decoders/");
    loader.setKTX2Loader(ktx2Loader).setDRACOLoader(dracoLoader).setMeshoptDecoder(MeshoptDecoder);
  });
  // FIX: animations root should be the scene itself, not groupRef
  const { actions, mixer } = useAnimations(gltf.animations, gltf.scene);
  const speed=useRef(0);

  useEffect(()=>{
    const scene=gltf.scene;
    scene.traverse((node)=>{
      if(!node.isMesh) return;
      const fix=(mat)=>{
        if(!mat) return;
        if(mat.map) mat.map.colorSpace=THREE.SRGBColorSpace;
        if(mat.emissiveMap) mat.emissiveMap.colorSpace=THREE.SRGBColorSpace;

        // FIX WHITE + YELLOW BLOCKS
        if(!mat.map){
          const c = mat.color;
          const isWhite = c.r>0.9 && c.g>0.9 && c.b>0.9;
          const isYellow = c.r>0.8 && c.g>0.7 && c.b<0.4; // that yellow building
          if(isWhite || isYellow){
            // Make it dark glass / concrete instead of flat color
            mat.color.set("#1c1f26");
            mat.roughness = 0.3;
            mat.metalness = 0.8;
            mat.emissive = new THREE.Color(0x000000);
            mat.emissiveIntensity = 0;
          }
        }
        // Coin stays gold
        if(mat.name==="coin1"){ mat.color.setRGB(1,0.78,0.35); mat.metalness=0.85; mat.roughness=0.28; mat.emissive.setRGB(0.6,0.38,0.08); mat.emissiveIntensity=0.35; }
        mat.needsUpdate=true;
      };
      Array.isArray(node.material)?node.material.forEach(fix):fix(node.material);
      node.frustumCulled=false;
    });
    scene.updateMatrixWorld(true);
    const box=new THREE.Box3(); scene.traverse(n=>{ if(n.isMesh &&!/sky|dome/i.test(n.name)) box.expandByObject(n); });
    if(!box.isEmpty()) scene.position.set(0, -box.min.y, 0);
    setReadyScene(scene);

    // FIX coin animation: force play only valid tracks
    if(actions){
      Object.values(actions).forEach(a=>{
        a.reset().setLoop(THREE.LoopRepeat, Infinity).play();
        // Stop the broken pixe_coin tracks from spamming console
        a.clampWhenFinished = false;
      });
    }
  },[gltf, actions]);

  useFrame((_,d)=>{
    mixer?.update(d);
    if(!groupRef.current) return;
    const t=autoRotate?rotationSpeed:0;
    speed.current=THREE.MathUtils.lerp(speed.current,t,d*2.5);
    groupRef.current.rotation.y+=d*speed.current;
  });

  return (<><group ref={groupRef}>{readyScene && <primitive object={readyScene}/>}</group>{readyScene && <LightsFromScene scene={readyScene}/>}{readyScene && <VideoScreens scene={readyScene}/>}</>);
}

function LookAroundControls({position,lookAt,minFov=35,maxFov=70,onNextSection,onPrevSection}){
  const {camera,gl}=useThree(); const yaw=useRef(0),pitch=useRef(0),dragging=useRef(false),last=useRef({x:0,y:0}),locked=useRef(false);
  useEffect(()=>{ camera.position.set(...position); const dir=new THREE.Vector3(...lookAt).sub(new THREE.Vector3(...position)).normalize(); yaw.current=Math.atan2(dir.x,dir.z); pitch.current=Math.asin(dir.y); camera.fov=50; camera.updateProjectionMatrix(); },[camera]);
  useEffect(()=>{
    const dom=gl.domElement;
    const down=(e)=>{dragging.current=true; last.current={x:e.clientX,y:e.clientY};};
    const up=()=>dragging.current=false;
    const move=(e)=>{ if(!dragging.current) return; const dx=e.clientX-last.current.x, dy=e.clientY-last.current.y; last.current={x:e.clientX,y:e.clientY}; yaw.current-=dx*0.0025; pitch.current-=dy*0.0025; pitch.current=THREE.MathUtils.clamp(pitch.current,-1.2,1.2); };
    const wheel=(e)=>{ e.preventDefault(); const cur=camera.fov, next=THREE.MathUtils.clamp(cur+e.deltaY*0.02,minFov,maxFov); if(!locked.current){ if(e.deltaY>0 && cur>=maxFov-0.5){locked.current=true; onNextSection?.(); setTimeout(()=>locked.current=false,1000); return;} if(e.deltaY<0 && cur<=minFov+0.5){locked.current=true; onPrevSection?.(); setTimeout(()=>locked.current=false,1000); return;}} camera.fov=next; camera.updateProjectionMatrix(); };
    dom.addEventListener("pointerdown",down); window.addEventListener("pointerup",up); window.addEventListener("pointermove",move); dom.addEventListener("wheel",wheel,{passive:false});
    return()=>{ dom.removeEventListener("pointerdown",down); window.removeEventListener("pointerup",up); window.removeEventListener("pointermove",move); dom.removeEventListener("wheel",wheel); };
  },[camera,gl]);
  useFrame(()=>{ const d=new THREE.Vector3(Math.sin(yaw.current)*Math.cos(pitch.current), Math.sin(pitch.current), Math.cos(yaw.current)*Math.cos(pitch.current)); camera.lookAt(camera.position.clone().add(d)); }); return null;
}

export default function Hero3D(){
  const [autoRotate,setAutoRotate]=useState(true); const curRef=useRef(0);
  useEffect(()=>{ const s=()=>{ setAutoRotate(false); setTimeout(()=>setAutoRotate(true),500); }; window.addEventListener("wheel",s,{passive:true}); return()=>window.removeEventListener("wheel",s); },[]);
  return (
    <div style={{width:"100%",height:"100vh",background:"#02030a",position:"relative"}}>
      <Canvas shadows camera={{position:[0,0.8,0],fov:100,near:0.01,far:1000}} gl={{antialias:true,toneMapping:THREE.ACESFilmicToneMapping,toneMappingExposure:0.7,outputColorSpace:THREE.SRGBColorSpace}}>
        <ambientLight intensity={0.6} color="#223366"/><directionalLight position={[5,10,5]} intensity={1} color="#cfd8ff" castShadow/><directionalLight position={[-6,3,3]} intensity={1} color="#4da6ff"/><Environment preset="night"/>
        <Suspense fallback={null}><CityModel autoRotate={autoRotate} rotationSpeed={0.12} /><Preload all /></Suspense>
        <LookAroundControls position={[0,0.5,0]} lookAt={[29,10,0]} onNextSection={()=>curRef.current++} onPrevSection={()=>curRef.current--}/>
      </Canvas>
    </div>
  );
}