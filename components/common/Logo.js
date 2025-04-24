"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const Logo = ({ variant = "one", fillTextColor = "#00004B" }) => {
  const [mobileScreen, setMobileScreen] = useState(false);
  const handleChngeScreenWidth = () => {
    const innerWidth = window.innerWidth;
    if (innerWidth > 718) {
      setMobileScreen(false)
    } else {
      setMobileScreen(true);
    }
    
  }


  useEffect(() => {
    handleChngeScreenWidth(); 

    window.addEventListener("resize", handleChngeScreenWidth);
    return () => {
      window.removeEventListener("resize", handleChngeScreenWidth);
    };
  }, []);


 
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: '60px',
        position: 'relative'
        
      }}
    >
      <div  >
        <Image
          src="/images/others/Nextdev Lab icon mark.svg"
          width={100}
          height={50}
          alt="NextDev Logo"
        />
      </div>
      <div style={{ marginLeft: '2px' }}>
        <h1
          style={{
            fontFamily: "DM Sans, sans-serif",
            fontSize: "26px",
            fontWeight: "bold",
           
            position : 'relative',
            top : "34px"
          }}
        >
          NextDev
        </h1>
        <h1
          style={{
            fontFamily: "DM Sans, sans-serif",
            fontSize: "22px",
            fontWeight: "normal",
            marginTop: "0px",
            position : 'relative',
            top : mobileScreen? "-8px" : "-20px"
          }}
        >
          Labs
        </h1>
      </div>
    </div>
  );
};

export default Logo;
