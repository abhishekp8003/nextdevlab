import Image from 'next/image';
import Link from "next/link";
import Tilt from 'react-parallax-tilt';

const BannerOne = () => {
    return (
        <div className="axil-slider-area axil-slide-activation">
            <div className="axil-slide slide-style-default theme-gradient slider-fixed-height d-flex align-items-center paralax-area">
                <div className="container">
                    <div className="row align-items-center pt_md--60 mt_sm--60">
                        <div className="col-lg-7 col-12 order-2 order-lg-1">
                            <div className="content pt_md--30 pt_sm--30">
                                <h1
                                    className="axil-display-1"
                                    data-aos="aos-fade-in-up"
                                    data-aos-duration="1000"
                                >
                                    Build stunning websites & apps.
                                </h1>
                                <p
                                    className="subtitle-3"
                                    data-aos="aos-fade-in-up"
                                    data-aos-duration="1000"
                                    data-aos-delay="200"
                                >
                                    From sleek designs to powerful functionality
                                    <br /> we craft digital experiences that drive results.
                                    <br />
                                    Whether you are a startup or an established brand, we bring
                                    your vision to life with pixel-perfect websites and scalable
                                    apps.
                                </p>
                                <div className='flex' style={{ gap: "2px", display: "flex" }}>
                                    <div>
                                        <Link legacyBehavior href="/portfolio">
                                            <a
                                                className="axil-button btn-large btn-transparent"
                                                data-aos="aos-fade-in-up"
                                                data-aos-duration="1000"
                                                data-aos-delay="400"
                                            >
                                                <span className="button-text">View Showcase</span>
                                                <span className="button-icon" />
                                            </a>
                                        </Link>
                                    </div>
                                    <div style={{ marginLeft: "20px" }}>
                                        <a
                                            href="https://calendly.com/nexedevlabs/30min"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="axil-button btn-large btn-transparent"
                                            data-aos="aos-fade-in-up"
                                            data-aos-duration="1000"
