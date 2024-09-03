"use client";
import React, { useEffect, useState } from "react";
// import HeaderBar from "../app/src/components/Home/HeaderBar";
import dynamic from "next/dynamic";
import axios from "axios";
import "../app/globals.css";
import Footer from "../app/src/components/Footer/Footer";
import Background from "../app/src/components/Background/Background";
import PortfolioComponent from "../app/src/components/Portfolio/PortfolioComponent";

const Portfolio = () => {
  return (
    <>
        <div className="z-10">
          <Background />
          <div className="bg-gradient-to-t from-black via-black">
            {/* <div className="fixed top-0"><HeaderBar /></div> */}
            <PortfolioComponent />
            <Footer />
          </div>
        </div>
      {/* <Creative /> */}
    </>
  );
};

export default Portfolio;
