'use client'
import emailjs from "@emailjs/browser";
import React, { useEffect, useRef, useState } from "react";
import Alert from "./Alert";
import Input from "./Input";
import axios from "axios";

const ContactFormThree = ({ smallSize =false }) => {
  const [showAlert, setShowAlert] = useState(false);
  const [isMessageSent, setIsMessageSent] = useState(false);
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    phone: "",
  });

  const sendEmail = async (e) => {
    e.preventDefault();
    await axios
      .post("/api/send-email", {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        phone: formData.phone,
      })
      .then(
        (result) => {
          console.log(result);
          setShowAlert(true);
          setIsMessageSent(true);
          setTimeout(() => setShowAlert(false), 4000);
        },
        (error) => {
          console.log(error, "ther");
          setIsMessageSent(false);
          setShowAlert(true);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <Input
        name="name"
        label="Name"
        isClear={isMessageSent}
        formData={formData}
        setFormData={setFormData}
      />
      <Input
        formData={formData}
        setFormData={setFormData}
        name="email"
        label="Email"
        type="email"
        isClear={isMessageSent}
      />
      <Input
        setFormData={setFormData}
        formData={formData}
        name="phone"
        label="Phone"
        isClear={isMessageSent}
      />
      <Input
        smallSize ={smallSize}
        formData={formData}
        setFormData={setFormData}
        name="message"
        label="Your message"
        type="textarea"
        isClear={isMessageSent}
      />
      <div className="form-group">
        <input type="submit" value="Send message" />
        <p className="form-messege"></p>
      </div>
      {showAlert && (
        <Alert
          message={
            isMessageSent
              ? "Your message was sent successfully"
              : "Something went wrong"
          }
          type={isMessageSent ? "success" : "danger"}
        />
      )}
    </form>
  );
};

export default ContactFormThree;
