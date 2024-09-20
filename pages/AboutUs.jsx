"use client";
import React, { useEffect, useState } from "react";
import HeaderBar from "../app/src/components/Home/HeaderBar";
// import dynamic from "next/dynamic";
// import axios from "axios";
import "../app/globals.css";
// import Footer from "../app/src/components/Footer/Footer";
import Background from "../app/src/components/Background/Background";
import AboutUsPage from "../app/src/components/AboutUsPage/AboutsUs"

const AboutUs = () => {
    return (
        <>
            <div className="bg-white">
                {/* <Background /> */}
                <div className="">
                    <div className="fixed w-full lg:space-x-14 xl:text-base lg:text-xl top-0 z-[150]"><HeaderBar /></div>
                    <div className="w-full">
                        <AboutUsPage />
                    </div>
                   {/* <Footer/> */}
                </div>
            </div>

        </>
    );
};

export default AboutUs;
