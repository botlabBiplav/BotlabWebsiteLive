"use client";
import React, { useEffect, useState } from "react";
import Form from "../app/src/components/Form/From";
import HeaderBar from "../app/src/components/Home/HeaderBar";
import dynamic from "next/dynamic";
import axios from "axios";
import "../app/globals.css";
import Footer from "../app/src/components/Footer/Footer";
import Portfolio from "../app/src/components/Portfolio/Portfolio";
import Location from "../app/src/components/ContactUs/Location";
import Background from "../app/src/components/Background/Background";

const ContactUs = () => {
  return (
    <>
      <div className="z-10">
        <Background />
        <div className="">
          <div className="fixed top-0"><HeaderBar /></div>
          <Portfolio/>
          <Footer />
        </div>
      </div>
      {/* <Creative /> */}
    </>
  );
};

export default ContactUs;
