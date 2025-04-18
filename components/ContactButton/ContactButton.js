import Image from "next/image";
import React from "react";

const ContactButtons = ({ phoneNumber }) => {
  const formattedPhone = phoneNumber.replace(/\D/g, ""); // Remove non-digits for WhatsApp link

  return (
    <div style={styles.container}>
      {/* Call Button */}
      <a
        legacyBehavior
        href={`tel:${phoneNumber}`}
        style={{  ...styles.call }}
      >
        <Image src="/images/share/phone.png" width={50} height={50} />
      </a>

      {/* WhatsApp Button */}
      <a
        legacyBehavior
        href={`https://wa.me/${formattedPhone}`}
        target="_blank"
        rel="noopener noreferrer"
        style={{...styles.whatsapp }}
      >
        <Image src="/images/share/WhatsApp.png" width={60} height={60} />
      </a>
    </div>
  );
};

const styles = {
  container: {},
  button: {
    padding: "10px 16px",
    borderRadius: "8px",
    fontSize: "16px",
    color: "#fff",
    textDecoration: "none",
    fontWeight: "500",
  },
  call: {
    // backgroundColor: "#007bff",
    position: "fixed",
    left: "70px",
    width: "40px",
    bottom: "180px",
    zIndex: "2322323",
    // width: "30px",
  },
  whatsapp: {
    // backgroundColor: "#25D366",
    width: "40px",
    position: "fixed",
    right: "130px",
    bottom: "180px",
    // width: "30px",
    zIndex: "2322323",
  },
};

export default ContactButtons;
