import Link from 'next/link';
import { useEffect, useState } from 'react';
import FooterMenu from '../../data/FooterMenu';
import Logo from '../common/Logo';

const Footer = ({footerSetting = {}}) => {
    const [footerSettings, setFooterSettings] = useState({});

    useEffect(() => {
        if (footerSetting === "") {
            const setting = {
                showCopyrightOnly: false,
            };
            setFooterSettings(setting);
        } else {
            setFooterSettings(footerSetting);
        }
    }, [footerSetting]);

    return (
      <footer
        className={`axil-footer footer-default ${
          footerSettings.showCopyrightOnly ? "bg-color-lightest" : ""
        } ${
          footerSettings.style === "three"
            ? "footer-style-3 bg-color-extra09"
            : "theme-gradient-2"
        }`}
      >
        <div
          className={
            !footerSettings.showCopyrightOnly &&
            footerSettings.style !== "three"
              ? "bg_image--2"
              : ""
          }
        >
          {!footerSettings.showCopyrightOnly && (
            <>
              {footerSettings.style !== "three" ? (
                <div className="ft-social-icon-wrapper ax-section-gapTop">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-12">
                        <ul className="ft-social-share d-flex justify-content-center liststyle flex-wrap">
                          {FooterMenu.social?.map((socialItem, index) => (
                            <li key={`social-${index}`}>
                              <a
                                legacyBehavior
                                href={socialItem.url}
                                target="_blank"
                                rel="noreferrer"
                              >
                                <i className={`fab ${socialItem.icon}`} />
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="axil-call-to-action callaction-style-2 pt--110 pt_sm--60 pt_md--80">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="inner">
                          <div className="text">
                            <h2 className="title">
                              Interested in collaborations?
                            </h2>
                          </div>
                          <div className="button-wrapper">
                            <Link legacyBehavior href="/contact">
                              <a
                                legacyBehavior
                                className="axil-button btn-large btn-solid bgextra07-color"
                              >
                                <span className="button-text">
                                  Let&rsquo;s Talk
                                </span>
                                <span className="button-icon" />
                              </a>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div className="footer-top ax-section-gap">
                <div className="container">
                  <div className="row">
                    <div
                      className={`${
                        footerSettings.style === "three"
                          ? "col-xl-5 col-lg-3 col-md-6 col-sm-6 col-12"
                          : "col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12"
                      }`}
                    >
                      <div
                        className={`${
                          footerSettings.style === "three"
                            ? "footer-widget-item"
                            : "footer-widget-item axil-border-right"
                        }`}
                      >
                        {footerSettings.style !== "three" ? (
                          <>
                            <h2>Get in Touch with NextDev Labs!</h2>
                            <p>
                              Have a project in mind? Let’s build something
                              amazing together! 🚀
                              <br /> Reach us at:
                            </p>

                            <div className="axil-newsletter">
                              <form className="newsletter-form" action="#">
                                <input type="email" placeholder="Email" />
                                <a
                                  legacyBehavior
                                  className="axil-button btn-transparent"
                                  href="mailto:info@nextdev.co.in"
                                >
                                  <span className="button-text">Subscribe</span>
                                  <span className="button-icon" />
                                </a>
                              </form>
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="logo">
                              <Link legacyBehavior href="/home-01">
                                <a legacyBehavior>
                                  <Logo variant="two" fillTextColor="#fff" />
                                </a>
                              </Link>
                            </div>
                            <div className="axil-ft-address">
                              <div className="address">
                                <p>
                                  <span>A.</span> 763, Juni Bhajiali, Raviwar
                                  Peth, Pune, Maharashtra 411002
                                </p>

                                <p>
                                  <span>T.</span>
                                  <a legacyBehavior href="tel:+9190283 48003">
                                    +91-90283 48003
                                  </a>
                                </p>
                                <p>
                                  <span>E.</span>
                                  <a
                                    legacyBehavior
                                    href="mailto:info@nextdev.co.in"
                                  >
                                    info@nextdev.co.in
                                  </a>
                                </p>
                              </div>
                            </div>
                          </>
                        )}
                      </div>
                    </div>

                    <div
                      className={`${
                        footerSettings.style === "three"
                          ? "col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 mt_mobile--30"
                          : "col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12 mt_mobile--30"
                      }`}
                    >
                      <div className="footer-widget-item">
                        <h6 className="title">Services</h6>
                        <div className="footer-menu-container">
                          <ul
                            className={`ft-menu liststyle link-hover ${
                              footerSettings.style === "three"
                                ? "color-var--2"
                                : ""
                            }`}
                          >
                            {FooterMenu.services?.map((menuItem, index) => (
                              <li key={`footer-service-${index}`}>
                                <Link legacyBehavior href={menuItem.url}>
                                  {menuItem.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div
                      className={`${
                        footerSettings.style === "three"
                          ? "col-xl-2 col-lg-3 col-md-6 col-sm-6 col-12 mt_md--30 mt_sm--30"
                          : "col-xl-2 col-lg-6 col-md-6 col-sm-6 col-12 mt_lg--30 mt_md--30 mt_sm--30"
                      }`}
                    >
                      <div className="footer-widget-item">
                        <h6 className="title">Resourses</h6>
                        <div className="footer-menu-container">
                          <ul
                            className={`ft-menu liststyle link-hover ${
                              footerSettings.style === "three"
                                ? "color-var--2"
                                : ""
                            }`}
                          >
                            {FooterMenu.resources?.map((menuItem, index) => (
                              <li key={`footer-resource-${index}`}>
                                <Link legacyBehavior href={menuItem.url}>
                                  {menuItem.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div
                      className={`${
                        footerSettings.style === "three"
                          ? "col-xl-2 col-lg-3 col-md-6 col-sm-6 col-12 mt_md--30 mt_sm--30"
                          : "col-xl-1 col-lg-6 col-md-6 col-sm-6 col-12 mt_lg--30 mt_md--30 mt_sm--30"
                      }`}
                    >
                      <div
                        className={`footer-widget-item ${
                          footerSettings.style !== "three"
                            ? "widget-support"
                            : ""
                        }`}
                      >
                        <h6 className="title">Support</h6>
                        <div className="footer-menu-container">
                          <ul
                            className={`ft-menu liststyle link-hover ${
                              footerSettings.style === "three"
                                ? "color-var--2"
                                : ""
                            }`}
                          >
                            {FooterMenu.support?.map((menuItem, index) => (
                              <li key={`footer-support-${index}`}>
                                <Link legacyBehavior href={menuItem.url}>
                                  {menuItem.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}

          <div className="copyright copyright-default">
            <div className="container">
              <div className="row row--0 ptb--20 axil-basic-thine-line">
                <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                  <div className="inner text-center text-md-start">
                    <p>© 2024–2025 NextDev Labs. All rights reserved.</p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                  <div className="quick-contact">
                    <ul
                      className={`link-hover d-flex justify-content-center justify-content-md-end liststyle ${
                        footerSettings.style === "three" ? "color-var--2" : ""
                      }`}
                    >
                      <li>
                        <Link
                          legacyBehavior
                          data-hover="Privacy Policy"
                          href="/privacy-policy"
                        >
                          Privacy Policy
                        </Link>
                      </li>
                      <li>
                        <Link legacyBehavior href="/termsofuse">
                          Terms of Use
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
};

export default Footer;
