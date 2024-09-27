"use client";
import React, { useEffect, useState } from "react";
import HeaderBar from "../app/src/components/Home/HeaderBar";
import "../app/globals.css";
import PortfolioGalleryComponent from "../app/src/components/PortfolioGalleryComponent/page";

const PortfolioGallery = () => {
  return (
    <>
      <div className="bg-black">
        {/* <Background /> */}
        <div className="">
          <div className="fixed w-full lg:space-x-14 xl:text-base lg:text-xl top-0 z-[150]">
            <HeaderBar />
          </div>
          <div className="w-full">
            <PortfolioGalleryComponent />
          </div>
          {/* <Footer /> */}
        </div>
      </div>
    </>
  );
};

export default PortfolioGallery;
