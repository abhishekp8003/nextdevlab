import Head from "next/head";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import Layout from "../components/layouts/Layout";
import PricingOne from "../components/pricings/PricingOne";

const pricingPlans = [
  { name: "Premium", price: "$49/mo", features: ["Feature 1", "Feature 2", "Feature 3"] },
  { name: "Pro", price: "$99/mo", features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"] },
  { name: "Business", price: "$199/mo", features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4", "Feature 5"] }
];

const Pricing = () => {
  return (
    <Layout>
      <Head>
        <title>Pricing || Nextdev Labs</title>
      </Head>

      <Breadcrumb title="Pricing" current="Pricing" />

      {/* <main className="page-wrappper">
        <div className="axil-pricing-table-area pricing-shape-position ax-section-gap bg-color-lightest">
          <div className="container">
            <div className="row row--25 justify-content-center">
              {pricingPlans.map((pricing, index) => (
                <PricingTable
                  key={`pricing-table-${index}`}
                  column="col-lg-4 col-md-6 col-sm-12 col-12"
                  pricingTableClass={
                    index === 1
                      ? "axil-pricing-table prcing-style-2 mt--40 active"
                      : "axil-pricing-table prcing-style-2 mt--40 mt_sm--60"
                  }
                  buttonClass={index === 1 ? "btn-solid" : "btn-transparent"}
                  data={pricing}
                />
              ))}
            </div>
          </div>
          <div className="shape-group">
            <div className="shape">
              <i className="icon icon-shape-15"></i>
            </div>
          </div>
        </div>

        <div className="axil-faq-area ax-section-gap bg-color-white">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <SectionTitle
                  title="Frequently asked questions"
                  subtitle="we've got answers"
                  description="Aenean hendrerit laoreet vehicula. Nullam convallis augue at enim gravida pellentesque."
                  color="extra04-color"
                  alignment="center"
                />
              </div>
            </div>
            <div className="row mt--30">
              <div className="col-lg-8 offset-lg-2">
                <div id="accordion" className="axil-accordion--2">
                  {[1, 2, 3].map((num) => (
                    <div className="card" key={num}>
                      <div className="card-header" id={`heading${num}`}>
                        <a legacyBehavior 
                          href="#"
                          className="btn btn-link d-block text-start collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target={`#collapse${num}`}
                          aria-expanded="false"
                          aria-controls={`collapse${num}`}
                        >
                          Nunc rhoncus magna ut venenatis feugiat.
                        </a>
                      </div>
                      <div
                        id={`collapse${num}`}
                        className="collapse"
                        aria-labelledby={`heading${num}`}
                        data-bs-parent="#accordion"
                      >
                        <div className="card-body">
                          Vivamus magna est, placerat et dignissim et, elementum quis lacus. Nulla laoreet pharetra vehicula. Vestibulum euismod augue ac velit consectetur, ac tincidunt ante hendrerit.
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <CallToActionOne />
      </main> */}
      <PricingOne/>
    </Layout>
  );
};

export default Pricing;