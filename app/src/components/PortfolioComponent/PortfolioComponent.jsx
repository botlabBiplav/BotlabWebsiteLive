import Image from "next/image";
import ViewImg from "../../../../Images/Image/view.png"
import ReachImg from "../../../../Images/Image/reach.png"
import ShareImg from "../../../../Images/Image/share.png"
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

import "./Portfolio.css"

const PortfolioComponent = () => {
    const lightGallery = useRef(null);
    return (
        <div className="mt-44">
            {PortfolioData.map((item, index) => (
                <div key={index} className="mb-10 xl:ml-72 md:ml-36 xl:w-auto lg:w-full">
                    {/* Conditional Rendering Based on Available Data */}
                    <div>
                        {item.Title && <h1 className="text-[#F5F5F5] xl:text-4xl lg:text-3xl md:text-xl font-lexend">{item.Title}</h1>}
                        {item.Title0 && <h1 className="text-[#F5F5F5] xl:text-4xl lg:text-3xl font-lexend">{item.Title0}</h1>}
                        {item.subtitle && <h1 className="text-[#AAAAAA] text-base mt-3 font-lexend">{item.subtitle}</h1>}
                        {item.eventPlace && <h1 className="text-[#E2E2E2] text-base mt-2">{item.eventPlace}</h1>}
                        {item.eventDate && <h1 className="text-[#AAAAAA] ">{item.eventDate}</h1>}
                    </div>

                    {/* Rendering Project Overview Details */}
                    <div>
                        {item.Title1 && <h1 className="text-white xl:text-xl lg:text-xl font-lexend">{item.Title1}</h1>}
                        {item.Clientname && (
                            <div className="flex mt-2">
                                <div className="text-white text-base w-28 text-right font-lato">{item.Clientname}</div>
                                <div className="text-gray-400 ml-2 font-lato">{item.Client}</div>
                            </div>
                        )}
                        {item.Industryname && (
                            <div className="flex -mt-1">
                                <div className="text-[#F5F5F5] text-base w-28 text-right font-lato">{item.Industryname}</div>
                                <div className="text-gray-400 ml-2 ">{item.Industry}</div>
                            </div>
                        )}
                        {item.Eventname && (

                            <div className="flex -mt-1">
                                <div className="text-white text-base w-28 text-right font-lato">{item.Eventname}</div>
                                <div className="text-gray-400 ml-2 ">{item.Event}</div>
                            </div>
                        )}
                        {item.Locationname && (

                            <div className="flex -mt-1">
                                <div className="text-white text-base w-28 text-right font-lato">{item.Locationname}</div>
                                <div className="text-gray-400 ml-2 ">{item.Location}</div>
                            </div>
                        )}
                        {item.dronesname && (
                            <div className="flex -mt-1">
                                <div className="text-white text-base w-28 text-right font-lato">{item.dronesname}</div>
                                <div className="text-gray-400 ml-2 ">{item.drones}</div>
                            </div>
                        )}

                        {item.Reachname && (
                            <div className="flex -mt-1">
                                <div className="text-white text-base w-28 text-right font-lexend">{item.Reachname}</div>
                                <div className="text-gray-400 ml-2 ">{item.Reach}</div>
                            </div>
                        )}
                    </div>
                    {/* Media Rendering */}
                    {item.vidUrl && (
                        <div className="mt-5">
                            <iframe
                                className="xl:w-[1000px] xl:h-[500px] lg:w-[800px] lg:h-[400px] md:w-[550px] md:h-[300px] aspect-video"
                                src={item.vidUrl}
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                            ></iframe>
                        </div>
                    )}

                    {item.Title11 && <h1 className="text-gray-400 text-[17px]">{item.Title11}</h1>}
                    {item.Title2 && <h1 className="text-white lg:text-4xl text-xl font-lexend">{item.Title2}</h1>}
                    {
                        item.subtitle1 &&
                        <ul className="text-white text-base mt-1 ml-7 list-disc">
                            <li className="text-gray-400">{item.subtitle1}</li>
                            <li className="text-gray-400">{item.subtitle2}</li>
                        </ul>
                    }

                    {item.Title12 && <h1 className="text-gray-400 text-[17px]">{item.Title12}</h1>}
                    {item.Title3 && <h1 className="text-white lg:text-4xl text-xl font-lexend">{item.Title3}</h1>}
                    {item.subtitle3 && <p className="text-gray-400 font-lexend text-base xl:w-10/12 lg:w-10/12 md:w-5/6 mt-5">{item.subtitle3}</p>}
                    {item.subtitle4 && <p className="text-gray-400 font-lexend text-base xl:w-10/12 lg:w-10/12 md:w-5/6 mt-5">{item.subtitle4}</p>}


                    {item.Title4 && <h1 className="text-white lg:text-4xl text-xl font-lexend ml-16">{item.Title4}</h1>}
                    {item.description1 && <p className="text-gray-400 font-lexend text-base xl:w-10/12 lg:w-10/12 md:w-5/6 mt-3 ml-16">{item.description1}</p>}

                    {item.Title5 && <h1 className="text-white xl:text-3xl lg:text-2xl font-lato ml-16">{item.Title5}</h1>}
                    {item.Languagesname && (
                        <span className="text-white flex text-base mt-1 ml-16">
                            {item.Languagesname} <span className="text-gray-400 ml-2">{item.Languages}</span>
                        </span>
                    )}
                    {item.Tonename && (
                        <span className="text-white flex text-base ml-16">
                            {item.Tonename} <span className="text-gray-400 ml-2">{item.Tone}</span>
                        </span>
                    )}
                    {item.description2 && <p className="text-gray-400 font-lexend text-base xl:w-10/12 lg:w-10/12 md:w-5/6 mt-3 ml-16">{item.description2}</p>}
                    <div className="">
                        {item.Title6 && <h1 className="text-white text-2xl font- mt-10 ml-16">{item.Title6}</h1>}
                        {item.description3 && <p className="text-gray-400 font-lexend text-base xl:w-10/12 lg:w-10/12 md:w-5/6 mt-2 ml-16">{item.description3}</p>}
                    </div>

                    <div className="">
                        {item.Title7 && <h1 className="text-white text-2xl font- mt-10 ml-16">{item.Title7}</h1>}
                        {item.description4 && <p className="text-gray-400 font-lexend text-base xl:w-10/12 lg:w-10/12 md:w-5/6 m-2 ml-16">{item.description4}</p>}
                        {item.subtitle5 && <p className="text-gray-400 font-lexend text-base xl:w-10/12 lg:w-10/12 md:w-5/6 mt-10">{item.subtitle5}</p>}
                        {item.subtitle6 && <p className="text-gray-400 font-lexend text-base xl:w-10/12 lg:w-10/12 md:w-5/6 mt-3">{item.subtitle6}</p>}
                    </div>
                    <div>
                        {item.gallery && (
                            <div className="">
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
                                            className="card2 lg:!w-[580px] xl:!w-[611px]"
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
                    <div>
                        {item.Titlename && <h1 className="text-gray-400 text-[17px]">{item.Titlename}</h1>}
                        {item.Title8 && <h1 className="text-white lg:text-4xl text-xl font-lexend">{item.Title8}</h1>}
                    </div>

                    {/* {here need to image} */}

                    <div className="">
                        {item.subtitle7 && <h1 className="text-white text-3xl mt-10 xl:ml-0 lg:text-center">{item.subtitle7}</h1>}
                        <div>
                            {item.icons1 && (
                                <div className="flex mt-4 xl:ml-44 xl:space-x-64 xl:justify-start lg:justify-center lg:space-x-52 md:space-x-12">
                                    {item.icons1.map((icon, iconIndex) => (
                                        <div key={iconIndex} className="">
                                            <Image
                                                src={icon.img}
                                                width={80}
                                                alt={icon.name1}
                                                className="" />
                                            <p className="text-white text-center">{icon.count1}</p>
                                            <p className="text-white text-center">{icon.name1}</p>
                                            <p className="text-white text-center">{icon.count2}</p>
                                            <p className="text-white text-center">{icon.name2}</p>
                                            <p className="text-white text-center">{icon.count3}</p>
                                            <p className="text-white text-center">{icon.name3}</p>
                                        </div>
                                    ))}
                                </div>
                            )}

                        </div>
                    </div>

                    <div className="">
                        {item.subtitle7 && <h1 className="text-white text-2xl mt-14 xl:text-center lg:text-center">{item.Title13}</h1>}
                        <div>
                            {item.icons1 && (
                                <div className="flex mt-4 xl:ml-44 xl:space-x-64 xl:justify-start lg:justify-center lg:space-x-52 md:space-x-12">
                                    {item.icons1.map((icon, iconIndex) => (
                                        <div key={iconIndex} className="">
                                            <Image
                                                src={icon.img}
                                                width={80}
                                                alt={icon.name1}
                                                className="" />
                                            <p className="text-white text-center">{icon.count4}</p>
                                            <p className="text-white text-center">{icon.name1}</p>
                                            <p className="text-white text-center">{icon.count5}</p>
                                            <p className="text-white text-center">{icon.name2}</p>
                                            <p className="text-white text-center">{icon.count6}</p>
                                            <p className="text-white text-center">{icon.name3}</p>
                                        </div>
                                    ))}
                                </div>
                            )}

                        </div>
                    </div>

                    <div>
                        {item.Title9name && <h1 className="text-gray-400 text-[17px]">{item.Title9name}</h1>}
                        {item.Title9 && <h1 className="text-white lg:text-4xl text-xl font-lexend">{item.Title9}</h1>}
                        {item.subtitle8 && <p className="text-gray-400 font-lexend text-base xl:w-10/12 lg:w-10/12 md:w-5/6 mt-5">{item.subtitle8}</p>}
                        {item.subtitle9 && <p className="text-gray-400 font-lexend text-base xl:w-10/12 lg:w-10/12 md:w-5/6 mt-5">{item.subtitle9}</p>}
                        {item.subtitle20 && <p className="text-gray-400 font-lexend text-base xl:w-10/12 lg:w-10/12 md:w-5/6 mt-5">{item.subtitle20}</p>}
                    </div>
                    <div>
                        {item.Title10 && <h1 className="text-white text-2xl font-lato">{item.Title10}</h1>}
                        {item.subtitle10 && <p className="text-gray-400 font-lexend text-base mt-1">{item.subtitle10}</p>}
                        {item.subtitle11 && <p className="text-gray-400 font-lexend text-base -mt-1">{item.subtitle11}</p>}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default PortfolioComponent;


{/* Icons and Achievements */ }
{/* {item.icons1 && (
                        <div className="flex space-x-4">
                            {item.icons1.map((icon, idx) => (
                                <div key={idx} className="text-center">
                                    <img src={icon.img} alt={icon.name1} />
                                    <p className="text-white">{icon.count1}</p>
                                    <p className="text-gray-400">{icon.name1}</p>
                                </div>
                            ))}
                        </div>
                    )} */}

// PortfolioData.map((item, index) => (<>
//     <div className="flex justify-center xl:mr-96 mr-0 bg-red-500">
//         <div>
//             <h1 className="text-white lg:text-4xl text-xl font-lexend">{item.Title}</h1>
//             <h1 className="text-white lg:text-4xl text-xl font-lexend">{item.Title0}</h1>
//             <h1 className="text-gray-400 mt-1">{item.subtitle}</h1>
//             <h1 className="text-white text-[12px] mt-1">{item.eventPlace}</h1>
//             <h1 className="text-gray-400 text-[12px]">{item.eventDate}</h1>
//         </div>
//     </div>
//     <div className="ml-[280px]">
//         <div className="">
//             <h1 className="text-white text-2xl font-lato">{item.Title1}</h1>
//             <div className="">
//                 <span className="text-white flex text-[15px] ml-12 mt-3 mr-24">{item.Clientname}<p className="text-gray-400">{item.Client}</p></span>
//                 <span className="text-white flex text-[15px] ml-12 mt-1">{item.Industryname}<p className="text-gray-400 items-center">{item.Industry}</p></span>
//                 <span className="text-white flex text-[15px] ml-12 mt-1">{item.Eventname}<p className="text-gray-400 items-center">{item.Event}</p></span>
//                 <span className="text-white flex text-[15px] ml-12 mt-1">{item.Locationname}<p className="text-gray-400 items-center">{item.Location}</p></span>
//                 <span className="text-white flex text-[15px] ml-12 mt-1">{item.dronesname}<p className="text-gray-400 items-center">{item.drones}</p></span>
//                 <span className="text-white flex text-[15px] ml-12 mt-1">{item.Reachname}<p className="text-gray-400 items-center">{item.Reach}</p></span>
//             </div>
//         </div>
//     </div>
//     <div className="ml-28 mt-5 flex justify-center">
//         <iframe className="flex justify-center w-[1000px] h-[500px] aspect-video" src={item.vidUrl} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
//     </div>
//     <div className="ml-80">
//         <h1 className="text-gray-400 text-[17px]">{item.Title11}</h1>
//         <h1 className="text-white text-[25px]">{item.Title2}</h1>
//         <ul>
//             <li className="text-gray-400 text-[14px] font-lexend">{item.subtitle1}</li>
//             <li className="text-gray-400 text-[14px] font-lexend">{item.subtitle2}</li>
//         </ul>
//     </div>
//     <div className="ml-80">
//         <h1 className="text-gray-400 text-[17px]">{item.Title12}</h1>
//         <h1 className="text-white text-[25px]">{item.Title3}</h1>
//         <p className="text-gray-400 font-lexend text-[15px] w-2/3">{item.subtitle3}</p>
//         <p className="text-gray-400 font-lexend text-[15px] w-2/3">{item.subtitle4}</p>
//     </div>
//     <div className="ml-96">
//         <h1 className="text-white text-[25px]">{item.Title4}</h1>
//         <p className="text-gray-400 font-lexend text-[15px] w-2/3">{item.description1}</p>
//     </div>
//     <div>
//         <h1 className="text-white text-2xl font-lato ml-80 text-[25px]">{item.Title5}</h1>
//         <div className="">
//             <span className="text-white flex text-[15px] ml-80 mt-1">{item.Languagesname}<p className="text-gray-400">{item.Languages}</p></span>
//             <span className="text-white flex text-[15px] ml-80 mt-1">{item.Tonename}<p className="text-gray-400 items-center">{item.Tone}</p></span>
//             <p className="text-gray-400 items-center ml-80 mt-5">{item.description2}</p>
//         </div>
//     </div>
//     <div>
//         <h1 className="text-white text-2xl font-lato ml-80 text-[25px]">{item.Title6}</h1>
//         <div className="">
//             <p className="text-gray-400 items-center ml-80 w-2/3">{item.description3}</p>
//         </div>
//     </div>
//     <div>
//         <div className="ml-24">
//             <h1 className="text-white text-2xl font-lato ml-80 text-[25px]">{item.Title7}</h1>
//             <div className="">
//                 <p className="text-gray-400 items-center ml-80 ">{item.description4}</p>
//             </div>
//         </div>

//         <div className="mt-10 ml-80">
//             <p className="text-gray-400 items-center w-2/3">{item.subtitle5}</p>
//         </div>
//         <div className="ml-80">
//             <p className="text-gray-400 items-center mt-5  w-2/3">{item.subtitle6}</p>
//         </div>
//     </div>
//     <div className="ml-80 mt-5">
//         <div>
//             <h1 className="text-gray-400 text-[17px]">{item.Titlename}</h1>
//             <h1 className="text-white text-[25px]">{item.Title8}</h1>
//         </div>
//     </div>
//     <div className="mt-10 ml-96">
//         <h1 className="text-white text-[30px]">{item.subtitle7}</h1>
//         <div className="flex mt-10">
//             <span className="">
//                 <Image
//                     src={item.img}
//                     width={100}
//                     height={100}
//                 />
//                 <h1 className="text-white text-center">{ }</h1>
//                 <h1 className="text-white text-center">{ }</h1>
//             </span>
//             <span className="">
//                 <Image
//                     src={item.img1}
//                     width={100}
//                     height={100}
//                     className="ml-52"
//                 />
//                 <div className="ml-52">
//                     <h1 className="text-white text-center">{ }</h1>
//                     <h1 className="text-white text-center">{ }</h1>
//                 </div>
//             </span>
//             <span className="">
//                 <Image
//                     src={item.img2}
//                     width={100}
//                     height={100}
//                     className="ml-52"
//                 />
//                 <div className="ml-52">
//                     <h1 className="text-white text-center">{ }</h1>
//                     <h1 className="text-white text-center">{ }</h1>
//                 </div>
//             </span>
//         </div>
//     </div>
//     <div className="mt-20">
//         <h1 className="text-white flex justify-center text-[30px]"></h1>
//         <div className="flex mt-10">
//             <span className="">
//                 <Image
//                     src={item.img}
//                     width={100}
//                     height={100}
//                     className="ml-96"

//                 />
//                 <div className="ml-96">
//                     <h1 className="text-white text-center">-</h1>
//                     <h1 className="text-white text-center"></h1>
//                 </div>
//             </span>
//             <span className="">
//                 <Image
//                     src={item.img1}
//                     width={100}
//                     height={100}
//                     className="ml-52"
//                 />
//                 <div className="ml-52">
//                     <h1 className="text-white text-center">-</h1>
//                     <h1 className="text-white text-center"></h1>
//                 </div>
//             </span>
//             <span className="">
//                 <Image
//                     src={item.img2}
//                     width={100}
//                     height={100}
//                     className="ml-52"
//                 />
//                 <div className="ml-52">
//                     <h1 className="text-white text-center">-</h1>
//                     <h1 className="text-white text-center"></h1>
//                 </div>
//             </span>
//         </div>
//     </div>
//     <div className="mt-5 flex justify-cente ml-80">
//         <div>
//             <h1 className="text-gray-400 text-[17px]">{item.Title9name}</h1>
//             <h1 className="text-white text-[25px]">{item.Title9}</h1>
//             <h1 className="text-gray-400 w-2/3">{ }</h1>
//             <br />
//             <h1 className="text-gray-400 mt-[1px] w-2/3">{ }</h1>
//             <br />
//             <h1 className="text-gray-400 mt-[1px] w-2/3">{ }</h1>
//         </div>
//     </div>

//     <div className="ml-80 mt-10">
//         <div>
//             <h1 className="text-white text-xl font-lexend">{ }</h1>
//             <h1 className="text-gray-400 text-[12px]">{ }</h1>
//             <h1 className="text-gray-400 text-[12px]">{ }</h1>
//         </div>
//     </div>
// </>))