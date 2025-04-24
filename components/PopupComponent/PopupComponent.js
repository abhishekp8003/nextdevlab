'use client';
import { useState, useEffect } from 'react';
import styles from './PopupComponent.module.css';
import ContactFormThree from '../forms/ContactFormThree';
import Logo from '../common/Logo';

const PopupComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState(null);
  const hndleTime = () => {
    setIsOpen(true)
    
  }
  

  useEffect(() => {
    
    const savedTheme = localStorage.getItem('theme');
    setTheme(savedTheme);

    setTimeout(() => {
      hndleTime();
    },5000)





  }, []);


  return (
    <div
      style={{
        zIndex: 2322222222, // simplified number for readability
      }}
      className="popupcomponent"
    >
      {isOpen && (
        <div className={styles.overlay}>
          <div
            className={`form-group ${styles.modal}`}
            style={{
              backgroundColor: theme === "dark" ? "black" : "white",
            }}
          >
            <Logo />
            <h2
              style={{
                margin: "15px auto",
                width: "100%",
                textAlign: "center",
              }}
            >
              Contact Us
            </h2>
            {/* <ContactFormThree /> */}
            <ContactFormThree
            
            smallSize ={true}
            />
            <button
              onClick={() => setIsOpen(false)}
              className={styles.closeBtn}
            >
              ✖
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PopupComponent;
