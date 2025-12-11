import React from "react";
import { player } from "../data/player-system";

export default function MatchEngine() {
  function playMatch() {
    const rating = Math.round(Math.random() * 5 + 5); // 5 a 10
    const goals = Math.random() > 0.75 ? 1 : 0;
    const assists = Math.random() > 0.80 ? 1 : 0;
    const yellow = Math.random() > 0.90 ? 1 : 0;
    const red = Math.random() > 0.98 ? 1 : 0;

    player.stats.matches++;
    player.stats.goals += goals;
    player.stats.assists += assists;
    player.stats.yellow += yellow;
    player.stats.red += red;

    player.stats.ratingAvg =
      (player.stats.ratingAvg + rating) / player.stats.matches;

    alert(`Partida finalizada!
Nota: ${rating}
Gols: ${goals}
Assistências: ${assists}
Cartões: ${yellow}A / ${red}V`);
  }

  return (
    <div>
      <h2>🎮 Partida</h2>
      <button onClick={playMatch}>Jogar partida</button>
    </div>
  );
}
