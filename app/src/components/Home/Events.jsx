"use client";

import React, { useState } from "react";
import EventData from "../../../Data/EventsData";
import Image from "next/image";
import { Button } from "../../../../components/ui/button";
import useGetRequest from "../../../api/UseGetRequest";
import endpointData from "../../../api/endpointData";
import Link from "next/link";


const Events = () => {
  const [hoveredIndex, setHoveredIndex] = useState(0);
  const { data, loading, error } = useGetRequest(endpointData.featuredShows);
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  // console.log(endpointData.featuredShows, "finddata");

  // if (loading) return <p>Loading...</p>; // Show loading indicator while fetching data

  // if (error) return <p>Error: {error.message}</p>; // Show error message if request fails


  // console.log(data,'[0].attributes.Imagedata.data[0].attributes.url');

  return (
    <>
      <div className=" py-20 flex lg:justify-center align-middle items-center">
        <div className="  lg:h-[500px]">
          <div className="flex">
            <div className="mt-20">
            {
                EventData.map((item, index) => (<>
                  <div className=''>
                    {/* <div className='w-40 border-l  leading-3 border-white'>
d
                    </div> */}

                    <Link href={item.link}><Button onMouseEnter={() => setHoveredIndex(index)} className="font-lexend font-light tracking-widest btn lg:!w-72 !w-60 lg:!text-lg !text-sm lg:py-8 mt-5 text-white" >{item.eventType}</Button></Link>
                  </div>
                </>))
              }
              {/* strapi integration */}
              {/* {data.map((item, index) => (
                <>
                  <div>
                    <Button
                      onMouseEnter={() => setHoveredIndex(index)}
                      className=" font-lexend custombutton lg:!w-72 !w-60 lg:!text-lg !text-sm border-2  border-white bg-black lg:py-8 mt-5 text-white hover:bg-white hover:text-black"
                    >
                      {item.attributes.buttonTitle}
                    </Button>
                  </div>
                </>
              ))} */}
            </div>
            <div className="relative">
              {/* strapi integration */}
              {/* {data.map((item, index) => (
                <>
                  <div>
                    {index === hoveredIndex && (
                      <>
                        <Image
                          src={`${API_URL+item.attributes.Imagedata.data[0].attributes.url}`}
                          alt="Description of your image"
                          width={580}
                          height={600}
                          className="lg:!h-[450px] !h-[350px] -mt-2  lg:mt-0 ml-28"
                        />
                        <div className="text-white absolute  lg:bottom-1 bottom-0 lg:left-16 left-12">
                          <h1 className=" lg:text-6xl text-2xl font-lexend">
                            {item.attributes.title}
                          </h1>
                          <p className="lg:text-xl text-base mt-1  text-white font-lexend">
                            {item.attributes.location}
                          </p>
                          <p className="mt-1 lg:text-xl text-base opacity-30 font-lexend">
                            {item.attributes.date}
                          </p>
                          <p className="lg:mt-4 mt-2 lg:text-2xl  w-4/5 font-lexend">
                            {" "}
                            {item.attributes.description}
                          </p>
                        </div>
                      </>
                    )}
                  </div>
                </>
              ))} */}

{
                EventData.map((item, index) => (<>
                  <div>
                    {
                      index === hoveredIndex &&
                      <><div className=" mx-16 bg-gradient-to-t from-black via-90% via-violet-600/50 to-purple-800 px-[2px] py-[2px] w-auto h-auto">
                        <Image
                          src={item.img}
                          alt="Description of your image"
                          className='lg:!h-[450px] !h-[350px] mt-2 lg:mt-0 shadow[0_0_3px_rgba(255,255,255,100)]'
                        /></div>
                        <div className='text-white absolute  lg:bottom-1 bottom-0 lg:left-24 left-12'>
                          <h1 className=' lg:text-4xl text-2xl font-lexend lg:tracking-[0.15em]'>{item.title}</h1>
                          <p className='lg:text-xl text-base mt-1  text-white font-lexend tracking-[.25em]'>{item.eventPlace}</p>
                          <p className='mt-1 lg:text-xl text-base opacity-60 font-lexend tracking-[.5em]'>{item.eventDate}</p>
                          <p className='lg:mt-4 mt-2 lg:text-xl w-4/5 font-lato font-light tracking-widest'> {item.description}</p>
                        </div>
                      </>
                    }

                  </div>
                </>))
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Events;