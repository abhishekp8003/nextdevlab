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
    logo: "https://nextdev.co.in/logo.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91 97678 26126",
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi"],
    },
  },
];

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle")
      .then(() => console.log("Bootstrap loaded"))
      .catch((err) => console.error("Bootstrap failed to load", err));

    AOS.init({ once: true });
  }, []);

  return (
    <>
      {/* Google Analytics */}
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=QR1JTGFsRLWCKRzn7LHLNw"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'QR1JTGFsRLWCKRzn7LHLNw', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />

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

