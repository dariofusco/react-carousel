import { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Carousel = ({ image, title }) => {

    const [activeIndex, setActiveIndex] = useState(0);

    const nextSlide = () => {
        setActiveIndex((activeIndex) =>
            activeIndex === image.length - 1 ? 0 : activeIndex + 1
        );
    };

    const prevSlide = () => {
        setActiveIndex((activeIndex) =>
            activeIndex === 0 ? image.length - 1 : activeIndex - 1
        );
    };

    return (
        <div className="carousel">

            <button onClick={prevSlide} className="btn btn-prev">
                <FaArrowLeft />
            </button>

            <img
                src={image[activeIndex]}
                alt=""
            />

            <h3>{title[activeIndex]}</h3>

            <button onClick={nextSlide} className="btn btn-next">
                <FaArrowRight />
            </button>

        </div>
    );
};

export default Carousel;