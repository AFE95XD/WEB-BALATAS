import React from "react";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const Hero = () => {
  return (
    <div>
      {/* <Splide aria-label="Imagenes Slider">
        <SplideSlide>
          <img
            src="https://demo.themexbd.com/html/hackery/assets/images/hackery-slider1.jpg"
            alt="Imagen 1"
          />
        </SplideSlide>
        <SplideSlide>
          <img
            src="https://demo.themexbd.com/html/hackery/assets/images/hackery-slider2.jpg"
            alt="Imagen 2"
          />
        </SplideSlide>
      </Splide> */}
      <Splide hasTrack={false} aria-label="My Favorite Images">
        <SplideTrack>
          <SplideSlide>
            <img
              src="https://demo.themexbd.com/html/hackery/assets/images/hackery-slider1.jpg"
              alt="Image 1"
            />
          </SplideSlide>
          <SplideSlide>
            <img
              src="https://demo.themexbd.com/html/hackery/assets/images/hackery-slider2.jpg"
              alt="Image 2"
            />
          </SplideSlide>
        </SplideTrack>
        <div className="splide__arrows">
          <button className="splide__arrow splide__arrow--prev bg-red-600"></button>
          <button className="splide__arrow splide__arrow--next bg-red-600"></button>
        </div>
        {/* <SplideTrack>
          <SplideSlide>
            <img
              src="https://demo.themexbd.com/html/hackery/assets/images/hackery-slider1.jpg"
              alt="Image 1"
            />
          </SplideSlide>
          <SplideSlide>
            <img
              src="https://demo.themexbd.com/html/hackery/assets/images/hackery-slider2.jpg"
              alt="Image 2"
            />
          </SplideSlide>
          <SplideSlide>
            <img
              src="https://demo.themexbd.com/html/hackery/assets/images/hackery-slider1.jpg"
              alt="Image 3"
            />
          </SplideSlide>
        </SplideTrack> */}
        {/* <div className="bg-red-500" /> */}
      </Splide>
    </div>
  );
};

export default Hero;
