import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useState } from "react";

const Slider = ({ pictures }) => {
  const [slide, setSlide] = useState(0);
  const NextSlide = () => {
    setSlide(slide === pictures.length - 1 ? 0 : slide + 1);
  };
  const PrevSlide = () => {
    setSlide(slide === 0 ? pictures.length - 1 : slide - 1);
  };
  return (
    <div className="sheet-slider">
      <FaChevronLeft className={`arrow arrow-left ${pictures.length === 1 ? "inactive" : null}`} onClick={PrevSlide} />
      {pictures.map((picture, index) => {
        return <img key={`${index}`} src={picture} alt={`Présentation du logement ${index}`} className={slide === index ? "cover-image" : "cover-image--hidden"}></img>;
      })}
      <FaChevronRight className={`arrow arrow-right ${pictures.length === 1 ? "inactive" : null}`} onClick={NextSlide} />
      <p className={`active-slide ${pictures.length === 1 ? "inactive" : null}`}>
        {slide + 1}/{pictures.length}
      </p>
    </div>
  );
};

export default Slider;
