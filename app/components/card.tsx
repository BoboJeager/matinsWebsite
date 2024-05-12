import { Character } from "~/types/character";
import Pic from "~/assets/476D99FF.png";
import "~/styles/card.css";

const Card = ({ character }: { character: Character }) =>{
    if (!character || !character.stats) {
        return null; 
    }

    const backgroundColor = character.colors[0];
    const borderColor = character.colors[1];

    return(
        <div>
        <div className ="card">
            <img src = {Pic} />
            <div className="card-container" style={{borderColor: borderColor, boxShadow: `0px 0px 15px ${borderColor}` }}>
                <div className="character-name" style={{backgroundColor: backgroundColor, borderColor:borderColor, }}>
                    <span>{character.name}</span>
                </div>
                <div className="character-class" style={{backgroundColor: backgroundColor, borderColor:borderColor}}>
                    <span>{character.class}</span>
                </div>
                    <ul>
                       {character.stats.map((stat, index) => (
                        <li key={index} style={{color: borderColor}}>
                            <span>{stat.abilities}</span>
                            <h4>{stat.val}</h4>
                            <span>{stat.mod}</span>
                        </li>
                       ))}
                    </ul>
                <div className ="lore-box">
                    <p> Ideals : </p>
                    <span style={{backgroundColor: backgroundColor, borderColor:borderColor}}>{character.ideals}</span>
                </div>
                <div className ="lore-box">
                    <p> Bonds : </p>
                    <span style={{backgroundColor: backgroundColor, borderColor:borderColor}}>{character.bonds}</span>
                </div>
                <div className ="lore-box">
                    <p> Flaws : </p>
                    <span style={{backgroundColor: backgroundColor, borderColor:borderColor}}>{character.flaws}</span>
                </div>
                </div>
        </div>
        </div>
    )
}

export default Card