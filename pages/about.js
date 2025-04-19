import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import BannerSeven from '../components/banners/BannerSeven';
import Layout from '../components/layouts/Layout';
import ServiceThree from '../components/services/ServiceThree';
import WorkingProcess from '../components/services/WorkingProcess';
import TeamOne from '../components/teams/TeamOne';
import CaseStudyData from '../data/CaseStudies.json';
import { slugify } from '../helpers/utilities';

const About = () => {
    const [ref, inView] = useInView({
        threshold: 0.3,
        triggerOnce: true,
    });
    const workingProcess = {
      title: "Our Development Process",
      description:
        "At NextDev Labs, we follow a streamlined approach to turn ideas into powerful digital solutions. Our process ensures efficiency, quality, and innovation at every stage.",
      strategies: [
        {
          id: 1,
          title: "Discover",
          subtitle: "Understanding Your Vision",
          description:
            "We start by diving deep into your business goals, target audience, and project requirements. Through in-depth research and strategy sessions, we lay the foundation for a successful digital product.",
          highlightColor: "extra04-color",
          image: "/images/process/process-01.jpg",
        },
        {
          id: 2,
          title: "Prototype",
          subtitle: "Crafting User-Centric Designs",
          description:
            "Our team creates wireframes and interactive prototypes to visualize the user journey. We focus on seamless design, intuitive interfaces, and a great user experience before moving to full-scale development.",
          highlightColor: "extra05-color",
          image: "/images/process/process-02.jpg",
        },
        {
          id: 3,
          title: "Test",
          subtitle: "Ensuring Quality & Performance",
          description:
            "We rigorously test every aspect of the project, from functionality and usability to performance and security. Our QA process ensures that your website or app is bug-free and optimized for success.",
          highlightColor: "extra06-color",
          image: "/images/process/process-03.jpg",
        },
        {
          id: 4,
          title: "Build",
          subtitle: "Deploying Scalable Solutions",
          description:
            "With the final product ready, we handle deployment and launch. Our team ensures a smooth transition to production, offering ongoing support, updates, and optimization to keep your digital presence at its best.",
          highlightColor: "extra07-color",
          image: "/images/process/process-04.jpg",
        },
      ],
    };
    

    return (
        <Layout>
            <Head>
                <title>About Us || NextDev Labs</title>
            </Head>

            <main className="page-wrapper">
                <BannerSeven/>

                <div
                    ref={ref}
                    className="axil-featured-area ax-section-gap bg-color-white"
                >
                    <div className="container">
                        <div className="row d-flex flex-wrap axil-featured row--40">
                            <div className="col-lg-6 col-xl-6 col-md-12 col-12">
                                <div className="thumb-inner">
                                    <div className="thumbnail">
                                        <Image
                                            width={801}
                                            height={712}
                                            className="image w-100"
                                            src="/images/featured/featured-image-022.png"
                                            alt="Featured Images"
                                        />
                                    </div>
                                    <div className="shape-group">
                                        <div className="shape">
                                            <i className="icon icon-breadcrumb-2"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-xl-6 col-md-12 col-12 mt_md--40 mt_sm--40">
                                <div className="inner">
                                <div className="section-title text-start">
                                    <span className="sub-title extra04-color">
                                        Featured Case Study
                                    </span>
                                    <h2 className="title">
                                        <Link legacyBehavior            href={`/case-study/${slugify(CaseStudyData[0].title)}`}>
                                        <a legacyBehavior >
                                            Elevating Businesses with Scalable Digital Solutions{" "}
                                        </a>
                                        </Link>
                                    </h2>
                                    <p className="subtitle-2">
                                        At NextDev Labs, we specialize in building high-performance websites and applications  
                                        that drive growth. Discover how we transformed our clients vision into a powerful  
                                        digital experience.
                                    </p>
                                    <Link legacyBehavior            href={`/case-study/${slugify(CaseStudyData[0].title)}`}>
                                        <a legacyBehavior  className="axil-button btn-large btn-transparent">
                                        <span className="button-text">Read Case Study</span>
                                        <span className="button-icon"/>
                                        </a>
                                    </Link>
                                    </div>

                                    <div className="axil-counterup-area d-flex flex-wrap separator-line-vertical">
                                        <div className="single-counterup counterup-style-1">
                                            <h3 className="count">
                                                <CountUp start={0} end={inView ? "15" : 0}/>
                                            </h3>
                                            <p>ROI increase</p>
                                        </div>

                                        <div className="single-counterup counterup-style-1">
                                            <h3 className="count counter-k">
                                                <CountUp start={0} end={inView ? "60" : 0}/>
                                            </h3>
                                            <p>Monthly website visits</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <ServiceThree/>

                <TeamOne/>

                <WorkingProcess process={workingProcess}/>
            </main>
        </Layout>
    );
};

export default About;
