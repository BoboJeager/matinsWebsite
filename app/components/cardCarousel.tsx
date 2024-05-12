import React, { useState } from "react";
import { Character } from "~/types/character";
import Card from "./card";
import "~/styles/cardCarousel.css";

interface CardCarouselProps {
    characters: Character[];
}

const CardCarousel = ({ characters }: CardCarouselProps) => {
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const totalItems = characters.length;

    const handleScroll = (direction: 'left' | 'right') => {
        setActiveIndex(prevIndex => {
            return direction === 'left'
                ? (prevIndex - 1 + totalItems) % totalItems
                : (prevIndex + 1) % totalItems;
        });
    };

    const getItemStyle = (index: number) => {
        const offset = (index - activeIndex + totalItems) % totalItems;
        const positionFromMiddle = Math.abs(offset - Math.floor(totalItems / 2));
        const scale = positionFromMiddle === 0 ? 1.2 : 1 - 0.1 * positionFromMiddle;
        return {
            transform: `scale(${scale})`,
            opacity: 1 - 0.3 * positionFromMiddle,
            transition: 'transform 0.5s, opacity 0.5s',
            display: positionFromMiddle <= 2 ? 'block' : 'none' // Adjust this to increase/decrease visible cards
        };
    };

    return (
        <div className="carousel">
            <button onClick={() => handleScroll('left')} className="carousel-control-prev">&#10094;</button>
            <div className="carousel-track">
                {characters.map((character, index) => (
                    <div className="carousel-item" style={getItemStyle(index)} key={character.name}>
                        <Card character={character} />
                    </div>
                ))}
            </div>
            <button onClick={() => handleScroll('right')} className="carousel-control-next">&#10095;</button>
        </div>
    );
};

export default CardCarousel;
