// pages/form.js
import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layouts/Layout";
import SectionTitle from "../components/common/SectionTitle";

export default function FormPage() {
  // Your Google Form links
  const embedUrl =
    "https://docs.google.com/forms/d/e/1FAIpQLSfSOdj-9esFaXdgiNH5AYzX7sJc9bY-Dw8MKRwVMv5ZMhdC3A/viewform?embedded=true";
  const directUrl =
    "https://docs.google.com/forms/d/e/1FAIpQLSfSOdj-9esFaXdgiNH5AYzX7sJc9bY-Dw8MKRwVMv5ZMhdC3A/viewform";

  return (
    <Layout>
      <Head>
        <title>Get a Quote — NextDev Labs</title>
        <meta
          name="description"
          content="Fill this quick form to get a website, app, or marketing quote from NextDev Labs."
        />
      </Head>

      <main className="formPage">
        {/* Small page-only link row (optional) */}
       

        <div className="container">
          <SectionTitle
            title="Get a Quote — NextDev Labs"
            subtitle="Fill this quick form and our team will reach out shortly."
            alignment="center"
          />

          <div className="formCard">
            <iframe
              src={embedUrl}
              title="NextDev Labs Quote Form"
              loading="lazy"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
            />
          </div>

          <p className="fallback">
            If the form doesn’t load,&nbsp;
            <a href={directUrl} target="_blank" rel="noreferrer">
              open it here
            </a>
            .
          </p>
        </div>
      </main>

      {/* 🔒 Page-scoped styles only affect this file */}
      <style jsx>{`
        :root { --brand: #3c67ff; --ink: #0b0d12; --muted: #667085; }

        .formPage {
          background: #f7f9fc;          /* light page just for /form */
          color: var(--ink);
          padding: 72px 0;              /* leave space below sticky nav */
          min-height: 100vh;
        }

        .container {
          max-width: 1140px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .quickLinks {
          max-width: 1140px;
          margin: 0 auto 16px;
          padding: 0 20px;
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }
        .quickLinks a {
          display: inline-block;
          padding: 6px 12px;
          border: 1px solid #e6ebf1;
          border-radius: 999px;
          background: #fff;
          text-decoration: none;
          color: var(--ink);
          font-weight: 600;
        }
        .quickLinks a:hover { border-color: var(--brand); color: var(--brand); }

        .formCard {
          background: #ffffff;
          border: 1px solid #e6ebf1;
          border-radius: 16px;
          box-shadow: 0 12px 30px rgba(16, 24, 40, 0.08);
          overflow: hidden;
        }
        .formCard iframe {
          display: block;
          width: 100%;
          height: 85vh;                 /* responsive height */
          border: 0;
          background: #fff;
        }

        .fallback {
          text-align: center;
          margin-top: 12px;
          color: var(--muted);
        }
        .fallback a { color: var(--brand); text-decoration: underline; }

        @media (max-width: 640px) {
          .formPage { padding: 56px 0; }
          .formCard iframe { height: 70vh; }
        }
      `}</style>
    </Layout>
  );
}
