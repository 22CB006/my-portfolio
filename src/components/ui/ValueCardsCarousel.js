import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ValueCardsCarousel = ({ cards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % cards.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  const getCardIndex = (cardIdx) => {
    const diff = (cardIdx - currentIndex + cards.length) % cards.length;
    return diff;
  };

  return (
    <div className="value-carousel-container">
      <div className="value-cards-stack">
        {cards.map((card, idx) => {
          const displayIndex = getCardIndex(idx);
          return (
            <div
              key={idx}
              className="value-card"
              data-index={displayIndex}
              style={{
                display: displayIndex > 3 ? 'none' : 'block'
              }}
            >
              <div className="value-card__content">
                <h3 className="value-card__title">{card.title}</h3>
                <p className="value-card__description">{card.description}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="value-carousel-controls">
        <button
          onClick={handlePrevious}
          className="carousel-btn carousel-btn-prev"
          aria-label="Previous card"
        >
          <ChevronLeft size={24} />
        </button>

        <div className="carousel-indicators">
          {cards.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`carousel-indicator ${idx === currentIndex ? 'active' : ''}`}
              aria-label={`Go to card ${idx + 1}`}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          className="carousel-btn carousel-btn-next"
          aria-label="Next card"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default ValueCardsCarousel;
