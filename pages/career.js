'use client'

import Head from "next/head";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import CallToActionOne from "../components/call-to-actions/CallToActionOne";
import SectionTitle from "../components/common/SectionTitle";
import Layout from "../components/layouts/Layout";
import { useEffect, useState } from "react";



const Career = () => {
  const [columns, setColumns] = useState("1fr");



useEffect(() => {
  const updateColumns = () => {
    if (window.innerWidth >= 1024) {
      setColumns("repeat(3, 1fr)");
    } else if (window.innerWidth >= 640) {
      setColumns("repeat(2, 1fr)");
    } else {
      setColumns("1fr");
    }
  };

  updateColumns();
  window.addEventListener("resize", updateColumns);
  return () => window.removeEventListener("resize", updateColumns);
}, []);


  return (
    <Layout>
      <Head>
        <title>Career || Nextdev Labs</title>
      </Head>

      <Breadcrumb title="" current="Career" />

      <div className="container">
        <div
          className="mt-[20px] "
          style={{
            marginTop: "43px",
          }}
        >
          <div className="col-lg-12 pt-[50px] ">
            <SectionTitle
              title="Career at NextDev Labs"
              subtitle="Innovate. Build. Transform. Join Us in Shaping the Future."
              description=""
              color="extra04-color"
              alignment="center"
            />
          </div>
          {/* <p className="text-center text-lg mb-10">
           
          </p> */}

          <section className=" p-6 rounded-lg shadow-md mb-10">
            <h4 className="text-2xl font-semibold mb-4">Where We Work</h4>
            <p>
              🌍 Globally. NextDev Labs is a digital-first company, working
              across borders to redefine the digital landscape. We collaborate
              with a wide range of industries to drive innovation, efficiency,
              and digital transformation.
            </p>
          </section>

          <section
            // className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              margin: "62px 0",
            }}
          >
            {[
              "Tech Giants & Startups",
              "Oil & Gas Industry",
              "Automobile & Manufacturing",
              "Pharmaceutical & Healthcare",
              "IT Services & SaaS Companies",
              "Telecommunication & 5G Innovations",
              "Banking & Finance Sector",
              "Retail & eCommerce",
              "Real Estate & Smart Infrastructure",
              "Education & eLearning",
              "Aerospace & Defense",
              "Supply Chain & Logistics",
              "Hospitality & Travel",
            ].map((industry, index) => (
              <div key={index} className=" p-1 rounded-lg shadow-md">
                <h5 className="text-xl font-medium">{industry}</h5>
              </div>
            ))}
          </section>

          <section
            className=" p-6 rounded-lg shadow-md mt-10 "
            style={{
              marginBottom: "20px",
            }}
          >
            <h2 className="text-2xl font-semibold mb-4">
              Why Join NextDev Labs?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "🌍 Global Impact – Work on projects that create a meaningful difference.",
                "📚 Continuous Learning – Stay ahead with cutting-edge technologies.",
                "💼 Flexible Work Culture – Remote, hybrid, and flexible options.",
                "📈 Career Growth – Mentorship, leadership, and skill-building programs.",
                "🌎 Diverse & Inclusive Environment – Celebrate differences and foster innovation.",
                "💰 Competitive Compensation – Your talent deserves recognition and reward.",
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white shadow-md p-4 rounded-xl border border-gray-200 hover:shadow-lg transition"
                >
                  {benefit}
                </div>
              ))}
            </div>
          </section>

          <section className="py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2
                className="text-3xl font-bold text-center mt-[20px] mb-12"
                style={{
                  margin: "50px 0",
                }}
              >
                Current Openings
              </h2>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: columns,
                  gap: "1.5rem",
                }}
              >
                {[
                  {
                    role: "Software Developers",
                    desc: "Build and optimize web applications and digital platforms.",
                  },
                  {
                    role: "UI/UX Designer",
                    desc: "Design intuitive and visually appealing interfaces.",
                  },
                  {
                    role: "Digital Marketing Specialist",
                    desc: "Execute data-driven campaigns, SEO strategies.",
                  },
                  {
                    role: "Business Development Executive",
                    desc: "Identify and connect with potential clients.",
                  },
                  {
                    role: "Content Writer & SEO Specialist",
                    desc: "Craft engaging content for blogs and marketing.",
                  },
                ].map((job, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-100"
                    style={{
                      padding: "14px",
                      borderRadius: "4px",
                    }}
                  >
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">
                        {job.role}
                      </h3>
                      <p className="text-gray-600 text-center">{job.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="text-center mt-10">
            <h2
              className="text-2xl font-semibold mb-4"
              style={{
                margin: "50px 0",
              }}
            >
              How to Apply?
            </h2>
            <p>
              Send your resume and portfolio to{" "}
              <strong>apply@nextdevlabs.com</strong>
            </p>
            <button
              // className="mt-4 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700"
              onClick={() =>
                (window.location.href = "mailto:apply@nextdevlabs.com")
              }
              style={{
                border: "none",
              }}
            >
              <a
                legacyBehavior
                className="axil-button btn-large btn-transparent"
                href="#"
              >
                <span className="button-text">Apply Now</span>
                <span className="button-icon" />
              </a>
            </button>
          </section>
        </div>

        <CallToActionOne />
      </div>
    </Layout>
  );
};

export default Career;
