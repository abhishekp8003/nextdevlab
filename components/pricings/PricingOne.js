"use client";
import { useState } from "react";
import PricingData from "../../data/Pricings.json";
import SectionTitle from "../common/SectionTitle";
import PricingTable from "./PricingTable";

const PricingOne = ({
  first = 0,
  second = 6,
  heading1 = "",
  heading2 = "",
  third = null,
  fourth = null,
}) => {
  const [pricings, setPricings] = useState(PricingData.slice(first, second));
  const [pricings2, setPricings2] = useState(
    third !== null && fourth !== null ? PricingData.slice(third, fourth) : []
  );

  return (
    <div className="axil-pricing-table-area pricing-shape-position ax-section-gap bg-color-lightest">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <SectionTitle
              title="From getting started"
              subtitle="Pricing Plans"
              description="Choose a plan that fits your business needs. Our flexible pricing ensures you get the best value for high-quality development, marketing, and branding solutions."
              color="extra04-color"
              alignment="center"
            />
          </div>

          {heading1 && <h2 className="text-center mt-5">{heading1}</h2>}
          <div className="row justify-content-center mt--20 row--30 mt_sm--0">
            {pricings.map((pricing, index) => (
              <div
                className="col-lg-4 col-md-6 col-sm-12 col-12"
                key={`pricing-table-1-${index}`}
              >
                <PricingTable
                  column="col-lg-12"
                  pricingTableClass="axil-pricing-table mt--40 mt_sm--60"
                  buttonClass={index === 0 ? "btn-solid" : "btn-transparent"}
                  data={pricing}
                />
              </div>
            ))}
          </div>

          {heading2 && <h2 className="text-center mt-5">{heading2}</h2>}
          {pricings2.length > 0 && (
            <div className="row justify-content-center mt--20 row--30 mt_sm--0">
              {pricings2.map((pricing, index) => (
                <div
                  className="col-lg-4 col-md-6 col-sm-12 col-12"
                  key={`pricing-table-2-${index}`}
                >
                  <PricingTable
                    column="col-lg-12"
                    pricingTableClass="axil-pricing-table mt--40 mt_sm--60"
                    buttonClass={index === 0 ? "btn-solid" : "btn-transparent"}
                    data={pricing}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Decorative shape */}
      <div className="shape-group">
        <div className="shape">
          <i className="icon icon-shape-15"></i>
        </div>
      </div>
    </div>
  );
};

export default PricingOne;
