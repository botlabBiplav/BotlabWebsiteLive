"use client";
import React, { useState } from "react";
import servicedata from "../../../Data/servicedata";
import Image from "next/image";
import "./servicesCard.css"

const Services = () => {
  // const [hover, setHover] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState(null);
  return (
    <>
      {/* <div className="bg-white">
        <div className="py-20">
          <div className="text-center">
            <h1 className="lg:text-6xl text-2xl font-lexend">
              SERVICES OFFERED
            </h1>
          </div>
          <div className="flex justify-center mx-auto">
            <div className="flex justify-center mt-10 lg:h-[650px] h-[400px]">
              {servicedata.map((item, index) => (
                <>
                  <div
                    key={index}
                    className={`border-2 border-black md:mx-4 ml-10 w-3/4 md:w-2/4 cursor-pointer ${
                      index === hoveredIndex ? "bg-black text-white" : ""
                    }`}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <div className="flex justify-center">
                      <div className="m-5 xl:w-[300px] lg:w-64">
                        {index === hoveredIndex ? (
                          <Image
                            src={item.img}
                            alt="Description of your image"
                            width={300}
                            height={200}
                            className="lg:h-[380px] h-[200px]"
                          />
                        ) : (
                          <Image
                            src={item.img}
                            alt="Description of your image"
                            width={300}
                            height={200}
                            className="lg:h-[500px] h-[250px]"
                          />
                        )}
                      </div>
                    </div>
                    <div className="flex justify-center">
                      <div className="my-5 text-center">
                        <h1 className=" font-lexend lg:text-xl lg:w-52 w-40">
                          {item.title}
                        </h1>
                        {index === hoveredIndex && (
                          <div className="">
                            <p className="lg:w-48 w-40 lg:mt-4 lg:text-base text-xs mt-2   font-lato-light">
                              {item.description}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </div> */}
      <div className="h-full ">

      <div className=' lg:h-[110vh] h-[80vh] grid-cols-2'>
                <div className='text-6xl flex justify-center'>
                    <h1 className='lg:mt-10 mt-3 lg:text-6xl text-2xl font-lexend'>SERVICES OFFERED</h1>
                </div>
                <div className='flex justify-center xl:mt-20 mt-10 flex-wrap items-center'>
                    {
                        servicedata.map((item, index) => (<>

                            <div class="service_card xl:h-[480px] lg:h-[400px] cursor-pointer">
                                <Image
                                    src={item.img}
                                    className="service_image"
                                />  
                                <div className="service_name xl:text-2xl lg:text-md text-[15px]">
                                    {item.title}
                                </div>
                                <div className="service_description lg:text-xs pt-40">
                                    {item.description}
                                </div>
                            </div>
                        </>))}
                </div>
            </div>
      </div>

    </>
  );
};

export default Services;