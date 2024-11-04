import React, { useState } from 'react';

const Carousel: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        "/iphone.png",
        "/energiasolar2.jfif",
        "/docs/images/carousel/carousel-2.svg"
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <div className="max-w-lg flex justify-center bg-[#1E1E1E]">
            <div className="relative w-96 h-96">
                <div className="relative h-full overflow-hidden rounded-lg">
                    {slides.map((src, index) => (
                        <div key={index} className={`absolute w-full h-full transition-transform duration-700 ease-in-out ${currentSlide === index ? 'block' : 'hidden'}`}>
                            <img src={src} className="absolute block w-full h-full object-cover" alt={`Slide ${index + 1}`} />
                        </div>
                    ))}
                </div>
                {/* Slider controls */}
                <button type="button" className="absolute top-1/2 left-0 z-30 p-2 -translate-y-1/2" onClick={prevSlide}>
                    {/* Left arrow SVG */}
                </button>
                <button type="button" className="absolute top-1/2 right-0 z-30 p-2 -translate-y-1/2" onClick={nextSlide}>
                    {/* Right arrow SVG */}
                </button>
            </div>
        </div>
    );
};

export default Carousel;
