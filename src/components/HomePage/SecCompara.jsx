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
  styleFitContainer,
} from "react-compare-slider";

import React from "react";
// import Antes from "../../assets/img/FrenosAntes.jpg";
// import Despues from "../../assets/img/FrenosDespues.jpg";
import Antes from "../../assets/img/Antes.jpg";
import Despues from "../../assets/img/Despues.jpg";

const SecCompara = () => {
  return (
    <section className="pt-32">
      <div style={{ width: "100vw", height: "80vh" }}>
        {/* aksjhdkjashdkjh */}
        <ReactCompareSlider
          itemOne={
            <ReactCompareSliderImage src={Antes} alt="Imagen 1" height={80} />
          }
          itemTwo={<ReactCompareSliderImage src={Despues} alt="Imagen 2" />}
          style={styleFitContainer({
            objectFit: "contain",
            objectPosition: "center",
          })}
        />
      </div>
    </section>
  );
};

export default SecCompara;
