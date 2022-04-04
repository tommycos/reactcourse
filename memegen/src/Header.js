import React from "react";
import troll from "./Images/troll.png";

export default function Header() {
  return (
    <header className="header--bar">
      <section className="header--left">
        <img src={troll} alt="trollface" className="troll--image" />
        <h1>Meme Generator</h1>
      </section>
      <h2>React Course - Project 3</h2>
    </header>
  );
}
