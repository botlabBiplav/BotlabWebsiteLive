import React from "react";
import Image from "next/image";
import Img1 from "../../public/AboutImg.png";

const AboutUsData = [
  {
    product: [
      {
        title1: "BRAND BIO",
        description1:
          "We are a proud Made-in-India drone technology company. Years of R&D have made us industry leaders in swarm tech, and pioneers in drone light shows in India. We deal in firsts - India’s Biggest Drone Show, India’s first QR code in the sky, Africa’s Biggest Drone Show (2022) and Top Ten Indian Start-Ups selected by DST. Our goal in building and designing our hardware and software in-house has been one thing above all - to provide homegrown tech solutions to support New India’s growth story. We excel at problem-solving across sectors - defense, agriculture and entertainment, and we are hungry for more.",
      },
      {
        title2: "OUR MISSION",
        description2:
          "Our mission is two-fold: to be at the cutting-edge of innovation across Unmanned Aerial System applications, and to become a pioneer in the experiential entertainment industry through our drone light shows!",
        imgAbout: Img1,
      },
      {
        title3: "OUR VISION",
        description3:
          "We want to acquire a significant global presence in control systems, and harness indigenous tech to transform industries and inspire communities.",
        imgAbout1: Img1,
      },
    ],
    story: {
      title: "OUR STORY",
      txt: "This story starts with two young graduates, freshly out of IIT-D. Our CEO, Tanmay Bunkar, flew his first UAV in early 2012. That first take-off set us off on a flight path that culminated in the incorporation of an ambitious new venture called BotLab Dynamics at IIT’s Technology Business Incubator Unit in July 2016.\n\nOur first project was providing heavy-lift systems to the Indian Agricultural Research Institute (2016). In 2017, the company received its first funding, Nidhi-SSS (DST, Govt of India), an important shot in the arm for future research and development. It soon diversified into defense applications - being selected in 2017 by the Army Design Bureau to demo the heavy lift drone in Tawang, Arunachal Pradesh.\n\n2019 was a milestone year for us. We demonstrated our drone swarm technology at Manekshaw Bhawan with the then Chief of Defence Staff, General Bipin Rawat in attendance. Our big moment came when we were called upon to showcase our swarm technology with 10 drones at Pokhran for the Indian Air Force. On the biggest stage, in front of the biggest decision-makers of the nation, we failed. More accurately, those components we had imported from outside of India failed spectacularly. Amidst our heartbreak, a quiet determination took root. We resolved then to create our own resilient, homegrown tech that would thrive in the most challenging conditions. _ months later, we had built our own GPS, and had successfully tested and deployed it! We didn’t stop there. By 2020, we had developed our own FC, Simulator and ESC, reducing dependence on foreign imports and making a big stride towards being 100% indigenous!\n\nIn the coming year, we are charting international flight paths and connecting with more global communities. We are assured, audacious and ambitious. And why not? We align our own stars! ",
    },
  },
];

export default AboutUsData;
