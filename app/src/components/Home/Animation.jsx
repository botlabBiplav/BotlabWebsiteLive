import { useEffect, useRef } from "react";
import baseplate from "../../../../Images/Image/Baseplate.webm";
import projectionmapping from "../../../../Images/Image/projection mapping.webm";
import fireworks from "../../../../Images/Image/fireworks.webm";
import lasers from "../../../../Images/Image/Lasers.webm";


import "./Animation.css";
const Animation = () => {
  const checkboxFireworksRef = useRef(null);
  const videoContainerFireworksRef = useRef(null);
  const checkboxProjectionRef = useRef(null);
  const videoContainerProjectionRef = useRef(null);
  const checkboxLaserRef = useRef(null);
  const videoContainerLaserRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const handleCheckboxChange = (checkbox, videoContainer) => {
      if (checkbox.checked) {
        videoContainer.classList.remove("cardanimation");
      } else {
        videoContainer.classList.add("cardanimation");
      }
    };

    const checkboxFireworks = checkboxFireworksRef.current;
    const videoContainerFireworks = videoContainerFireworksRef.current;
    const checkboxProjection = checkboxProjectionRef.current;
    const videoContainerProjection = videoContainerProjectionRef.current;
    const checkboxLaser = checkboxLaserRef.current;
    const videoContainerLaser = videoContainerLaserRef.current;

    const handleFireworksChange = () =>
      handleCheckboxChange(checkboxFireworks, videoContainerFireworks);
    const handleProjectionChange = () =>
      handleCheckboxChange(checkboxProjection, videoContainerProjection);
    const handleLaserChange = () =>
      handleCheckboxChange(checkboxLaser, videoContainerLaser);

    checkboxFireworks.addEventListener("change", handleFireworksChange);
    checkboxProjection.addEventListener("change", handleProjectionChange);
    checkboxLaser.addEventListener("change", handleLaserChange);

    return () => {
      checkboxFireworks.removeEventListener("change", handleFireworksChange);
      checkboxProjection.removeEventListener("change", handleProjectionChange);
      checkboxLaser.removeEventListener("change", handleLaserChange);
    };
  }, []);
  return (
    <div className=" h-full bg-black text-white">

    <div className="relative">
      <div className="">
        <video
          id="video"
          ref={videoRef}
          src={baseplate}
          className=""
          autoPlay
          muted
          loop
          disablePictureInPicture
        />
        <div
          id="projectionvid"
          ref={videoContainerProjectionRef}
          className="cardanimation absolute top-[0%]"
        >
          <video
            id="video"
            ref={videoRef}
            src={projectionmapping}
            autoPlay
            muted
            loop
            disablePictureInPicture
          />
        </div>
        <div
          id="fireworksvid"
          ref={videoContainerFireworksRef}
          className="cardanimation absolute top-[0%]"
        >
          <video
            id="video"
            ref={videoRef}
            src={fireworks}
            autoPlay
            muted
            loop
            disablePictureInPicture
          />
        </div>
        <div
          id="laservid"
          ref={videoContainerLaserRef}
          className="cardanimation absolute top-0 "
        >
          <video
            id="video"
            ref={videoRef}
            src={lasers}
            autoPlay
            muted
            loop
            disablePictureInPicture
          />
        </div>

        <div className="absolute xl:top-8 md:top-0">
            <div className="w-[500px] text-center flex justify-center">
                <div>

<div className="flex justify-center">

            <h1 className="text-4xl w-[200px]  text-center font-bold mr-10 font-golden-hopes">
              Experience Integration
            </h1>
</div>
          
          
          <p className="w-96 text-xl text-center xl:my-20 lg:my-10 ">
            Our Team of creative and seasoned artists is capable of integrating
            drone show design with several other experiential media to create
            moments that will forever be etched in the memories of the audience
          </p>

          <div className="flex justify-center">
            <label className="">
              <div className="xl:w-28 w-24 min-h-24 xl:min-h-28 rounded-md border-2 border-[#b5bfd9] bg-white shadow-lg shadow-black/10 transition duration-150 ease-in cursor-pointer relative mt-6">
               
  <input
                  type="checkbox"
                  id="laser"
                  class="rounded-md border-gray-300 m-2"
                  ref={checkboxLaserRef}
                />
                <p className="mt-10 text-center"> Fireworks</p>
              </div>
            </label>
            <label className="">
              <div className="xl:w-28 w-24 min-h-24 xl:min-h-28 rounded-md border-2 border-[#b5bfd9] bg-white shadow-lg shadow-black/10 transition duration-150 ease-in cursor-pointer relative m-6">
               
                <input
                  type="checkbox"
                  id="fireworks"
                  ref={checkboxFireworksRef}
                  className="m-2"
                />

                <p className="mt-10 text-center"> Projection</p>
              </div>
            </label>

            <label className="">
              <div className="xl:w-28 w-24 min-h-24 xl:min-h-28 rounded-md border-2 border-[#b5bfd9] bg-white shadow-lg shadow-black/10 transition duration-150 ease-in cursor-pointer relative m-6">
              <input
                  type="checkbox"
                  id="projection"
                  ref={checkboxProjectionRef}
                  className="m-2"
                />

                <p className="mt-10 text-center"> Laser</p>
              </div>
            </label>
          </div>
          </div>
            </div>

         
        </div>
      </div>
    </div>
    </div>
  );
};

export default Animation;
