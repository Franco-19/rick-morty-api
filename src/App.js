import React from "react";
import "./style.css";

import CharactersList from './components/CharactersList'

export default function App() {
  return (
    <div>
      <h1>Rick and morty API</h1>
      <CharactersList />
    </div>
  );
}
