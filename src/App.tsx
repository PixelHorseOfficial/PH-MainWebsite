import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import ScrollToTop from "./ScrollToTop";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
// import LoadingScreen from "./components/LoadingScreen/LoadingScreen";

import HomePage from "./components/Home/HomePage";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import AdvertisingDetail from "./components/Services/3D-Advertising/AdvertisingDetail";
import DigitalMarketingDetail from "./components/Services/DigitalMarketing/DigitalMarketingDetail";
import ITSolutionsDetail from "./components/Services/ITSolutions/ITSolutionsDetail";
import IoTSolutionsDetail from "./components/Services/IoTSolutions/IoTSolutionsDetail";
import DigitalExperienceDetail from "./components/Services/DigitalExperience/DigitalExperienceDetail";
import WebDesigningDetail from "./components/Services/3DWebDesigning/WebDesigningDetail";
import UIUXDesignDetail from "./components/Services/UIUXDesign/UIUXDesignDetail";
import BlockchainDetail from "./components/Services/Blockchain/BlockchainDetail";
import AnimationCreation from "./components/Services/AnimationCreation/AnimationCreation";
import AnamorphicVideo from "./components/Services/3D-Advertising/AnamorphicVideo/AnamorphicVideo";
import DigitalStoreBranding from "./components/Services/3D-Advertising/DigitalStoreBranding/DigitalStoreBranding";
import OutdoorBranding from "./components/Services/3D-Advertising/OutdoorBranding/OutdoorBranding";
import CelebrityAdvertising from "./components/Services/DigitalMarketing/Celebrity/CelebrityAdvertising";
import ContentCreation from "./components/Services/DigitalMarketing/ContentCreation/ContentCreation";
import GoogleAdWords from "./components/Services/DigitalMarketing/GoogleAdWords/GoogleAdWords";
import GoogleAnalytics from "./components/Services/DigitalMarketing/GoogleAnalytics/GoogleAnalytics";
import PPCAdvertising from "./components/Services/DigitalMarketing/PPC/PPCAdvertising";
import SEOServecies from "./components/Services/DigitalMarketing/SEO/SEOServices";
import SocialMediaMarketing from "./components/Services/DigitalMarketing/SocialMedia/SocialMediaMarketing";
import WebsiteManagement from "./components/Services/DigitalMarketing/WebsiteManagement/WebsiteManagement";
import ARVRDevelopment from "./components/Services/IoTSolutions/ARVR/ARVRDevelopment";
import ServiceDetail from "./components/Services/ServiceDetail";
import Services from "./components/Services/Services";
import PrivacyPolicy from "./components/Support/PrivacyPolicy/PrivacyPolicy";
import TermsOfService from "./components/Support/TermsOfService/TermsOfService";
import SystemStatus from "./components/Support/SystemStatus/SystemStatus";
import ContactSupport from "./components/Support/ContactSupport/ContactSupport";
import HelpCenter from "./components/Support/HelpCenter/HelpCenter";
import AboutUs from "./components/Company/AboutUs/AboutUs";
import Awards from "./components/Company/Awards/Awards";
import Careers from "./components/Company/Careers/Careers";
import OurTeam from "./components/Company/OurTeam/OurTeam";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500); // match LoadingScreen animation

    return () => clearTimeout(timer);
  }, []);

  // 🔥 SHOW LOADER FIRST
  if (isLoading) {
    // return <LoadingScreen />;
  }

return (
  <>
    <ScrollToTop />
    <Header />
    <Routes>
      {/* Home */}
      <Route index element={<HomePage />} />
      <Route path="/homepage" element={<HomePage />} />



      {/* Optional */}
      <Route path="/hero" element={<Hero />} />

      {/* Basic Pages */}
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />

        {/* 3D Advertising */}
        <Route path="/3d-advertising" element={<AdvertisingDetail />} />
        <Route path="/anamorphic-video" element={<AnamorphicVideo />} />
        <Route path="/digital-store-branding" element={<DigitalStoreBranding />} />
        <Route path="/outdoor-branding" element={<OutdoorBranding />} />

        {/* Digital Marketing */}
        <Route path="/digital-marketing" element={<DigitalMarketingDetail />} />
        <Route path="/celebrity-advertising" element={<CelebrityAdvertising />} />
        <Route path="/content-creation" element={<ContentCreation />} />
        <Route path="/google-adwords" element={<GoogleAdWords />} />
        <Route path="/google-analytics" element={<GoogleAnalytics />} />
        <Route path="/ppc-advertising" element={<PPCAdvertising />} />
        <Route path="/seo-services" element={<SEOServecies />} />
        <Route path="/social-media-marketing" element={<SocialMediaMarketing />} />
        <Route path="/website-management" element={<WebsiteManagement />} />

        {/* IT & IoT */}
        <Route path="/it-solutions" element={<ITSolutionsDetail />} />
        <Route path="/iot-solutions" element={<IoTSolutionsDetail />} />
        <Route path="/arvr-development" element={<ARVRDevelopment />} />

        {/* Others */}
        <Route path="/digital-experience" element={<DigitalExperienceDetail />} />
        <Route path="/3d-webdesigning" element={<WebDesigningDetail />} />
        <Route path="/uiux-design" element={<UIUXDesignDetail />} />
        <Route path="/blockchain" element={<BlockchainDetail />} />
        <Route path="/animation-creation" element={<AnimationCreation />} />
        <Route path="/service-detail" element={<ServiceDetail />} />
        <Route path="/services" element={<Services />} />

        {/* Legal */}
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/system-status" element={<SystemStatus />} />
        <Route path="/contact-support" element={<ContactSupport />} />
        <Route path="/help-center" element={<HelpCenter />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/awards" element={<Awards />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/our-team" element={<OurTeam />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
