"use client";
import React, { useEffect, useState } from "react";
import Form from "../app/src/components/Form/From";
import HeaderBar from "../app/src/components/Home/HeaderBar";
import dynamic from "next/dynamic";
import axios from "axios";
import "../app/globals.css";
import Footer from "../app/src/components/Footer/Footer";
import Location from "../app/src/components/ContactUs/Location";
import Background from "../app/src/components/Background/Background";
import PortfolioComponent from "../app/src/components/PortfolioComponent/PortfolioComponent";

const Portfolio = () => {
  return (
    <>
      <div className="">
        <Background />
        <div className="">
          <div className="fixed w-full lg:space-x-14 xl:text-base lg:text-xl top-0 z-[150]"><HeaderBar /></div>
          <div className="w-full">
            <PortfolioComponent />
          </div>
          {/* <Footer /> */}
        </div>
      </div>

    </>
  );
};

export default Portfolio;
