import React, { useState } from "react";
import { Character } from "~/types/character";
import Card from "./card";
import "~/styles/cardCarousel.css";

interface CardCarouselProps {
    characters: Character[];
}

const CardCarousel = ({ characters }: CardCarouselProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalItems = characters.length;

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
    };

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems);
    };

    const getItemStyle = (index: number) => {
        let position = (index - currentIndex + totalItems) % totalItems;
        let xOffset = (position - 1) * 50;  
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
        <div className="button-container">
            <button onClick={handlePrevious} className="carousel-button">Previous</button>
            <button onClick={handleNext} className="carousel-button">Next</button>
        </div>
        <div className="carousel">
            {characters.map((character, index) => (
                <div key={character.name} className="carousel-item" style={getItemStyle(index)}>
                    <Card character={character} />
                </div>
            ))}
        </div>
    </div>
    );
};

export default CardCarousel;
