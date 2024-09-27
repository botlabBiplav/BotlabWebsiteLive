"use client";
import React, { useEffect, useState } from "react";
import HeaderBar from "../app/src/components/Home/HeaderBar";
import Background from "../app/src/components/Background/Background";
import GalleryDetails from "../app/src/components/PortfolioComponent/PortfolioComponent";
import "../app/globals.css";

const PortfolioGallery = () => {
  return (
    <>
      <div className="">
        <Background />
        <div className="">
          <div className="fixed w-full lg:space-x-14 xl:text-base lg:text-xl top-0 z-[150]">
            <HeaderBar />
          </div>
          <div className="w-full">
            <GalleryDetails />
          </div>
          {/* <Footer /> */}
        </div>
      </div>
    </>
  );
};

export default PortfolioGallery;
