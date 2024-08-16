import React from "react";

const Showreel = () => {
  return (
    <>
    {/* <div className="relative h-[260vh]"> */}
    <div className="flex-column lg:mx-80 mx-40 h-auto py-40">
            <div className="flex-row text-center text-white">
                <p className="text-6xl font-lexend pb-5">
                    The <span className="font-golden-hopes text-8xl align-middle text-[#8409FF]"> Perfect Solution </span> for your next Event    
                </p> 
                <p className="text-2xl font-lato font-light pb-20">
                    Watch our Showreel to see how you can use our Drone Shows to take your events to the next level
                </p>
            </div>
            <div className="flex-row align-center justify-center">
              <iframe className="flex w-full h-full aspect-video" src="https://www.youtube.com/embed/zwe5pkAE5gw?si=jtR8pUdjN8YeLt-6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
    </div></>
  );
};

export default Showreel;
