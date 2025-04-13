// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { useEffect } from 'react';
// import '../assets/css/plugins/font-awesome.css';
// import '../assets/css/plugins/icomoon.css';
// import '../assets/css/plugins/plugins.css';
// import '../assets/scss/style.scss';

// function MyApp({ Component, pageProps }) {
//   useEffect(() => {
//     import('bootstrap/dist/js/bootstrap.bundle');

//     AOS.init({
//       once: true,
//     });
//   }, []);

//   return <Component {...pageProps} />;
// }

// export default MyApp;
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import '../assets/css/plugins/font-awesome.css';
import '../assets/css/plugins/icomoon.css';
import '../assets/css/plugins/plugins.css';
import '../assets/scss/style.scss';



import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle')
      .then(() => console.log("Bootstrap loaded"))
      .catch((err) => console.error("Bootstrap failed to load", err));

    AOS.init({ once: true });
  }, []);

  return (
    <>
      {/* Google Analytics - Pundefinedrevent SSR Errors */}
      {typeof window !== "" && (
        <>
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
        </>
      )}

      {/* Default SEO */}
      <DefaultSeo {...SEO} />

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
