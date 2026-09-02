// // src/components/GoogleAnalytics/GoogleAnalytics.jsx
// import { useEffect } from 'react';
// import { useLocation } from 'react-router-dom';

// const GoogleAnalytics = () => {
//   const location = useLocation();
  
//   useEffect(() => {
//     // Initialize Google Analytics if not already initialized
//     if (!window.dataLayer) {
//       window.dataLayer = window.dataLayer || [];
//       function gtag(){window.dataLayer.push(arguments);}
//       window.gtag = gtag;
//       gtag('js', new Date());
//       gtag('config', 'G-GTQTNFG0KP');
//     }
//   }, []);
  
//   useEffect(() => {
//     // Track pageviews when the route changes
//     if (window.gtag) {
//       window.gtag('config', 'G-GTQTNFG0KP', {
//         page_path: location.pathname + location.search,
//       });
//     }
//   }, [location]);
  
//   return null;
// };

// export default GoogleAnalytics;


import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const GoogleAnalytics = () => {
  const location = useLocation();
  
  useEffect(() => {
    // Initialize Google Analytics if not already initialized
    if (!window.dataLayer) {
      window.dataLayer = window.dataLayer || [];
      function gtag(){window.dataLayer.push(arguments);}
      window.gtag = gtag;
      gtag('js', new Date());
      gtag('config', 'G-GTQTNFG0KP');
    }
  }, []);
  
  useEffect(() => {
    // Track pageviews when the route changes
    if (window.gtag) {
      window.gtag('config', 'G-GTQTNFG0KP', {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);
  
  return null;
};

export default GoogleAnalytics;