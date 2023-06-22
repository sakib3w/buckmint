import React, { useEffect } from "react";
import Header from "../components/Header";
import Particle from "../components/Particle";
import ContactPage from "../containers/Contact";
const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 1);  
  }, []);
  return (
    <>
      <Particle />
      <Header />
      <ContactPage/>
    </>
  );
};

export default Contact;
