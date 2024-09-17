import React from "react";

const BiggestDroneShow = () => {
  return (
    <>
    {/* <div className="relative h-[260vh]"> */}
    <div className=" lg:mx-80 mx-40 h-auto text-white">
        <div className="flex align-center justify-center">
            <div className="flex-row text-center">
                <p className="text-6xl font-lexend pb-5">
                    The World&apos;s  <span className="font-golden-hopes text-8xl align-middle text-[#8409FF]"> Biggest </span> Drone Show    
                </p> 
                <p className="text-2xl font-lato font-light pb-20">
                    Watch Nakshatra - a 4 part series on how we created the World&apos;s Biggest Drone show earlier this year<br/> during Anant Ambani and Radhika Merchant&apos;s Pre-wedding celebrations
                </p>
            </div>
        </div>
        <div className="flex align-between justify-center gap-20 py-10">
            <div className="w-1/2 text-center">
                <iframe className="flex aspect-video w-full" src="https://www.youtube.com/embed/a-RrjHKQMsI?si=uvZJieB2deZmqeSc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin"></iframe>
            </div>
            <div className="w-1/2 text-center">
                <iframe className="flex aspect-video w-full" src="https://www.youtube.com/embed/mw8dvXC8tC0?si=YDXqv0Rb5H5jPdza" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
        </div>
        <div className="flex align-between justify-center gap-20 py-10">
            <div className="w-1/2 text-center">
                <iframe className="flex aspect-video w-full" src="https://www.youtube.com/embed/6Z9tBt-Mka8?si=kumm7iBw69ryWYX-" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
            <div className="w-1/2 text-center">
                <iframe className="flex aspect-video w-full" src="https://www.youtube.com/embed/6AgbgV5GO24?si=bxwmbbCxyy3gqZ6Y" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
        </div>
    </div></>
  );
};

export default BiggestDroneShow;
