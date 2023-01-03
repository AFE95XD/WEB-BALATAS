// import React, { useState, useEffect } from "react";

// const SecCompara = ({ beforeImage, afterImage }) => {
//   const [sliderValue, setSliderValue] = useState(50);
//   const [beforeImageStyle, setBeforeImageStyle] = useState({});
//   const [afterImageStyle, setAfterImageStyle] = useState({});

//   useEffect(() => {
//     setBeforeImageStyle({
//       width: `${sliderValue}%`,
//       position: "absolute",
//       left: 0,
//     });

//     setAfterImageStyle({
//       width: `${100 - sliderValue}%`,
//       position: "absolute",
//       right: 0,
//     });
//   }, [sliderValue]);

//   const handleSliderChange = (event) => {
//     setSliderValue(event.target.value);
//   };

//   return (
//     <div className="relative w-full border-2">
//       <img
//         src={beforeImage}
//         alt="Before"
//         style={beforeImageStyle}
//         className="w-full"
//       />
//       <img
//         src={afterImage}
//         alt="After"
//         style={afterImageStyle}
//         className="w-full"
//       />
//       <input
//         type="range"
//         min={0}
//         max={100}
//         value={sliderValue}
//         onChange={handleSliderChange}
//         className="w-full z-50"
//       />
//     </div>
//   );
// };

// export default SecCompara;
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

import React from "react";

const SecCompara = () => {
  return (
    <section className="py-32">
      <ReactCompareSlider
        itemOne={
          <ReactCompareSliderImage
            src="https://demo.themexbd.com/html/hackery/assets/images/before.jpg"
            alt="Imagen 1"
          />
          //     <span className="bg-red-600 text-white">Antes</span>
          //   </ReactCompareSliderImage>
        }
        itemTwo={
          <ReactCompareSliderImage
            src="https://demo.themexbd.com/html/hackery/assets/images/after.jpg"
            alt="Imagen 2"
          />
          //     <span className="bg-red-600 text-white">Despues</span>
          //   </ReactCompareSliderImage>
        }
      />
    </section>
  );
};

export default SecCompara;
