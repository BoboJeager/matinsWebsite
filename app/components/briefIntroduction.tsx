import React, { useEffect } from "react";
import "~/styles/briefIntro.css";

const BriefIntro: React.FC = () => {
  useEffect(() => {
    const introBox = document.querySelector(".intro-box");
    if (introBox) {
      const introElements = introBox.children;
      Array.from(introElements).forEach((element, index) => {
        (element as HTMLElement).style.animationDelay = `${0.5 + index * 0.5}s`;
      });
    }
  }, []);

  return (
    <div className="intro-parent">
      <div className="intro-box">
        <h1>Vault of My Characters and Stories for D&D</h1>
        <span>
          Welcome to my Vault of Characters and Stories for Dungeons & Dragons!
          Dive into a rich collection of unique characters, each with their own
          backstory, strengths, and flaws, ready to embark on epic adventures.
          Discover captivating tales and legendary quests, crafted to inspire
          and enhance your D&D campaigns. Whether you're a seasoned Dungeon
          Master or a new player, explore this vault to find inspiration and
          bring your tabletop games to life. Join me on this journey through
          fantastical realms filled with heroes, villains, and unforgettable
          narratives.
        </span>
      </div>
    </div>
  );
};

export default BriefIntro;
