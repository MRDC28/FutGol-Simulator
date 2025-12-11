import React from "react";
import { player } from "../data/player-system";

export default function AgeSystem() {
  function nextSeason() {
    player.age++;

    if (player.age === 34) {
      alert("Você pode se aposentar agora ou continuar até 38.");
    }

    if (player.age >= 38) {
      alert("Aposentadoria automática!");
    }
  }

  return (
    <div>
      <h2>📆 Temporada</h2>
      <button onClick={nextSeason}>Avançar 1 temporada</button>
    </div>
  );
}
