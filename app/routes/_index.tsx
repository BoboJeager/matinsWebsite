import type { MetaFunction, LinksFunction } from "@remix-run/node";
import { useState } from "react";
import { mockCharacters } from "~/mock/characters";
import CardCarousel from "~/components/cardCarousel";
import indexStyle from '~/styles/index.css?url';
import BriefIntro from "~/components/briefIntroduction";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

// Here we define the links function to include the CSS
export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: indexStyle }];
};

export default function Index() {

  return (
    <div className="homepage">
      <div className="carousel-component">
        <CardCarousel characters={mockCharacters}/>
      </div>
      <div className="brief-component">
        <BriefIntro/>
      </div>
    </div>
  );
}
