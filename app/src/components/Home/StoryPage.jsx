import React from "react";
import parallaxImg from "../../../../public/Dots.png";
import Image from "next/image";
import Video from "next-video";
import SimpleParallax from "simple-parallax-js";

const StoryPage = () => {
  return (
    <>
    {/* <div className="relative h-[260vh]"> */}
    <div>
      <div>

      </div>

      {/* <SimpleParallax scale={0.5} delay={0} overflow="true">
      
        <video src={parallaxVid}  className="hue-rotate-[0deg] blur-[1px]" autoPlay muted loop />
        <Image src={parallaxImg} alt="image" className="pt-80"/>

      </SimpleParallax> */}

        <div className="text-white text-6xl relative w-full  bg-gradient-to-b from-black">
            <div className="pb-10 pt-40">
                  <div className="flex justify-start lg:mx-80 mx-20 select-none">
                    <div className="mt-5 w-1/2">
                      <p className="text-white lg:text-4xl md:text-2xl tracking-widest font-lexend">
                        TRANSFORMING THROUGH<p className="font-golden-hopes text-9xl text-[#8409FF]"> Innovation </p>
                      </p>
                      <p className="text-white text-4xl mt-8 w-auto max-w-fit font-lato font-light">
                      Pushing the boundaries of event experiences, where futuristic technology meets artistry to create moments that are truly unforgettable.
                      </p>
                    </div>
                    <div className="w-1/2 h-auto"></div>
                  </div>
                  <div className="flex justify-center lg:mt-36 lg:mx-80 mx-20 select-none">
                    <div className="w-1/2 h-auto"></div>
                    <div className="w-1/2 mt-5">
                      <p className="text-white lg:text-4xl md:text-2xl tracking-widest w-auto font-lexend">
                        TAILORED WITH <p className="font-golden-hopes text-9xl text-[#8409FF]"> Precision</p>
                      </p>
                      <p className="text-white text-4xl mt-2 w-auto max-w-fit font-lato font-light">
                      Every event, Meticulously crafted to ensure that our bespoke technology reflects the highest standards of sophistication.
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-end lg:mt-36 lg:mx-80 mx-20 select-none">
                    <div className="mt-5 w-1/2">
                      <p className="text-white lg:text-4xl md:text-2xl tracking-widest w-auto font-lexend">
                        MARKETING WITH<p className="font-golden-hopes text-9xl text-[#8409FF]">  Storytelling</p>
                      </p>
                      <p className="text-white  mt-2 text-4xl w-auto max-w-fit font-lato font-light">
                        Emabark on a journey into the future of art, entertainment and
                        advertising with our flexible and scable drone shows, meticulously
                        customized to elevate your unique theme
                      </p>
                    </div>
                    <div className="w-1/2 h-auto"></div>
                  </div>
                </div>
            </div>
    </div>
    
    
    </>
    // <div className="parallax">
    //   <div className="pb-10">
    //     <div className=" relative flex justify-start lg:ml-60 ml-20 select-none">
    //       <div className="mt-5">
    //         <p className="text-white text-4xl tracking-widest w-96 font-lexend">
    //           A NEW AGE OF STORYTELLING
    //         </p>
    //         <p className="text-white text-xl mt-2 w-96 max-w-fit font-lato-light">
    //           Emabark on a journey into the future of art, entertainment and
    //           advertising with our flexible and scable drone shows, meticulously
    //           customized to elevate your unique theme
    //         </p>
    //       </div>
    //     </div>
    //     <div className="flex justify-center lg:mt-40 mt-20 select-none">
    //       <div className="w-[400px]">
    //         <p className="text-white text-4xl tracking-widest w-96 font-lexend">
    //           EXPERIENCES THAT INSPIRE
    //         </p>
    //         <p className="text-white text-xl mt-2 w-96 max-w-fit font-lato-light">
    //           Emabark on a journey into the future of art, entertainment and
    //           advertising with our flexible and scable drone shows, meticulously
    //           customized to elevate your unique theme
    //         </p>
    //       </div>
    //     </div>
    //     <div className="flex justify-end lg:mr-52 mr-20 lg:mt-40 mt-20 select-none  ">
    //       <div className="w-[400px]">
    //         <p className="text-white text-4xl tracking-widest w-96 font-lexend">
    //           A NEW AGE OF STORYTELLING
    //         </p>
    //         <p className="text-white  mt-2 text-xl w-96 max-w-fit font-lato-light">
    //           Emabark on a journey into the future of art, entertainment and
    //           advertising with our flexible and scable drone shows, meticulously
    //           customized to elevate your unique theme
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default StoryPage;
