const SEO = {
  titleTemplate: "%s | NextDev Labs - Web & SEO Experts",
  defaultTitle: "NextDev Labs | Leading Web Development & SEO Agency",
  description:
    "Boost your business with NextDev Labs – expert website development, mobile apps, branding, digital marketing, and SEO solutions. Elevate your online presence today!",
  canonical: "https://yourwebsite.com",

  // 🔹 Open Graph (Facebook, WhatsApp, Instagram)
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourwebsite.com/",
    title:
      "NextDev Labs: End-to-End Solutions",
    description:
      "💡 Unlock growth with NextDev Labs! Premium web & app development, branding, and SEO strategies to dominate the digital world.",
    site_name: "NextDev Labs",
    images: [
      {
        url: "https://yourwebsite.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "NextDev Labs - Web & SEO Experts",
      },
    ],
  },

  // 🔹 Twitter Card (X / Twitter)
  twitter: {
    handle: "@yourhandle",
    site: "@yourhandle",
    cardType: "summary_large_image",
    title: "NextDev Labs - Web & SEO Experts 🚀",
    description:
      "We build powerful websites, apps, and SEO strategies to help you grow online! Let’s take your business to the next level. 🔥",
    image: "https://yourwebsite.com/og-image.jpg",
  },

  // 🔹 Extra Meta Tags for SEO & Social Media
  additionalMetaTags: [
    { name: "author", content: "NextDev Labs" },
    {
      name: "keywords",
      content:
        "Web Development, SEO, App Development, Branding, Digital Marketing, NextDev Labs",
    },
    {
      name: "robots",
      content:
        "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
    },
    {
      name: "google-site-verification",
      content: "your-google-verification-code",
    },
    { name: "theme-color", content: "#ffffff" },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1, maximum-scale=1",
    }, // Prevent zooming beyond 1x
    { name: "apple-mobile-web-app-capable", content: "yes" },
    {
      name: "apple-mobile-web-app-status-bar-style",
      content: "black-translucent",
    },
    { name: "format-detection", content: "telephone=no" }, // Prevents iOS from auto-linking phone numbers
    { name: "msapplication-TileColor", content: "#ffffff" },
    { name: "msapplication-TileImage", content: "/ms-icon-144x144.png" },
    { name: "cache-control", content: "max-age=31536000, public" }, // Browser caching for better performance
    { name: "x-dns-prefetch-control", content: "on" }, // Helps with faster DNS resolution
    { name: "content-language", content: "en" }, // Defines the primary language of the page
    { name: "referrer", content: "strict-origin-when-cross-origin" }, // Security & privacy
    { name: "og:image:width", content: "1200" },
    { name: "og:image:height", content: "630" },
    { name: "og:type", content: "website" },
    { name: "og:site_name", content: "NextDev Labs" },
    { property: "og:locale", content: "en_US" },
    { property: "og:url", content: "https://yourwebsite.com/" },
    {
      property: "twitter:image:alt",
      content: "NextDev Labs - Web & SEO Experts",
    },
    { property: "twitter:domain", content: "yourwebsite.com" },
    { httpEquiv: "x-ua-compatible", content: "IE=edge" },
  ],

  // 🔹 Link Tags (Favicon, Apple Icons, Web Manifest)
  additionalLinkTags: [
    { rel: "icon", href: "https://yourwebsite.com/favicon.ico" },
    {
      rel: "apple-touch-icon",
      href: "https://yourwebsite.com/apple-icon.png",
      sizes: "180x180",
    },
    { rel: "manifest", href: "/site.webmanifest" },
    { rel: "canonical", href: "https://yourwebsite.com" }, // Canonical tag to prevent duplicate content
  ],

  // 🔹 Structured Data (JSON-LD) - Breadcrumbs, Organization, LocalBusiness
  structuredData: [
    // Breadcrumbs for Google Rich Results
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://yourwebsite.com/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Services",
          item: "https://yourwebsite.com/services/",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "SEO Optimization",
          item: "https://yourwebsite.com/services/seo-optimization/",
        },
      ],
    },

    // Organization Schema
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "NextDev Labs",
      url: "https://yourwebsite.com",
      logo: "https://yourwebsite.com/logo.png",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+1-234-567-8900",
        contactType: "customer service",
        areaServed: "US",
        availableLanguage: ["English"],
      },
      sameAs: [
        "https://www.facebook.com/nextdevlabs",
        "https://twitter.com/nextdevlabs",
        "https://www.linkedin.com/company/nextdevlabs/",
      ],
    },

    // Local Business Schema
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "NextDev Labs",
      address: {
        "@type": "PostalAddress",
        streetAddress: "123 Tech Street",
        addressLocality: "San Francisco",
        addressRegion: "CA",
        postalCode: "94107",
        addressCountry: "US",
      },
      telephone: "+1-234-567-8900",
      url: "https://yourwebsite.com",
      image: "https://yourwebsite.com/logo.png",
      priceRange: "$$",
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
    },
  ],
};

export default SEO;
