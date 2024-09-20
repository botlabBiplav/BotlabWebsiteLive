"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import AboutImg1 from "../../../../public/AboutImg.png";
import "./AboutUs.css";
import AboutUsData from "../../../Data/AboutUsData";

const AboutsUs = () => {
  console.log(AboutUsData, "dataforAvt");
  return (
    <>
      <div className="relative aboutUsBgImage">
        <div className="absolute inset-0 flex justify-center">
          <p className="text-[#F5F5F5] text-center mt-24">
            multiple drone renders in a row (different BDPL designs and
            innovations)
          </p>
        </div>
        <div className="absolute inset-0 flex justify-center items-center">
          <h1 className="text-[#F5F5F5] text-6xl text-center">
            BOTLAB DYNAMICS
          </h1>
        </div>
        <div className="absolute inset-0 flex justify-center items-center">
          <h1 className="text-[#F5F5F5] text-xl mt-20 text-center">
            Company R&D Tagline
          </h1>
        </div>
      </div>

      {AboutUsData.map((item, index) => (
        <div key={index}>
          <div className="mt-24">
            <div className="flex justify-center ">
              <Image
                src={AboutImg1}
                width={750}
                className="xl:w-[755px] lg:w-[700px] md:w-[600px]"
              />
            </div>
            <div className="W-6/12">
              {item.product.map((list, listIndx) => (
                <div key={listIndx}>
                  <h1 className="text-[#000000] text-center text-5xl font-lexend mt-10">
                    {list.title1}
                  </h1>
                  <div className="flex justify-center">
                    <p className="text-[#000000] xl:w-6/12 lg:w-8/12 md:w-9/12 text-justify font-lato text-sm mt-3">
                      {list.description1}
                    </p>
                  </div>

                  <div className="flex items-center justify-center mt-10 xl:w-6/12 lg:w-7/12 md:w-8/12 mx-auto">
                    <div className="text-center">
                      <h1 className="font-lexend text-2xl">{list.title2}</h1>
                      <p className="text-sm text-justify mt-2">
                        {list.description2}
                      </p>
                    </div>
                    <div className="xl:w-[1450px] lg:w-[1100px] md:w-[1000px]">
                      <Image
                        src={list.imgAbout}
                        width={400}
                        className="xl:ml-3 lg:ml-4 md:ml-2"
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-center mt-10 xl:w-6/12 lg:w-7/12 md:w-8/12 mx-auto">
                    <div className="xl:w-[1450px] lg:w-[1100px] md:w-[1000px]">
                      <Image src={list.imgAbout1} width={400} className="" />
                    </div>
                    <div className="text-center">
                      <h1 className="font-lexend text-2xl">{list.title3}</h1>
                      <p className="text-sm mt-2">{list.description3}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="">
              <h1 className="text-center text-3xl font-lexend mt-20">
                {item.story.title}
              </h1>
              <p className="xl:w-6/12 lg:w-7/12 md:w-8/12 mt-5 text-justify text-sm whitespace-pre-line mx-auto">
                {item.story.txt}
              </p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default AboutsUs;
