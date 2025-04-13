import ContactFormOne from "../forms/ContactFormOne";

const AboutOne = () => {
  return (
    <div className="axil-about-us-area ax-section-gap bg-color-white axil-shape-position">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-xl-6 col-md-12 col-12">
            <div className="axil-about-inner">
              <div className="section-title text-start">
                <span
                  className="sub-title extra08-color"
                  data-aos="aos-fade-in-up"
                  data-aos-duration="1000"
                >
                  about us
                </span>
                <h2
                  className="title"
                  data-aos="aos-fade-in-up"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                >
                  We do design, code <br /> & develop.
                </h2>
                                    <p
                      className="subtitle-2 mb--50 mb_lg--20 mb_md--20 mb_sm--15"
                      data-aos="aos-fade-in-up"
                      data-aos-duration="1000"
                      data-aos-delay="400"
                    >
                      At NextDev Labs, we are passionate about crafting cutting-edge web solutions that drive innovation and business growth. 
                      Specializing in website development, app development, and marketing solutions, we transform ideas into high-performance digital experiences.
                    </p>
                    <p
                      className="subtitle-2"
                      data-aos="aos-fade-in-up"
                      data-aos-duration="1000"
                      data-aos-delay="500"
                    >
                      Our team of experts blends creativity with technology to deliver scalable, user-friendly, and SEO-optimized solutions. 
                      Whether you're a startup or an established enterprise, we empower your brand with digital excellence.
                    </p>

              </div>
            </div>
          </div>
          <div className="col-lg-6 col-xl-5 offset-xl-1 col-md-12 col-12 mt_md--30 mt_sm--30">
            <div className="contact-form-wrapper">
              <div className="axil-contact-form contact-form-style-1">
                <h3 className="title">Get a free NextDev Labs quote now</h3>
                <ContactFormOne/>
                <div className="callto-action-wrapper text-center">
                  <span className="text">Or call us now</span>
                  <span>
                    <i className="fal fa-phone-alt"></i>{" "}
                    <a href="tel:+919767826126">+91 97678 26126</a>

                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="axil-shape-group">
        <div className="shape shape-1">
          <i className="icon icon-shape-12"></i>
        </div>
        <div className="shape shape-2">
          <i className="icon icon-shape-03"></i>
        </div>
      </div>
    </div>
  );
};

export default AboutOne;
