import Image from "next/image";
import Link from "next/link";
import SectionTitle from "../common/SectionTitle";

const TeamOne = () => {
    return (
      <div className="axil-team-area shape-position ax-section-gap bg-color-white">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-xl-6">
              <div className="thumbnail">
                <div className="image">
                  <img
                    // width={630}
                    // height={514}
                    src="https://firebasestorage.googleapis.com/v0/b/imageuploader-7809e.appspot.com/o/Screenshot%202025-05-09%20122451.png?alt=media&token=4382123e-d1fa-40e8-85c2-07c65fbb3713"
                    alt="Team Images"
                    style={{
                      aspectRatio: "640 / 514",
                      maxWidth: "630px",
                    }}
                  />
                </div>
                <div className="total-team-button">
                  <Link legacyBehavior href="/team">
                    <a legacyBehavior>
                      <span>20+</span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-xl-5 offset-xl-1 mt_md--40 mt_sm--40">
              <div className="content">
                <div className="inner">
                  <SectionTitle
                    title="Alone, we can do so little; together, we can do so much."
                    subtitle="Our Team"
                    description="Meet the passionate experts behind NextDev Labs. Our team is dedicated to delivering innovative web solutions, branding, and digital marketing to help your business succeed."
                    color="extra08-color"
                    alignment="left"
                  />
                  <div className="axil-button-group mt--40">
                    <Link legacyBehavior href="/team">
                      <a
                        legacyBehavior
                        className="axil-button btn-large btn-transparent"
                      >
                        <span className="button-text">Our Team</span>
                        <span className="button-icon"></span>
                      </a>
                    </Link>
                    <a
                      legacyBehavior
                      className="axil-button axil-link-button"
                      href="/career"
                    >
                      Careers
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="shape-group">
          <div className="shape shape-1 customOne">
            <i className="icon icon-shape-06"></i>
          </div>
          <div className="shape shape-2">
            <i className="icon icon-shape-13"></i>
          </div>
          <div className="shape shape-3">
            <i className="icon icon-shape-14"></i>
          </div>
        </div>
      </div>
    );
};

export default TeamOne;
