import React from "react";
import axios from "axios";
import "../app/globals.css";
import Footer from "../app/src/components/Footer/Footer";
import HeaderBar from "../app/src/components/Home/HeaderBar";
import Background from "../app/src/components/Background/Background";
import PrivacyPolicyBody from "../app/src/components/Privacy Policy/policybody";


const PrivacyPolicy = () => {
  return (

    <div className="z-10">
      <Background />

      <div className="fixed z-10"><HeaderBar /></div>
      <div className="py-32 sm:px-80 bg-gradient-to-t from-black via-transparent via-12%">
        <PrivacyPolicyBody />
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;