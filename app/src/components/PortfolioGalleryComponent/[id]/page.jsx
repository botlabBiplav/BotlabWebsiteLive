"use client";
import Image from "next/image";
import PortfolioData from "../../../Data/PortfolioData";
import LightGallery from "lightgallery/react";
import { useRef, useState, useCallback, useEffect } from "react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/scss/lightgallery.scss";
import "lightgallery/scss/lg-zoom.scss";
import lgZoom from "lightgallery/plugins/zoom";
import lgVideo from "lightgallery/plugins/video";

import "./PortfolioComponent.css";

const PortfolioGalleryDetails = ({ params }) => {
  console.log("whatparams", params);
  return (
    <div className="mt-44 3xl:mt-64 w-fit">
      {PortfolioData.map((item, index) => (
        <div key={index} className="mb-10">
          <div className="xl:ml-72 md:ml-48 xl:w-auto lg:w-full md:w-full">
            {item.Title && (
              <h1 className="text-[#F5F5F5] 3xl:text-8xl xl:text-4xl lg:text-3xl md:text-3xl font-lexend">
                {item.Title}
              </h1>
            )}
            {item.Title0 && (
              <h1 className="text-[#8409FF] 3xl:text-8xl xl:text-7xl lg:text-7xl md:text-7xl font-golden-hopes">
                {item.Title0}
              </h1>
            )}
            {item.subtitle && (
              <h1 className="text-[#AAAAAA] 3xl:text-2xl xl:text-base lg:text-base md:text-xl mt-3 font-lexend">
                {item.subtitle}
              </h1>
            )}
            {item.eventPlace && (
              <h1 className="text-[#E2E2E2] 3xl:text-2xl xl:text-base lg:text-base md:text-xl mt-2">
                {item.eventPlace}
              </h1>
            )}
            {item.eventDate && (
              <h1 className="text-[#AAAAAA] 3xl:text-xl xl:text-base lg:text-base md:text-xl">
                {item.eventDate}
              </h1>
            )}
          </div>

          <div className=" xl:ml-72 md:ml-48 xl:w-auto lg:w-full md:w-full 3xl:mt-16">
            {item.Title1 && (
              <h1 className="text-[#8409FF] 3xl:text-6xl xl:text-7xl lg:text-7xl md:text-7xl font-golden-hopes">
                {item.Title1}
              </h1>
            )}
            {item.Clientname && (
              <div className="flex mt-2">
                <div className="text-[#F5F5F5] 3xl:text-2xl xl:text-base lg:text-base md:text-xl w-32 text-right font-lato">
                  {item.Clientname}
                </div>
                <div className="text-[#AAAAAA] 3xl:text-2xl xl:text-base lg:text-base md:text-xl ml-2 font-lato">
                  {item.Client}
                </div>
              </div>
            )}
            {item.Industryname && (
              <div className="flex -mt-1">
                <div className="text-[#F5F5F5] 3xl:text-2xl xl:text-base lg:text-base md:text-xl w-32 text-right font-lato">
                  {item.Industryname}
                </div>
                <div className="text-[#AAAAAA] 3xl:text-2xl xl:text-base lg:text-base md:text-xl ml-2 ">
                  {item.Industry}
                </div>
              </div>
            )}
            {item.Eventname && (
              <div className="flex -mt-1">
                <div className="text-[#F5F5F5] 3xl:text-2xl xl:text-base lg:text-base md:text-xl w-32 text-right font-lato">
                  {item.Eventname}
                </div>
                <div className="text-[#AAAAAA] 3xl:text-2xl xl:text-base lg:text-base md:text-xl ml-2 ">
                  {item.Event}
                </div>
              </div>
            )}
            {item.Locationname && (
              <div className="flex -mt-1">
                <div className="text-[#F5F5F5] 3xl:text-2xl xl:text-base lg:text-base md:text-xl w-32 text-right font-lato">
                  {item.Locationname}
                </div>
                <div className="text-[#AAAAAA] 3xl:text-2xl xl:text-base lg:text-base md:text-xl ml-2 ">
                  {item.Location}
                </div>
              </div>
            )}
            {item.dronesname && (
              <div className="flex -mt-1">
                <div className="text-[#F5F5F5] 3xl:text-2xl xl:text-base lg:text-base md:text-xl w-32 text-right font-lato">
                  {item.dronesname}
                </div>
                <div className="text-[#AAAAAA] 3xl:text-2xl xl:text-base lg:text-base md:text-xl ml-2 ">
                  {item.drones}
                </div>
              </div>
            )}

            {item.Reachname && (
              <div className="flex -mt-1">
                <div className="text-[#F5F5F5] 3xl:text-2xl xl:text-base lg:text-base md:text-xl w-32 text-right font-lexend">
                  {item.Reachname}
                </div>
                <div className="text-[#AAAAAA] 3xl:text-2xl xl:text-base lg:text-base md:text-xl ml-2 ">
                  {item.Reach}
                </div>
              </div>
            )}
          </div>

          {item.vidUrl && (
            <div className="xl:ml-72 md:ml-48 xl:w-auto lg:w-full md:w-full mt-5">
              <iframe
                className="3xl:w-[1900px] 3xl:h-[800px] xl:w-[1000px] xl:h-[500px] lg:w-[800px] lg:h-[400px] md:w-[850px] md:h-[400px] aspect-video"
                src={item.vidUrl}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          )}
          <div className="xl:ml-72 md:ml-48 xl:w-auto lg:w-full md:w-full">
            {item.Title11 && (
              <h1 className="text-[#AAAAAA] 3xl:text-3xl xl:text-xl lg:text-xl md:text-3xl">
                {item.Title11}
              </h1>
            )}
            {item.Title2 && (
              <h1 className="text-[#8409FF] 3xl:text-5xl xl:text-5xl lg:text-7xl md:text-6xl font-golden-hopes">
                {item.Title2}
              </h1>
            )}
            {item.subtitle1 && (
              <ul className="text-[#F5F5F5] text-base mt-1 ml-7 list-disc">
                <li className="text-[#AAAAAA] 3xl:text-2xl xl:text-base lg:text-base md:text-xl">
                  {item.subtitle1}
                </li>
                <li className="text-[#AAAAAA] 3xl:text-2xl xl:text-base lg:text-base md:text-xl">
                  {item.subtitle2}
                </li>
              </ul>
            )}
          </div>
          <div className="xl:ml-72 md:ml-48 xl:w-auto lg:w-full md:w-full">
            {item.Title12 && (
              <h1 className="text-[#AAAAAA] 3xl:text-3xl xl:text-xl lg:text-xl md:text-3xl">
                {item.Title12}
              </h1>
            )}
            {item.Title3 && (
              <h1 className="text-[#8409FF] 3xl:text-5xl xl:text-7xl lg:text-7xl md:text-6xl font-golden-hopes">
                {item.Title3}
              </h1>
            )}
            {item.subtitle3 && (
              <p className="text-[#AAAAAA] 3xl:text-2xl font-lexend xl:text-sm lg:text-base md:text-xl xl:w-10/12 lg:w-10/12 md:w-10/12 mt-5">
                {item.subtitle3}
              </p>
            )}
            {item.subtitle4 && (
              <p className="text-[#AAAAAA] 3xl:text-2xl font-lexend xl:text-sm lg:text-base md:text-xl xl:w-10/12 lg:w-10/12 md:w-10/12 mt-5">
                {item.subtitle4}
              </p>
            )}
          </div>
          <div className="xl:ml-72 md:ml-48 xl:w-auto lg:w-full md:w-full">
            {item.Title4 && (
              <h1 className="text-[#F5F5F5] 3xl:text-5xl xl:text-3xl lg:text-2xl md:text-3xl font-lexend ml-16">
                {item.Title4}
              </h1>
            )}
            {item.description1 && (
              <p className="text-[#AAAAAA] 3xl:text-2xl font-lexend xl:text-base lg:text-base md:text-xl xl:w-10/12 lg:w-10/12 md:w-10/12 mt-3 ml-16">
                {item.description1}
              </p>
            )}

            {item.Title5 && (
              <h1 className="text-[#F5F5F5]  3xl:text-5xl xl:text-3xl lg:text-2xl md:text-3xl font-lexend ml-16">
                {item.Title5}
              </h1>
            )}
            {item.Languagesname && (
              <span className="text-[#F5F5F5] flex 3xl:text-2xl xl:text-base lg:text-base md:text-xl mt-1 ml-16">
                {item.Languagesname}{" "}
                <span className="text-[#AAAAAA] 3xl:text-2xl xl:text-base lg:text-base md:text-xl ml-2">
                  {item.Languages}
                </span>
              </span>
            )}
            {item.Tonename && (
              <span className="text-[#F5F5F5] flex 3xl:text-2xl xl:text-base lg:text-base md:text-xl ml-16">
                {item.Tonename}{" "}
                <span className="text-[#AAAAAA] 3xl:text-2xl xl:text-base lg:text-base md:text-xl ml-2">
                  {item.Tone}
                </span>
              </span>
            )}
          </div>
          <div className="xl:ml-72 md:ml-48 xl:w-auto lg:w-full md:w-full">
            {item.description2 && (
              <p className="text-[#AAAAAA] 3xl:text-2xl font-lexend xl:text-base lg:text-base md:text-xl xl:w-10/12 lg:w-10/12 md:w-10/12  mt-3 ml-16">
                {item.description2}
              </p>
            )}
          </div>
          <div className="xl:ml-72 md:ml-48 xl:w-auto lg:w-full md:w-full">
            {item.Title6 && (
              <h1 className="text-[#F5F5F5] 3xl:text-5xl xl:text-3xl lg:text-2xl md:text-3xl font-lexend mt-10 ml-16">
                {item.Title6}
              </h1>
            )}
            {item.description3 && (
              <p className="text-[#AAAAAA] 3xl:text-2xl font-lexend xl:text-base lg:text-base md:text-xl xl:w-10/12 lg:w-10/12 md:w-10/12 mt-2 ml-16">
                {item.description3}
              </p>
            )}
          </div>

          <div className="xl:ml-72 md:ml-48 xl:w-auto lg:w-full md:w-full">
            {item.Title7 && (
              <h1 className="text-[#8409FF] 3xl:text-5xl xl:text-7xl lg:text-7xl md:text-6xl font-golden-hopes mt-10 ml-16">
                {item.Title7}
              </h1>
            )}
            {item.description4 && (
              <p className="text-[#AAAAAA] 3xl:text-2xl font-lexend xl:text-base lg:text-base md:text-xl xl:w-10/12 lg:w-10/12 md:w-10/12 m-2 ml-16">
                {item.description4}
              </p>
            )}
            {item.subtitle5 && (
              <p className="text-[#AAAAAA] 3xl:text-2xl font-lexend xl:text-base lg:text-base md:text-xl xl:w-10/12 lg:w-10/12 md:w-10/12 mt-10">
                {item.subtitle5}
              </p>
            )}
            {item.subtitle6 && (
              <p className="text-[#AAAAAA] 3xl:text-2xl font-lexend xl:text-base lg:text-base md:text-xl xl:w-10/12 lg:w-10/12 md:w-10/12 mt-3">
                {item.subtitle6}
              </p>
            )}
          </div>
          <div>
            {item.gallery && (
              <div className="xl:ml-72 md:ml-48 xl:w-auto lg:w-full md:w-full">
                <LightGallery
                  plugins={[lgZoom, lgVideo]}
                  mode="lg-fade"
                  elementClassNames="galleryStyle"
                >
                  <a data-src="https://botlab-website.s3.us-west-2.amazonaws.com/Rectangle+261.png">
                    <Image
                      src="https://botlab-website.s3.us-west-2.amazonaws.com/Rectangle+261.png"
                      width={404}
                      height={400}
                      className="card1"
                    />
                  </a>

                  <a data-src="https://botlab-website.s3.us-west-2.amazonaws.com/Rectangle+259.png">
                    <Image
                      src="https://botlab-website.s3.us-west-2.amazonaws.com/Rectangle+259.png"
                      width={611}
                      height={400}
                      className="card2"
                    />
                  </a>
                  <a data-src="https://botlab-website.s3.us-west-2.amazonaws.com/Rectangle+260.png">
                    <Image
                      src="https://botlab-website.s3.us-west-2.amazonaws.com/Rectangle+260.png"
                      width={404}
                      height={400}
                      className="card3"
                    />
                  </a>
                </LightGallery>
              </div>
            )}
          </div>

          <div className="xl:ml-72 md:ml-48 xl:w-auto lg:w-full md:w-full">
            {item.Titlename && (
              <h1 className="text-[#AAAAAA] 3xl:text-3xl xl:text-xl lg:text-base md:text-3xl">
                {item.Titlename}
              </h1>
            )}
            {item.Title8 && (
              <h1 className="text-[#8409FF] 3xl:text-5xl xl:text-7xl lg:text-7xl md:text-7xl font-golden-hopes">
                {item.Title8}
              </h1>
            )}
          </div>

          <div className="">
            {item.subtitle7 && (
              <h1 className="text-[#F5F5F5] 3xl:text-5xl 3xl:space-x-96 text-3xl mt-10 xl:justify-center xl:mr-44 lg:ml-44 lg:text-center md:ml-44 md:text-center font-lexend">
                {item.subtitle7}
              </h1>
            )}
            <div>
              {item.icons1 && (
                <div className="flex justify-center mt-4 xl:ml-44 xl:justify-around  3xl:mt-12 3xl:justify-evenly  xl:mr-44 lg:ml-44  md:ml-44 md:justify-around lg:justify-around ">
                  {item.icons1.map((icon, iconIndex) => (
                    <div key={iconIndex} className="">
                      <Image
                        src={icon.img}
                        width={80}
                        alt={icon.name1}
                        className="3xl:w-[120px]"
                      />
                      <p className="text-[#F5F5F5] text-center">
                        {icon.count1}
                      </p>
                      <p className="text-[#F5F5F5] text-center">{icon.name1}</p>
                      <p className="text-[#F5F5F5] text-center">
                        {icon.count2}
                      </p>
                      <p className="text-[#F5F5F5] text-center">{icon.name2}</p>
                      <p className="text-[#F5F5F5] text-center">
                        {icon.count3}
                      </p>
                      <p className="text-[#F5F5F5] text-center">{icon.name3}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="">
            {item.subtitle7 && (
              <h1 className="text-[#F5F5F5] text-2xl mt-14 3xl:text-center 3xl:text-4xl xl:text-center xl:mr-44 md:ml-44 lg:ml-44 lg:text-center text-center font-lexend">
                {item.Title13}
              </h1>
            )}
            <div className="">
              {item.icons1 && (
                <div className="flex justify-center mt-4 xl:justify-around   3xl:mt-12 3xl:justify-evenly  xl:mr-44 lg:ml-44 md:ml-44 md:justify-around lg:justify-around">
                  {item.icons1.map((icon, iconIndex) => (
                    <div key={iconIndex} className="">
                      <Image
                        src={icon.img}
                        width={80}
                        alt={icon.name1}
                        className="3xl:w-[120px]"
                      />
                      <p className="text-[#F5F5F5] text-center">
                        {icon.count4}
                      </p>
                      <p className="text-[#F5F5F5] text-center">{icon.name1}</p>
                      <p className="text-[#F5F5F5] text-center">
                        {icon.count5}
                      </p>
                      <p className="text-[#F5F5F5] text-center">{icon.name2}</p>
                      <p className="text-[#F5F5F5] text-center">
                        {icon.count6}
                      </p>
                      <p className="text-[#F5F5F5] text-center">{icon.name3}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="xl:ml-72 md:ml-48 xl:w-auto lg:w-full md:w-full">
            {item.Title9name && (
              <h1 className="text-[#AAAAAA] 3xl:text-3xl xl:text-xl lg:text-base md:text-3xl">
                {item.Title9name}
              </h1>
            )}
            {item.Title9 && (
              <h1 className="text-[#8409FF] 3xl:text-5xl xl:text-7xl lg:text-7xl md:text-7xl font-golden-hopes">
                {item.Title9}
              </h1>
            )}
            {item.subtitle8 && (
              <p className="text-[#AAAAAA] 3xl:text-2xl font-lexend xl:text-sm lg:text-base md:text-xl xl:w-10/12 lg:w-10/12 md:w-10/12 mt-5">
                {item.subtitle8}
              </p>
            )}
            {item.subtitle9 && (
              <p className="text-[#AAAAAA] 3xl:text-2xl font-lexend xl:text-sm lg:text-base md:text-xl xl:w-10/12 lg:w-10/12 md:w-10/12 mt-5">
                {item.subtitle9}
              </p>
            )}
            {item.subtitle20 && (
              <p className="text-[#AAAAAA] 3xl:text-2xl font-lexend xl:text-sm lg:text-base md:text-xl xl:w-10/12 lg:w-10/12 md:3/6 md:w-10/12 mt-5">
                {item.subtitle20}
              </p>
            )}
          </div>
          <div className="xl:ml-72 md:ml-48 xl:w-auto lg:w-full md:w-full">
            {item.Title10 && (
              <h1 className="text-[#F5F5F5] 3xl:text-4xl xl:text-3xl lg:text-base md:text-3xl font-lexend">
                {item.Title10}
              </h1>
            )}
            {item.subtitle10 && (
              <p className="text-[#AAAAAA] 3xl:text-2xl font-lexend xl:text-base lg:text-base md:text-2xl mt-1">
                {item.subtitle10}
              </p>
            )}
            {item.subtitle11 && (
              <p className="text-[#AAAAAA] 3xl:text-2xl font-lexend xl:text-base lg:text-base md:text-2xl -mt-1">
                {item.subtitle11}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PortfolioGalleryDetails;