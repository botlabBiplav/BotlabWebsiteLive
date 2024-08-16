import React from 'react';
import Link from 'next/link';
import Image from "next/image";
import brandlogo from "../../../../Images/Logos/wordmarkWhite.png";

// import styles from './HeaderBar.module.css'; // Assuming you have CSS modules setup

const HeaderBar = () => {


  
  return (
    <nav className="px-4 py-2 bg-gradient-to-r from-black/50 via-black/50 via-25% to-[#8409FF]/50 backdrop-blur">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-2xl font-bold">
          <Image
                className="lg:w-48"
                width={300}
                height={200}
                src={brandlogo}
                alt="BotLab Dynamics Logo"
              />
        </Link>
        <ul className="flex space-x-4">
          {/* <li>
            <Link href="/" className="font-lexend text-white hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="font-lexend text-white hover:text-gray-300">
              About
            </Link>
          </li>*/}
          <li>
            <Link href="/" className="font-lexend text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,100)]">
              HOME
            </Link>
          </li>
          <li>
            <Link href="/ContactUs" className="font-lexend text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,100)]">
              CONTACT US
            </Link>
          </li>
        </ul>
      </div>
    </nav>
);
};

export default HeaderBar;