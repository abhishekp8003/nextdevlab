import Link from 'next/link';
import Router from 'next/router';
import { useEffect } from 'react';

const SideNav = ({toggleSidenav}) => {
    const closeSideNav = () => {
        const html = document.querySelector("html"),
            sideNav = document.querySelector(".side-nav");

        sideNav.classList.remove("opened");
        html.classList.remove("side-nav-opened");
    };

    useEffect(() => {
        // Close sidenav while navigate to another page
        Router.events.on("routeChangeStart", closeSideNav);
        return () => {
            Router.events.off("routeChangeStart", closeSideNav);
        };
    }, []);

    return (
      <div className="side-nav">
        <div className="side-nav-inner">
          <form action="#" className="side-nav-search-form">
            <div className="form-group search-field">
              <input
                type="text"
                className="search-field"
                name="search-field"
                placeholder="Search..."
              />
              <button className="side-nav-search-btn">
                <i className="fas fa-search" />
              </button>
            </div>
          </form>

          <div className="side-nav-content">
            <div className="row ">
              <div className="col-lg-5 col-xl-6 col-12">
                <ul className="main-navigation">
                  <li>
                    <Link legacyBehavior            href="/home-01">Home</Link>
                  </li>
                </ul>
              </div>

              <div className="col-lg-7 col-xl-6 col-12">
                <div className="axil-contact-info-inner">
                  <div className="axil-contact-info">
                    <address ddress className="address">
                      <span className="title">Contact Information</span>
                      <p>
                        NextDev Labs, 763, Juni Bhajiali, Raviwar Peth, Pune,
                        Maharashtra 411002
                      </p>
                    </address>
                    <address  ddress className="address">
                      <span className="title">
                        We‘re Available 24/7. Call Now.
                      </span>
                      <p>
                        <a
                          legacyBehavior
                          className="tel"
                          href="tel:+919767826126"
                        >
                          <i className="fas fa-phone" />
                          +91 9767826126
                        </a>
                      </p>
                      <p>
                        <a
                          legacyBehavior
                          className="email"
                          href="mailto:info@nextdev.co.in"
                        >
                          <i className="fas fa-envelope" />
                          info@nextdev.co.in
                        </a>
                      </p>
                    </address>
                  </div>

                  <div className="axil-contact-info">
                    <h5 className="title">Find us here</h5>
                    <div className="contact-social-share d-flex align-items-center">
                      <ul className="social-share style-rounded">
                        <li>
                          <a
                            legacyBehavior
                            href="https://www.facebook.com/"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i className="fab fa-facebook-f" />
                          </a>
                        </li>
                        <li>
                          <a
                            legacyBehavior
                            href="https://www.linkedin.com/"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i className="fab fa-linkedin-in" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="close-sidenav" onClick={toggleSidenav}>
            <button className="close-button">
              <i className="fal fa-times" />
            </button>
          </div>
        </div>
      </div>
    );
};

export default SideNav;
