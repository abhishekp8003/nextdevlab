// import {Html, Head, Main, NextScript} from 'next/document'

// const Document = () => {
//     return (
//         <Html>
//             <Head>
//                 <link rel="icon" type="image/x-icon"
//                       href={`${process.env.NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_BASEPATH ?? '' : ''}/favicon.ico`}/>
//                 <link rel="preconnect" href="https://fonts.googleapis.com"/>
//                 <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
//                 <link
//                     href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap"
//                     rel="stylesheet"/>
//             </Head>
//             <body>
//             <Main/>
//             <NextScript/>
//             </body>
//         </Html>
//     )
// }

// export default Document;
import { Html, Head, Main, NextScript } from 'next/document';

const Document = () => {
  return (
    <Html lang="en">
      <Head>
        {/* Favicon */}
        <link 
          rel="icon" 
          type="image/x-icon" 
          href={`${process.env.NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_BASEPATH ?? '' : ''}/favicon.ico`} 
        />

        {/* Fonts Optimization */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap"
          rel="stylesheet"
        />

        {/* Meta Tags for SEO */}
        <meta name="theme-color" content="#ffffff" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="NextDev Labs" />

        {/* Google Analytics - Ensures tracking across all pages */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=QR1JTGFsRLWCKRzn7LHLNw"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'QR1JTGFsRLWCKRzn7LHLNw', {
              page_path: window.location.pathname,
            });
          `,
        }} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
