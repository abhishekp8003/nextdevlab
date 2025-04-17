
import { Head, Html, Main, NextScript } from 'next/document';
import Script from 'next/script';

const Document = () => {
  return (
    <Html lang="en">
      <Head>
        {/* Favicon */}
        <link            
          rel="icon"
          type="image/x-icon"
          href={`${
            process.env.NODE_ENV === "production"
              ? process.env.NEXT_PUBLIC_BASEPATH ?? ""
              : ""
          }/favicon.ico`}
        />

        {/* Fonts Optimization */}
        <link             rel="preconnect" href="https://fonts.googleapis.com" />
        <link            
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link            
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap"
          rel="stylesheet"
        />

        {/* Meta Tags for SEO */}
        <meta name="theme-color" content="#ffffff" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="NextDev Labs" />

        {/* Google Analytics - Ensures tracking across all pages */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=QR1JTGFsRLWCKRzn7LHLNw"
        ></Script>
        <script
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
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
