import React, { useState } from "react";
import { Character } from "~/types/character";
import Card from "./card";
import "~/styles/cardCarousel.css";

interface CardCarouselProps {
    characters: Character[];
}

const CardCarousel = ({ characters }: CardCarouselProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const totalItems = characters.length;

    const handleNext = () => {
        if (!isAnimating) {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
            setIsAnimating(true);
        }
    };

    const handlePrevious = () => {
        if (!isAnimating) {
            setCurrentIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems);
            setIsAnimating(true);
        }
    };

    const handleAnimationEnd = () => {
        setIsAnimating(false);
    };

    const getItemStyle = (index: number) => {
        let position = (index - currentIndex + totalItems) % totalItems;
        let xOffset = (position - 1) * 80;
        let scale = position === 1 ? 1 : 0.7;
        let visibility = (position >= -1 && position <= 2) ? 1 : 0;

        if (position === -1 || position === totalItems - 1) { // Adjust for the position just before the first
            xOffset = -50;
        }
        if (position === 3) {
            xOffset = 150;
        }

        return {
            transform: `translateX(${xOffset}%) scale(${scale})`,
            transition: 'transform 0.5s ease-in-out, opacity 0.5s ease-in-out',
            width: '33.33%', // Each item takes about one-third of the carousel width
            opacity: visibility // Manage visibility through opacity
        };
    };

    return (
        <div className="carousel-container">
            <div className="carousel">
                {characters.map((character, index) => (
                    <div 
                        key={character.name} 
                        className="carousel-item" 
                        style={getItemStyle(index)}
                        onTransitionEnd={handleAnimationEnd} // Handle transition end event
                    >
                        <Card character={character} />
                    </div>
                ))}
            </div>
            <div className="button-container">
                <button onClick={handlePrevious} className="carousel-button" disabled={isAnimating}>&lt;</button>
                <span>{currentIndex + 1}/{characters.length}</span>
                <button onClick={handleNext} className="carousel-button" disabled={isAnimating}>&gt;</button>
            </div>
        </div>
    );
};

export default CardCarousel;

