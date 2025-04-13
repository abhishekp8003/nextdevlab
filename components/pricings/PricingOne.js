'use client'
import { useState } from "react";
import PricingData from "../../data/Pricings.json";
import SectionTitle from "../common/SectionTitle";
import PricingTable from "./PricingTable";
import Script from "next/script";
const PricingOne = () => {
  const [pricings, setPricings] = useState(PricingData.slice(0, 6));

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
        </div>
        <div className="row justify-content-center mt--20 row--30 mt_sm--0">
          {pricings?.map((pricing, index) => (
            <div
              className="col-lg-4 col-md-6 col-sm-12 col-12"
              key={`pricing-table-${index}`}
            >
              <PricingTable
                column="col-lg-12" // Use full width for the PricingTable inside the column
                pricingTableClass={
                  // index === 0
                  // ? "axil-pricing-table mt--40 active"
                  // :
                  "axil-pricing-table mt--40 mt_sm--60"
                }
                buttonClass={index === 0 ? "btn-solid" : "btn-transparent"}
                data={pricing}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="shape-group">
        <div className="shape">
          <i className="icon icon-shape-15"></i>
        </div>
      </div>
      <Script
        src="https://cdn.trustindex.io/loader.js?71119ce443c813742b46b3c9c55"
        strategy="lazyOnload" // Loads script when page is idle
        defer
        async
      />
    </div>
  );
};

export default PricingOne;
