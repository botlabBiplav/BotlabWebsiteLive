  import React, { useState, useEffect }  from "react";
  import videodata from "../../../../Images/Image/botlab.webm";
import endpointData from "../../../api/endpointData";
import useGetRequest from "../../../api/UseGetRequest";


const Herocard = () => {
  const words = ["Storytelling", "Entertainment", "Advertising",];
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const typingSpeed = 70; // Speed of typing in milliseconds
    const pauseDuration = 1000; // Pause duration in milliseconds after typing

    const typeEffect = () => {
      const currentWord = words[wordIndex];

      if (isDeleting) {
        // Handle the deleting phase
        setText(currentWord.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
        if (charIndex === 0) {
          setIsDeleting(false);
          setIsPaused(false); // Start pause after deleting completes
        }
      } if(isDeleting => false) {
        // Handle the typing phase
        setText(currentWord.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
        if (charIndex === currentWord.length) {
          setIsPaused(true); // Ensure pause state is reset
          setCharIndex(0); // Reset character index for the next word
          setWordIndex((prevIndex) => (prevIndex + 1) % words.length); // Move to the next word
        }
      }
    };

    const intervalId = setInterval(() => {
      if (isPaused) {
        // Handle the pause duration after typing
        setIsPaused(false); // Reset pause status to start deleting
        setIsDeleting(true);
      } else {
        typeEffect();
      }
    }, isDeleting ? typingSpeed : (isPaused ? pauseDuration : typingSpeed));

    return () => clearInterval(intervalId);
  }, [charIndex, isDeleting, wordIndex, isPaused]);




  // const { data, loading, error } = useGetRequest(endpointData.heroSection);
  // const API_URL = process.env.NEXT_PUBLIC_API_URL;

  // if (loading) return <p>Loading...</p>; // Show loading indicator while fetching data

  // if (error) return <p>Error: {error.message}</p>; // Show error message if request fails
  // console.log(data, "findrrt");
  return (
    <>
      {/* <div class="aspect-w-16 aspect-h-9">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/8U3TVWQ0oog?si=5guRCfWXI9F-2rOs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div> */}
            {/* strapi integration */}
      {/* {data?.map((item) => (
        <>
          <div className="relative h-screen w-full overflow-hidden bg-black ">
            <video
              src={`${
                API_URL + item.attributes.backgroundVideo.data[0].attributes.url
              }`}
              autoPlay
              muted
              loop
              disablePictureInPicture
              className="absolute top-0 left-0 min-w-full min-h-full object-cover z-0"
            />

            <div className="relative z-10 flex flex-col justify-center items-center h-full">
              <div className="text-center text-white">
                <h1 className="text-white text-8xl font-bold text-center w-[1100px]">
                  {item.attributes.title}
                </h1>
                <div className="flex justify-center">
                  <p className="mt-5 text-4xl w-[700px]">
                    {item.attributes.subtitle}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      ))} */}

<div className='relative h-screen w-full overflow-hidden bg-transparent'>
    <video src={videodata} autoPlay muted loop disablePictureInPicture className='absolute top-0 left-0 min-w-full min-h-full object-cover z-0'/>
    
    <div className='relative z-10 flex flex-col justify-end pb-8 lg:pl-80 md:pl-10 items-left h-full'>
        {/* Your content goes here */}
        <div className='text-left text-white'>
            <h1 className="text-white text-7xl pb-4 font-lexend">
                THE NEW ERA OF
                <br/> <p id="typewriter" className="font-golden-hopes text-[13rem] text-[#8409FF]">{text}&nbsp;</p>
            </h1>
            {/* <p className='mt-5 text-4xl font-lato-light tracking-widest'>THE STARS SPEAK YOUR STORY</p> */}
        </div>
    </div>
</div>
    </>
  );
};

export default Herocard;
