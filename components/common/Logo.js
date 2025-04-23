"use client"; // Ensure this is a client-side component if using localStorage

import { useEffect, useState } from "react";
import Image from "next/image";

const Logo = ({ variant = "one", fillTextColor = "#00004B" }) => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsDark(localStorage.getItem("theme") === "dark");
    }
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: isDark ? "white" : "black",
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
            color: fillTextColor,
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
