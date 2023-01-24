import {
  ReactCompareSlider,
  ReactCompareSliderImage,
  styleFitContainer,
} from "react-compare-slider";

import React from "react";
// import Antes from "../../assets/img/FrenosAntes.jpg";
// import Despues from "../../assets/img/FrenosDespues.jpg";
import Antes from "/assets/img/Antes.jpg";
import Despues from "/assets/img/Despues.jpg";

const SecCompara = () => {
  return (
    <section className="pt-32">
      <div>
        {/* aksjhdkjashdkjh */}
        <ReactCompareSlider
          itemOne={
            <ReactCompareSliderImage
              src={Antes}
              alt="Imagen 1"
              // style={styleFitContainer({
              //   objectFit: "contain",
              // })}
            />
          }
          itemTwo={
            <ReactCompareSliderImage
              src={Despues}
              alt="Imagen 2"
              // style={styleFitContainer({
              //   objectFit: "contain",
              // })}
            />
          }
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
