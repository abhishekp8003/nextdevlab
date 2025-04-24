import Image from "next/image";
import React, { useEffect, useState } from "react";

const ContactButtons = ({ phoneNumber }) => {
  const formattedPhone = phoneNumber.replace(/\D/g, "");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Example breakpoint for mobile
    };

    handleResize(); // Check on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div style={styles.container}>
      {/* Call Button */}
      <a
        legacyBehavior
        href={`tel:${phoneNumber}`}
        style={isMobile ? styles.callMobile : styles.call}
      >
        <Image src="/images/share/phone.png" width={45} height={45} />
      </a>

      {/* WhatsApp Button */}
      <a
        legacyBehavior
        href={`https://wa.me/${formattedPhone}`}
        target="_blank"
        rel="noopener noreferrer"
        style={isMobile ? styles.whatsappMobile : styles.whatsapp}
      >
        <Image src="/images/share/WhatsApp.png" width={50} height={50}
        
          style={{
          borderRadius: "50%",
        }}
        />
      </a>
    </div>
  );
};

const styles = {
  container: {},
  call: {
    position: "fixed",
    left: "70px",
    bottom: "60px",
    width: "30px",
    zIndex: 2322323,
  },
  whatsapp: {
    position: "fixed",
    right: "120px",
    bottom: "60px",
    width: "30px",
    zIndex: 2322323,
  },

  // Mobile positions
  callMobile: {
    position: "fixed",
    left: "20px",
    bottom: "70px",
    width: "30px",
    zIndex: 2322323,
  },
  whatsappMobile: {
    position: "fixed",
    right: "40px",
    bottom: "70px",
    width: "30px",
    zIndex: 2322323,
  },
};

export default ContactButtons;
