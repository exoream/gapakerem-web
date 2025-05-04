import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Slide = ({ items, renderItem, itemsPerView = 2 }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const totalSlides = Math.ceil(items.length / itemsPerView);

    const nextSlide = () => {
        if (currentSlide < totalSlides - 1) {
            setCurrentSlide(currentSlide + 1);
        }
    };

    const prevSlide = () => {
        if (currentSlide > 0) {
            setCurrentSlide(currentSlide - 1);
        }
    };

    const getItemWidth = () => `calc((100% - ${(itemsPerView - 1) * 16}px) / ${itemsPerView})`;

    return (
        <div className="relative mt-10">
            {items.length > itemsPerView && (
                <>
                    <button
                        onClick={prevSlide}
                        disabled={currentSlide === 0}
                        className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 w-12 h-12 rounded-full bg-yellow-400 text-white ${currentSlide === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-yellow-500'
                            }`}
                        aria-label="Previous slide"
                    >
                        <FontAwesomeIcon icon={faChevronLeft} className="text-lg" />
                    </button>

                    <button
                        onClick={nextSlide}
                        disabled={currentSlide >= totalSlides - 1}
                        className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 w-12 h-12 rounded-full bg-yellow-400 text-white ${currentSlide >= totalSlides - 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-yellow-500'
                            }`}
                        aria-label="Next slide"
                    >
                        <FontAwesomeIcon icon={faChevronRight} className="text-lg" />
                    </button>
                </>
            )}

            <div className="overflow-hidden px-8">
                <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{
                        transform: `translateX(-${currentSlide * 100}%)`,
                        gap: '30px'
                    }}
                >
                    {items.map((item, index) => (
                        <div
                            key={`slide-${index}`}
                            style={{
                                flex: `0 0 ${getItemWidth()}`,
                                maxWidth: getItemWidth(),
                                minWidth: getItemWidth()
                            }}
                        >
                            {renderItem(item)}
                        </div>
                    ))}

                    {currentSlide === totalSlides - 1 && items.length % itemsPerView !== 0 &&
                        Array.from({ length: itemsPerView - (items.length % itemsPerView) }).map((_, i) => (
                            <div
                                key={`empty-${i}`}
                                style={{
                                    flex: `0 0 ${getItemWidth()}`,
                                    maxWidth: getItemWidth(),
                                    minWidth: getItemWidth(),
                                    visibility: 'hidden'
                                }}
                            />
                        ))
                    }
                </div>
            </div>

            {items.length > itemsPerView && (
                <div className="flex justify-center mt-4">
                    {Array.from({ length: totalSlides }).map((_, index) => (
                        <div
                            key={index}
                            className={`h-2 w-2 mx-1 rounded-full cursor-pointer ${currentSlide === index ? 'bg-yellow-400' : 'bg-gray-300'
                                }`}
                            onClick={() => setCurrentSlide(index)}
                            role="button"
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Slide;