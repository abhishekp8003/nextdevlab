// import AOS from "aos";
// import "aos/dist/aos.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { useEffect } from "react";
// import "../assets/css/plugins/font-awesome.css";
// import "../assets/css/plugins/icomoon.css";
// import "../assets/css/plugins/plugins.css";
// import "../assets/scss/style.scss";

// import { DefaultSeo } from "next-seo";
// import SEO from "../next-seo.config";
// import Script from "next/script";
// import { useRouter } from "next/router";    
// const GA_ID = "G-5H9E90P23H";              // ⬅️ your GA4 key

// const structuredData = [
//   {
//     "@context": "https://schema.org",
//     "@type": "BreadcrumbList",
//     itemListElement: [
//       {
//         "@type": "ListItem",
//         position: 1,
//         name: "Home",
//         item: "https://nextdev.co.in/",
//       },
//       {
//         "@type": "ListItem",
//         position: 2,
//         name: "Services",
//         item: "https://nextdev.co.in/services/",
//       },
//       {
//         "@type": "ListItem",
//         position: 3,
//         name: "About Us",
//         item: "https://www.nextdev.co.in/about",
//       },
//     ],
//   },
//   {
//     "@context": "https://schema.org",
//     "@type": "Organization",
//     name: "NextDev Labs",
//     url: "https://nextdev.co.in",
//     logo:
//       "https://firebasestorage.googleapis.com/v0/b/imageuploader-7809e.appspot.com/o/Monogram%20colour.svg?alt=media&token=3446b4a6-29b5-457e-908c-d9371470e622",
//     contactPoint: {
//       "@type": "ContactPoint",
//       telephone: "+91 9511838696 ",
//       contactType: "customer service",
//       areaServed: "IN",
//       availableLanguage: ["English", "Hindi"],
//     },
//   },
// ];

// function MyApp({ Component, pageProps }) {
//   const router =useRouter();
  
//   useEffect(() => {
//     import("bootstrap/dist/js/bootstrap.bundle")
//       .then(() => console.log("Bootstrap loaded"))
//       .catch((err) => console.error("Bootstrap failed to load", err));

//     AOS.init({ once: true });
//   }, []);

//   // GA4: track client-side route changes (no changes to your GA scripts)
//   useEffect(() => {
//     const handleRouteChange = (url) => {
//       // fire a page_view on SPA navigations
//       window.gtag?.("config", GA_ID, { page_path: url });
//     };
//     router.events.on("routeChangeComplete", handleRouteChange);
//     return () => router.events.off("routeChangeComplete", handleRouteChange);
//   }, [router.events]);

//   return (
//     <>
       
//       {/* Google Analytics (G-5H9E90P23H) */}
//       <Script
//         strategy="afterInteractive"
//         src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
//       />

//       <Script
//         id="google-analytics"
//         strategy="afterInteractive"
//         dangerouslySetInnerHTML={{
//           __html: `
//             window.dataLayer = window.dataLayer || [];
//             function gtag(){dataLayer.push(arguments);}
//             gtag('js', new Date());
//             gtag('config', '${GA_ID}', {
//               page_path: window.location.pathname,
//             });
//           `,
//         }}
//       />
//         <Script
//           id="twitter-pixel"
//           strategy="afterInteractive"
//           dangerouslySetInnerHTML={{
//             __html: `
//               !function(e,t,n,s,u,a){e.twq||(s=e.twq=function(){
//                 s.exe ? s.exe.apply(s,arguments) : s.queue.push(arguments);
//               },s.version='1.1',s.queue=[],u=t.createElement(n),u.async=!0,
//               u.src='https://static.ads-twitter.com/uwt.js',
//               a=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(u,a))}
//               (window,document,'script');
//               twq('config','qb0io');
//             `,
//           }}
//         />
//       {/* Meta Pixel Code */}
//       <Script
//         id="meta-pixel"
//         strategy="afterInteractive"
//         dangerouslySetInnerHTML={{
//           __html: `
//             !function(f,b,e,v,n,t,s)
//             {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
//             n.callMethod.apply(n,arguments):n.queue.push(arguments)};
//             if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
//             n.queue=[];t=b.createElement(e);t.async=!0;
//             t.src=v;s=b.getElementsByTagName(e)[0];
//             s.parentNode.insertBefore(t,s)}(window, document,'script',
//             'https://connect.facebook.net/en_US/fbevents.js');
//             fbq('init', '693205900126260');
//             fbq('track', 'PageView');
//           `,
//         }}
//       />

