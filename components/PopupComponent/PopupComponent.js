'use client';
import { useState, useEffect } from 'react';
import styles from './PopupComponent.module.css';
import ContactFormThree from '../forms/ContactFormThree';

const PopupComponent = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    console.log('the theme', savedTheme);
    setTheme(savedTheme);
  }, []);

  return (
    <div
      style={{
        zIndex: 2322222222, // simplified number for readability
      }}
      className="popupcomponent"
    >
      {isOpen && (
        <div
          className={styles.overlay}
         
        >
          <div className={`form-group ${styles.modal}`}
          
          style ={{
            backgroundColor : theme === 'dark' ? "black" : "white"
          }}
          
          >
            <h2
              style={{
                margin: '15px auto',
                width: '100%',
                textAlign: 'center',
              }}
            >
              Contact Us
            </h2>
            <ContactFormThree />
            <button onClick={() => setIsOpen(false)} className={styles.closeBtn}>
              ✖
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PopupComponent;
