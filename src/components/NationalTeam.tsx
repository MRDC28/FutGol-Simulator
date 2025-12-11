import React from "react";
import { player } from "../data/player-system";

export default function NationalTeam() {
  function tryCallUp() {
    if (!player.country) {
      alert("Defina o país de origem do jogador primeiro!");
      return;
    }

    // Chance baseada no GER
    const chance = player.ger + Math.random() * 40;

    if (chance > 80) {
      player.nationalTeam.selected = true;
      player.nationalTeam.country = player.country;

      alert(
        `🇺🇳 CONVOCADO PARA A SELEÇÃO!\n` +
          `Seleção: ${player.country}\n` +
          `Você está na próxima Data FIFA!`
      );
    } else {
      alert("Você não foi convocado desta vez.");
    }
  }

  function playNationalMatch() {
    if (!player.nationalTeam.selected) {
      alert("Você não está convocado no momento.");
      return;
    }

    const rating = Math.round(Math.random() * 4 + 6); // 6 a 10
    const goals = Math.random() > 0.85 ? 1 : 0;

    player.nationalTeam.caps++;
    player.nationalTeam.goals += goals;

    alert(
      `🇺🇳 Partida pela Seleção Finalizada!\n\n` +
        `Nota: ${rating}\n` +
        `Gols: ${goals}\n` +
        `Total pela Seleção: ${player.nationalTeam.goals}\n` +
        `Partidas pela Seleção: ${player.nationalTeam.caps}`
    );
  }

  return (
    <div>
      <h2>🇺🇳 Seleção Nacional</h2>

      {player.nationalTeam.selected ? (
        <p>Status: Convocado</p>
      ) : (
        <p>Status: Não convocado</p>
      )}

      <p>País: {player.country || "Nenhum"}</p>
      <p>Jogos pela Seleção: {player.nationalTeam.caps}</p>
      <p>Gols pela Seleção: {player.nationalTeam.goals}</p>

      <button onClick={tryCallUp}>📢 Tentar Convocação</button>
      <br /><br />
      <button onClick={playNationalMatch}>🏆 Jogar Partida da Seleção</button>
    </div>
  );
}
