'use client';
import { useState } from 'react';
import styles from './PopupComponent.module.css';
import ContactFormOne from '../forms/ContactFormOne';
import ContactFormThree from '../forms/ContactFormThree';

const PopupComponent = () => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div 
        style ={{
            zIndex :"232222222222222222222222222222"
        }}
        >
        

            {isOpen && (
                <div className={styles.overlay}>

                    <div className={`form-group ${styles.modal}`}>
                        <h2
                        style ={{
                            margin : ' 30px auto ',
                            
                            width : '100%',
                            textAlign : 'center'
                        }}
                        >
                            Contact Us
                        </h2>
                       <ContactFormThree/>
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
