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
      <div style={{ marginLeft: 10 }}>
        <div
          style={{
            fontFamily: "DM Sans, sans-serif",
            fontSize: "20px",
            fontWeight: "bold",
          }}
        >
          NextDev
        </div>
        <div
          style={{
            fontFamily: "DM Sans, sans-serif",
            fontSize: "18px",
            fontWeight: "normal",
            marginTop: "4px",
          }}
        >
          Labs
        </div>
      </div>
    </div>
  );
};

export default Logo;
