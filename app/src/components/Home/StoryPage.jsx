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
        <div></div>
        {/* <SimpleParallax scale={0.5} delay={0} overflow="true">
      
        <video src={parallaxVid}  className="hue-rotate-[0deg] blur-[1px]" autoPlay muted loop />
        <Image src={parallaxImg} alt="image" className="pt-80"/>

      </SimpleParallax> */}

        <div className="text-white lg:text-6xl bg-gradient-to-b from-black">
          <div className="pb-10">
            <div className="flex justify-start">
              <div className="mt-5 w-2/5 mx-32">
                <p className="text-white lg:text-4xl text-2xl tracking-widest font-lexend">
                  TRANSFORMING THROUGH{" "}
                  <span className="font-golden-hopes lg:text-9xl text-6xl text-[#8409FF]">
                    {" "}
                    Innovation{"  "}
                  </span>
                </p>
                <p className="text-white lg:text-4xl text-2xl mt-8 font-lato font-light">
                  Pushing the boundaries of event experiences, where futuristic
                  technology meets artistry to create moments that are truly
                  unforgettable.
                </p>
 
              </div>
 
            </div>
            <div className="flex justify-end">
              <div className="mt-5 w-2/5">
                <p className="text-white lg:text-4xl text-2xl tracking-widest w-auto font-lexend">
                  TAILORED WITH{" "}
                  <span className="font-golden-hopes lg:text-9xl text-6xl text-[#8409FF]">
                    {" "}
                    Precision
                  </span>
                </p>
                <p className="text-white lg:text-4xl text-2xl mt-2 font-lato font-light">
                  Every event, Meticulously crafted to ensure that our bespoke
                  technology reflects the highest standards of sophistication.
                </p>
              </div>
            </div>
            <div className="flex justify-start">
              <div className="mt-1 w-2/5 mx-32">
                <p className="text-white lg:text-4xl text-2xl tracking-widest w-auto font-lexend">
                  MARKETING USING{" "}
                  <span className="font-golden-hopes lg:text-9xl text-6xl text-[#8409FF]">
                    Storytelling
                  </span>
                </p>
                <p className="text-white mt-2 lg:text-4xl text-2xl font-lato font-light">
                  Emabark on a journey into the future of art, entertainment and
                  advertising with our flexible and scable drone shows,
                  meticulously customized to elevate your unique theme
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>


    </>
    // <div className="parallax">
    //   <div className="pb-10">
    //     <div className=" relative flex justify-start sm:ml-60 ml-20 select-none">
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
    //     <div className="flex justify-center sm:mt-40 mt-20 select-none">
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
    //     <div className="flex justify-end sm:mr-52 mr-20 sm:mt-40 mt-20 select-none  ">
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