//       {/* Noscript fallback for Meta Pixel */}
//       <noscript>
//         <img
//           height="1"
//           width="1"
//           style={{ display: "none" }}
//           src="https://www.facebook.com/tr?id=693205900126260&ev=PageView&noscript=1"
//           alt=""
//         />
//       </noscript>

//       {/* Structured Data for SEO */}
//       <Script
//         id="structured-data"
//         type="application/ld+json"
//         strategy="afterInteractive"
//         dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
//       />

//       {/* Default SEO Meta */}
//       <DefaultSeo {...SEO} />

//       {/* Main Component */}
//       <Component {...pageProps} />
//     </>
//   );
// }

// export default MyApp;


  import AOS from "aos";
  import "aos/dist/aos.css";
  import "bootstrap/dist/css/bootstrap.min.css";
  import { useEffect } from "react";
  import "../assets/css/plugins/font-awesome.css";
  import "../assets/css/plugins/icomoon.css";
  import "../assets/css/plugins/plugins.css";
  import "../assets/scss/style.scss";

  import { DefaultSeo } from "next-seo";
  import SEO from "../next-seo.config";
  import Script from "next/script";
  import { useRouter } from "next/router";    
  const GA_ID = "G-5H9E90P23H";              // ⬅️ your GA4 key

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://nextdev.co.in/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Services",
          item: "https://nextdev.co.in/services/",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "About Us",
          item: "https://www.nextdev.co.in/about",
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "NextDev Labs",
      url: "https://nextdev.co.in",
      logo:
        "https://firebasestorage.googleapis.com/v0/b/imageuploader-7809e.appspot.com/o/Monogram%20colour.svg?alt=media&token=3446b4a6-29b5-457e-908c-d9371470e622",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+91 9511838696 ",
        contactType: "customer service",
        areaServed: "IN",
        availableLanguage: ["English", "Hindi"],
      },
    },
  ];

  function MyApp({ Component, pageProps }) {
    const router = useRouter();
    
    useEffect(() => {
      import("bootstrap/dist/js/bootstrap.bundle")
        .then(() => console.log("Bootstrap loaded"))
        .catch((err) => console.error("Bootstrap failed to load", err));

      AOS.init({ once: true });
    }, []);

    // GA4: track client-side route changes
    useEffect(() => {
      const handleRouteChange = (url) => {
        window.gtag?.("config", GA_ID, { page_path: url });
      };
      router.events.on("routeChangeComplete", handleRouteChange);
      return () => router.events.off("routeChangeComplete", handleRouteChange);
    }, [router.events]);

    return (
      <>
        {/* Google Analytics (G-5H9E90P23H) */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        />

        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />

        {/* Twitter Pixel (from uploaded base code) */}
        <Script
          id="twitter-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(e,t,n,s,u,a){e.twq||(s=e.twq=function(){
                s.exe ? s.exe.apply(s,arguments) : s.queue.push(arguments);
              },s.version='1.1',s.queue=[],u=t.createElement(n),u.async=!0,
              u.src='https://static.ads-twitter.com/uwt.js',
              a=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(u,a))}
              (window,document,'script');
              twq('config','qb0io');
            `,
          }}
        />

        {/* Meta Pixel Code */}
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '693205900126260');
              fbq('track', 'PageView');
            `,
          }}
        />

        {/* Noscript fallback for Meta Pixel */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=693205900126260&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>

        {/* Structured Data for SEO */}
        <Script
          id="structured-data"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />

        {/* Default SEO Meta */}
        <DefaultSeo {...SEO} />

        {/* Main Component */}
        <Component {...pageProps} />
      </>
    );
  }

  export default MyApp;
