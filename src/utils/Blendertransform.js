import * as THREE from "three";

export function blenderTransformToThree(location, rotationDeg, scale) {
  const [lx, ly, lz] = location;
  const [rx, ry, rz] = rotationDeg.map(THREE.MathUtils.degToRad);
  const [sx, sy, sz] = scale;

  const qBasis = new THREE.Quaternion().setFromAxisAngle(
    new THREE.Vector3(1, 0, 0),
    -Math.PI / 2
  );
  const qBasisInv = qBasis.clone().invert();

  const position = new THREE.Vector3(lx, ly, lz).applyQuaternion(qBasis);

  const qBlender = new THREE.Quaternion().setFromEuler(
    new THREE.Euler(rx, ry, rz, "XYZ")
  );
  const quaternion = qBasis.clone().multiply(qBlender).multiply(qBasisInv);

  const scaleOut = new THREE.Vector3(sx, sz, sy);

  return { position, quaternion, scale: scaleOut };
}