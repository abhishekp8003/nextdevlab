import Head from "next/head";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import CallToActionOne from "../components/call-to-actions/CallToActionOne";
import SectionTitle from "../components/common/SectionTitle";
import Layout from "../components/layouts/Layout";



const Career = () => {
  return (
    <Layout>
      <Head>
        <title>Career || Nextdev Labs</title>
      </Head>

      <Breadcrumb title="" current="Career" />

      <div className="container">
        <div>
          <div className="col-lg-12 pt-[50px]">
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
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              marginTop :"22px"
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

          <section className=" p-6 rounded-lg shadow-md mt-10">
            <h2 className="text-2xl font-semibold mb-4">
              Why Join NextDev Labs?
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              {[
                "🌍 Global Impact – Work on projects that create a meaningful difference.",
                "📚 Continuous Learning – Stay ahead with cutting-edge technologies.",
                "💼 Flexible Work Culture – Remote, hybrid, and flexible options.",
                "📈 Career Growth – Mentorship, leadership, and skill-building programs.",
                "🌎 Diverse & Inclusive Environment – Celebrate differences and foster innovation.",
                "💰 Competitive Compensation – Your talent deserves recognition and reward.",
              ].map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-semibold mb-4">Current Openings</h2>
            <div className="grid md:grid-cols-2 gap-6">
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
                <div key={index} className=" p-4 rounded-lg shadow-md">
                  <h3 className="text-xl font-medium">{job.role}</h3>
                  <p className="mt-2">{job.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="text-center mt-10">
            <h2 className="text-2xl font-semibold mb-4">How to Apply?</h2>
            <p>
              Send your resume and portfolio to{" "}
              <strong>apply@nextdevlabs.com</strong>
            </p>
            <button
              className="mt-4 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700"
              onClick={() =>
                (window.location.href = "mailto:apply@nextdevlabs.com")
              }
            >
              Apply Now
            </button>
          </section>
        </div>

    
        <CallToActionOne />
      </div>
    </Layout>
  );
};

export default Career;
