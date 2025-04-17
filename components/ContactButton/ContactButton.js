import React from "react";

const ContactButtons = ({ phoneNumber }) => {
  const formattedPhone = phoneNumber.replace(/\D/g, ""); // Remove non-digits for WhatsApp link

  return (
    <div style={styles.container}>
      {/* Call Button */}
      <a legacyBehavior 
        href={`tel:${phoneNumber}`}
        style={{ ...styles.button, ...styles.call }}
      >
        📞 Call Now
      </a>

      {/* WhatsApp Button */}
      <a legacyBehavior 
        href={`https://wa.me/${formattedPhone}`}
        target="_blank"
        rel="noopener noreferrer"
        style={{ ...styles.button, ...styles.whatsapp }}
      >
        💬 WhatsApp
      </a>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    gap: "15px",
        marginTop: "20px",
        // position: "fixed",
        bottom: "150px",
        zIndex: "2322323",

        width: "100vw",
        display: "flex",
        justifyContent: "space-between",
        padding: "20px",
        alignItems : "center",
       
  },
  button: {
    padding: "10px 16px",
    borderRadius: "8px",
    fontSize: "16px",
    color: "#fff",
    textDecoration: "none",
    fontWeight: "500",
  },
  call: {
    backgroundColor: "#007bff",
  },
  whatsapp: {
    backgroundColor: "#25D366",
  },
};

export default ContactButtons;
