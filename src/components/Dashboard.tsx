import React from "react";
import { player } from "../data/player-system";

export default function Dashboard() {
  return (
    <div>
      <h2>📊 Estatísticas</h2>
      <p>Idade: {player.age}</p>
      <p>GER: {player.ger}</p>
      <p>Time: {player.team || "Nenhum"}</p>
      <p>Gols: {player.stats.goals}</p>
      <p>Assistências: {player.stats.assists}</p>
      <p>Média: {player.stats.ratingAvg.toFixed(2)}</p>
      <p>Cartões: {player.stats.yellow}A / {player.stats.red}V</p>
    </div>
  );
}
