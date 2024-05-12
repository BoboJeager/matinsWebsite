import type { MetaFunction, LinksFunction } from "@remix-run/node";
import { useState } from "react";
import { mockCharacters } from "~/mock/characters";
import Card from "~/components/card";
import CardCarousel from "~/components/cardCarousel";
import indexStyle from '~/styles/index.css?url';

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
    <div>
      <CardCarousel characters={mockCharacters}/>
    </div>
  );
}
