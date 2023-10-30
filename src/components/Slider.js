import React, { useState } from 'react';
import '../styles/slider.scss';
import next from '../assets/arrow_forward_ios-24px 1.png';
import prev from '../assets/arrow_back_ios-24px 1.png';

function Slider({ pictures, alt }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % pictures.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + pictures.length) % pictures.length);
    };

    return (
        <div className="slider-container">
            {pictures.length > 1 && (
                <>
                    <img className="arrow prev" src={prev} alt="Précédent" onClick={handlePrev} />
                    <img className="arrow next" src={next} alt="Suivant" onClick={handleNext} />
                </>
            )}

            {pictures.map((pictureSrc, index) => (
                <img
                    key={index}
                    src={pictureSrc}
                    alt={alt}
                    style={{ display: index === currentIndex ? 'block' : 'none' }}
                />
            ))}

            {pictures.length > 1 && <p>{`${currentIndex + 1} / ${pictures.length}`}</p>}
        </div>
    );
}

export default Slider;
