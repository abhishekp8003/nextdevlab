"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const Logo = ({ variant = "one", fillTextColor = "#00004B" }) => {
  const [isDark, setIsDark] = useState(false);


  useEffect(() => {

    const updateTheme = () => {
      const theme = localStorage.getItem("theme");
      setIsDark(theme === "dark");
    };

    updateTheme();

   
  });

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        
      }}
    >
      <div>
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
            top : "-20px"
          }}
        >
          Labs
        </h1>
      </div>
    </div>
  );
};

export default Logo;
