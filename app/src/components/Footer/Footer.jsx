import facebookIcon from "../../../../Images/Icons/facebookicon.svg";
import instagramIcon from "../../../../Images/Icons/instagram.svg";
import linkedinIcon from "../../../../Images/Icons/linkedin.svg";
import twitterIcon from "../../../../Images/Icons/twitter.svg";
import websitelogo from "../../../../Images/Logos/wordmarkWhite.png";
import youtubeIcon from "../../../../Images/Icons/youtube.svg";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-black font-light font-lexend px-40">
      <div className="mx-auto w-full opacity-55">
        <div className="pt-20 grid grid-cols-3 gap-4 px-4 py-2 lg:py-8 md:grid-cols-3 divide-x-[1px] divide-gray-500 ">
          <div className=" flex items-center justify-center ">
            <div className="text-white">
              <Image
                className="lg:w-[300px] w-[100px]"
                width={300}
                height={200}
                src={websitelogo}
                alt="BotLab Dynamics Logo"
              />
              <span className="flex mt-2  justify-between">
                <a href=''><Image
                  className=""
                  width={25}
                  height={25}
                  src={facebookIcon}
                  alt="facebook icon"
                /></a>
                <Image
                  className=""
                  width={25}
                  height={25}
                  src={instagramIcon}
                  alt="instagram icon"
                />
                <Image
                  className=""
                  width={25}
                  height={25}
                  src={twitterIcon}
                  alt="twitter icon"
                />
                <Image
                  className=""
                  width={25}
                  height={25}
                  src={linkedinIcon}
                  alt="linkedin icon"
                />
                <Image
                  className=""
                  width={25}
                  height={25}
                  src={youtubeIcon}
                  alt="youtube icon"
                />
              </span>
              <p className="mt-3 lg:text-xl text-xs">
                &copy; botlab dynamics pvt. ltd. 2024
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <ul className="text-white ml-5 flex flex-col justify-between gap-8">
              <li className="">
                <p className=" lg:text-xl text-xs">
                  5C1, Research and Innovation Park,
                  <br />
                  Indian Institute of Technology, Hauz Khas,
                  <br />
                  New Delhi - 110016
                </p>
              </li>
              <li className="">
                <p className=" lg:text-xl text-xs">
                  E115, Okhla Phase III Road,
                  <br />
                  Okhla Phase III, Okhla Industrial Estate,
                  <br />
                  New Delhi - 110016
                </p>
              </li>
            </ul>
          </div>
          <div className="flex justify-center">
            <ul className="text-white lg:text-xl text-xs ml-5 flex flex-col justify-between">
              <li className="">
                <a href='/ContactUs'><h1>Contact Us</h1></a>
              </li>
              {/* <li className="">
                                <h1>Privacy Policy</h1>
                            </li> */}
              <li className="">
                <h1 className="lg:text-xl text-xs">info@botlabdynamics.com</h1>
              </li>
              <li>
                <p>+919058484934</p>
              </li>
              <li className="">
                <p className="">+919058484934</p>
                {/* <p>+919058484934</p> */}
              </li>
            </ul>
          </div>
          {/* <div className="flex">
                        <ul className="text-gray-500 dark:text-gray-400 ml-5 lg:text-lg text-xs flex flex-col justify-between">
                            <li className="">
                                <h3>About Us</h3>
                            </li>
                            <li className="">
                                <h3>Services</h3>
                            </li>
                            <li className="">
                                <h3>Resources</h3>
                            </li>
                            <li className="">
                                <h3>Gallery</h3>
                            </li>
                            <li className="">
                                <h3>Carees</h3>
                            </li>
                        </ul>
                    </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;