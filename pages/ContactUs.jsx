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

const ContactUs = () => {
  // const [landingPageLoaded, setLandingPageLoaded] = useState(false);
  // const API_URL = process.env.NEXT_PUBLIC_API_URL;

  // useEffect(() => {
  //   // Simulate loading time for demonstration purposes
  //   const timer = setTimeout(() => {
  //     setLandingPageLoaded(true);
  //   }, 500); // Adjust the delay time as needed

  //   // Clean up timer to prevent memory leaks
  //   return () => clearTimeout(timer);
  // }, []);

  // const [articles, setArticles] = useState([]);

  // useEffect(() => {
  //   const fetchdata = async () => {
  //     try {
  //       const res = await axios.get(`${API_URL}/api/products`);
  //       setArticles(res.data.data);
  //     } catch (error) {
  //       console.error("there is some error with the api", error);
  //     }
  //   };
  //   fetchdata();
  // }, []);

  // useEffect(() => {
  //   console.log(articles, "this is article");
  // }, [articles]);

  return (
    <>
      <div className="">
        <Background />
        <div className="bg-gradient-to-t from-black via-black"
        >
          <div className="fixed w-full top-0 z-[150]"><HeaderBar /></div>
          <Location />
          <div className="pt-10"><Form /></div>
          <Footer />
        </div>
      </div>

    </>
  );
};

export default ContactUs;
