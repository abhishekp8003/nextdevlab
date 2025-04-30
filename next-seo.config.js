const SEO = {
  titleTemplate: "%s | NextDev Labs - Web & SEO Experts",
  defaultTitle: "NextDev Labs | Leading Web Development & SEO Agency",
  description:
    "Boost your business with NextDev Labs – expert website development, mobile apps, branding, digital marketing, and SEO solutions. Elevate your online presence today!",
  canonical: "https://nextdev.co.in",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nextdev.co.in/",
    title: "NextDev Labs: End-to-End Solutions",
    description:
      "💡 Unlock growth with NextDev Labs! Premium web & app development, branding, and SEO strategies to dominate the digital world.",
    site_name: "NextDev Labs",
    images: [
      {
        url: "https://nextdev.co.in/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "NextDev Labs - Web & SEO Experts",
      },
    ],
  },

  twitter: {
    handle: "@nextdevlabs",
    site: "@nextdevlabs",
    cardType: "summary_large_image",
    title: "NextDev Labs - Web & SEO Experts 🚀",
    description:
      "We build powerful websites, apps, and SEO strategies to help you grow online! Let’s take your business to the next level. 🔥",
    image: "https://nextdev.co.in/og-image.jpg",
  },

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
      content: "your-google-verification-code", // Replace with actual code
    },
    { name: "theme-color", content: "#ffffff" },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1, maximum-scale=1",
    },
    { name: "apple-mobile-web-app-capable", content: "yes" },
    {
      name: "apple-mobile-web-app-status-bar-style",
      content: "black-translucent",
    },
    { name: "format-detection", content: "telephone=no" },
    { name: "msapplication-TileColor", content: "#ffffff" },
    { name: "msapplication-TileImage", content: "/ms-icon-144x144.png" },
    { name: "cache-control", content: "max-age=31536000, public" },
    { name: "x-dns-prefetch-control", content: "on" },
    { name: "content-language", content: "en" },
    { name: "referrer", content: "strict-origin-when-cross-origin" },
    { name: "og:image:width", content: "1200" },
    { name: "og:image:height", content: "630" },
    { name: "og:type", content: "website" },
    { name: "og:site_name", content: "NextDev Labs" },
    { property: "og:locale", content: "en_US" },
    { property: "og:url", content: "https://nextdev.co.in/" },
    {
      property: "twitter:image:alt",
      content: "NextDev Labs - Web & SEO Experts",
    },
    { property: "twitter:domain", content: "nextdev.co.in" },
    { httpEquiv: "x-ua-compatible", content: "IE=edge" },
  ],

  additionalLinkTags: [
    { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
    {
      rel: "apple-touch-icon",
      href: "https://nextdev.co.in/apple-icon.png",
      sizes: "180x180",
    },
    { rel: "manifest", href: "/site.webmanifest" },
    { rel: "canonical", href: "https://nextdev.co.in" },
  ],

  structuredData: [
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
  ],
};

export default SEO;

