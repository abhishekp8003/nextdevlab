import Link from "next/link";
import { useEffect, useState } from 'react';
import BrandData from '../../data/Brands.json';
import SectionTitle from '../common/SectionTitle';

const BrandOne = ({
  title = "We've Built Cutting-Edge Solutions Using...",
  subtitle = "top clients",
  description = "We have successfully delivered innovative and scalable technology solutions to leading clients across multiple industries.",
  bgColor = "bg-color-white"
}) => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    const brandArray = BrandData.slice(0, 6);
    setBrands(brandArray);
  }, []);


   const [mobileScreen, setMobileScreen] = useState(false);
   const handleChngeScreenWidth = () => {
     const innerWidth = window.innerWidth;
     if (innerWidth > 718) {
       setMobileScreen(false);
     } else {
       setMobileScreen(true);
     }
   };

   useEffect(() => {
     handleChngeScreenWidth();

     window.addEventListener("resize", handleChngeScreenWidth);
     return () => {
       window.removeEventListener("resize", handleChngeScreenWidth);
     };
   }, []);









  return (
    <div className={`axil-brand-area ax-section-gap ${bgColor}`}>
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-xl-4 col-lg-4 col-md-8 col-12">
            <SectionTitle
              title={title}
              subtitle={subtitle}
              description={description}
              color="extra06-color"
              alignment="left"
            />
          </div>
          <div className="col-xl-8 col-lg-8 mt_md--40 mt_sm--40">
            <div className="axil-brand-logo-wrapper">
              <ul className="brand-list liststyle d-flex flex-wrap justify-content-center">
                {brands?.map((brand, index) => (
                  <li key={`brand-${index}`}>
                    <Link legacyBehavior href="#">
                      <a legacyBehavior>
                        <img
                          style={{
                            width: mobileScreen ? "80px" : "112px",
                            height: mobileScreen ? "80px" : "112px",
                          }}
                          src={brand.image.src}
                          alt="Brand Logo Images"
                        />
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandOne;
