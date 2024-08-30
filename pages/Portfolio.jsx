import React from "react";
import LightGallery from "lightgallery/react";
import Image from "next/image";
import { useRef, useState, useCallback, useEffect } from "react";
import "../app/style/gallery.css"

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

// If you want you can use SCSS instead of css
import "lightgallery/scss/lightgallery.scss";
import "lightgallery/scss/lg-zoom.scss";

// import plugins if you need

import lgZoom from "lightgallery/plugins/zoom";
import lgVideo from "lightgallery/plugins/video";

const Portfolio = () => {
  const lightGallery = useRef(null);
  const [items, setItems] = useState([
    {
      id: "1",
      size: "1100-433",
      src: "https://botlab-website.s3.us-west-2.amazonaws.com/Rectangle+261.png",
      thumb:
        "https://botlab-website.s3.us-west-2.amazonaws.com/Rectangle+261.png",
      subHtml: `<div class="lightGallery-captions">
                    <h4>Photo by <a href="https://botlab-website.s3.us-west-2.amazonaws.com/Rectangle+261.png">Dan</a></h4>
                    <p>Published on November 13, 2018</p>
                </div>`,
    },

    {
      id: "2",
      src: "https://botlab-website.s3.us-west-2.amazonaws.com/Rectangle+260.png",
      thumb:
        "https://botlab-website.s3.us-west-2.amazonaws.com/Rectangle+260.png",
      subHtml: `<div class="lightGallery-captions">
                    <h4>Photo by <a href="https://botlab-website.s3.us-west-2.amazonaws.com/Rectangle+260.png">Kyle Peyton</a></h4>
                    <p>Published on September 14, 2016</p>
                </div>`,
    },
    {
      id: "3",
      src: "https://botlab-website.s3.us-west-2.amazonaws.com/Rectangle+259.png",
      thumb:
        "https://botlab-website.s3.us-west-2.amazonaws.com/Rectangle+259.png",
      subHtml: `<div class="lightGallery-captions">
                    <h4>Photo by <a href="https://botlab-website.s3.us-west-2.amazonaws.com/Rectangle+259.png">Garrett Jackson</a></h4>
                    <p>Published on May 8, 2020</p>
                </div>`,
    },
  ]);

  const onInit = useCallback((detail) => {
    if (detail) {
      lightGallery.current = detail.instance;
    }
  }, []);

  const getItems = useCallback(() => {
    return items.map((item) => {
      return (

        <div className="flex">
          
            {item.id !=3 && (
          
                <img
                  style={{ maxWidth: "290px" }}
                  src={item.thumb}
                  
                />
            )}


            <div>
            {item.id == 3 && (
              <div className="">
                <img
                  style={{ maxWidth: "480px" }}
                  src={item.thumb}
                  width={600}
                />
                
              </div>
            )}
            </div>
        
        
        
        <a
          key={item.id}
          data-lg-size={item.size}
          className="gallery-item  bg-green-400"
          data-src={item.src}
        >
          <div className="flex">
            {/* <div className="w-200">
            {item.id !=3 && (
              <div >
                <img
                  style={{ maxWidth: "290px" }}
                  className="img-responsive"
                  src={item.thumb}
                  
                />
              </div>
            )}

            </div> */}
            <div className="">

            {/* {item.id == 3 && (
              <div className="">
                <img
                  style={{ maxWidth: "480px" }}
                  className="img-responsive"
                  src={item.thumb}
                  width={600}
                />
                
              </div>
            )} */}
            </div>
          </div>
        </a>
        </div>
        
      );
    });
  }, [items]);

  // useEffect(() => {
  //   lightGallery.current.refresh();
  // }, [items]);

  return (
    <div className="border-2	bg-blend-darken">
      {/* <LightGallery
        plugins={[lgVideo, lgZoom]}
        onInit={onInit}
        elementClassNames="flex"
        
      >
        <div className="flex">

        {getItems()}
        </div>
      </LightGallery> */}

<LightGallery plugins={[lgZoom, lgVideo]} mode="lg-fade" elementClassNames="container">

          <a
            data-lg-size="1406-1390"
            className="gallery-item card1"
            data-src="https://botlab-website.s3.us-west-2.amazonaws.com/Rectangle+261.png"
            data-sub-html="<h4>Photo by - <a href='https://botlab-website.s3.us-west-2.amazonaws.com/Rectangle+261.png' >Diego Guzmán </a></h4> <p> Location - <a href='https://unsplash.com/s/photos/fushimi-inari-taisha-shrine-senbontorii%2C-68%E7%95%AA%E5%9C%B0-fukakusa-yabunouchicho%2C-fushimi-ward%2C-kyoto%2C-japan'>Fushimi Ward, Kyoto, Japan</a></p>"
          >
            <img
              className="img-responsive"
              src="https://botlab-website.s3.us-west-2.amazonaws.com/Rectangle+261.png"
              width={400}
              height="55%"
            />
          </a>
          <a
            data-lg-size="800-900"
            className="gallery-item card2"
            data-src="https://botlab-website.s3.us-west-2.amazonaws.com/Rectangle+259.png"
            data-sub-html="<h4>Photo by - <a href='https://botlab-website.s3.us-west-2.amazonaws.com/Rectangle+259.png' >Katherine Gu </a></h4><p> For all those years we were alone and helpless.</p>"
          >
            <img
              className="mt-4 ml-30"
              src="https://botlab-website.s3.us-west-2.amazonaws.com/Rectangle+259.png"
              width={600}
              height={498}
            />
          </a>
          <a
            data-lg-size="1400-1400"
            data-pinterest-text="Shinimamiya, Osaka, Japan"
            data-tweet-text="Shinimamiya, Osaka, Japan"
            className="gallery-item"
            data-src="https://botlab-website.s3.us-west-2.amazonaws.com/Rectangle+260.png"
            data-sub-html="<h4>Photo by - <a href='https://botlab-website.s3.us-west-2.amazonaws.com/Rectangle+260.png' >Shah </a></h4><p> Location - <a href='https://botlab-website.s3.us-west-2.amazonaws.com/Rectangle+260.png>Shinimamiya, Osaka, Japan</a></p>"
          >
            <img
              className="img-responsive card3"
              src="https://botlab-website.s3.us-west-2.amazonaws.com/Rectangle+260.png"
               width={400}
              height="55%"

            />
          </a>
        </LightGallery>
    </div>
  );
};

export default Portfolio;
