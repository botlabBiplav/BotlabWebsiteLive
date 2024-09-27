import React, { useState } from "react";
import Image from "next/image";
import "./page.css";
import PortfolioGalleryData from "../../../Data/PortfolioGalleryData";

const PortfolioGallery = () => {
  const [loadingImg1, setLoadingImg1] = useState(true);
  const [loadingImg2, setLoadingImg2] = useState(true);
  const [loadingImg3, setLoadingImg3] = useState(true);
  return (
    <div className="relative xl:mx-24 mt-32">
      <div className="">
        <h1 className="text-[#F5F5F5] text-4xl font-lexend">Portfolio</h1>
        <p className="text-[#F5F5F5] text-xs tracking-wider font-lato">
          Check out our past shows!
        </p>
      </div>
      {PortfolioGalleryData.map((item, index) => (
        <div key={index}>
          {item.id % 2 !== 0 ? 
          <div className="flex mt-10">
            <div className="w-full relative">
              {loadingImg1 && (
                <div className="absolute inset-0 bg-gray-300 animate-pulse" />
              )}{" "}
              <Image
                height={500}
                width={600}
                src={item.img4}
                className="w-full h-full object-cover"
                onLoadingComplete={() => setLoadingImg1(false)}
              />
            </div>

            <div className="w-3/4 h-[507px]">
              <div className="h-1/2 relative">
                {loadingImg2 && (
                  <div className="absolute inset-0 bg-gray-300 animate-pulse" />
                )}{" "}
                <Image
                  height={500}
                  width={600}
                  src={item.img3}
                  className="w-full h-full object-cover"
                  onLoadingComplete={() => setLoadingImg2(false)}
                />
              </div>
              <div className="h-1/2 relative">
                {loadingImg3 && (
                  <div className="absolute inset-0 bg-gray-300 animate-pulse" />
                )}{" "}
                <Image
                  height={500}
                  width={600}
                  src={item.img2}
                  className="w-full h-full object-cover"
                  onLoadingComplete={() => setLoadingImg3(false)}
                />
              </div>
            </div>
          </div> :

          <div className="flex mt-16">
            <div className="w-3/4 h-[507px]">
              <div className="h-1/2 relative">
                {loadingImg2 && (
                  <div className="absolute inset-0 bg-gray-300 animate-pulse" />
                )}{" "}
                <Image
                  height={500}
                  width={600}
                  src={item.img3}
                  className="w-full h-full object-cover"
                  onLoadingComplete={() => setLoadingImg2(false)}
                />
              </div>
              <div className="h-1/2 relative">
                {loadingImg3 && (
                  <div className="absolute inset-0 bg-gray-300 animate-pulse" />
                )}{" "}
                <Image
                  height={500}
                  width={600}
                  src={item.img2}
                  className="w-full h-full object-cover"
                  onLoadingComplete={() => setLoadingImg3(false)}
                />
              </div>
            </div>
            <div className="w-full relative">
              {loadingImg1 && (
                <div className="absolute inset-0 bg-gray-300 animate-pulse" />
              )}{" "}
              <Image
                height={500}
                width={600}
                src={item.img4}
                className="w-full h-full object-cover"
                onLoadingComplete={() => setLoadingImg1(false)}
              />
            </div>
          </div>
          }
        </div>

        
      ))}
    </div>
  );
};

export default PortfolioGallery;
