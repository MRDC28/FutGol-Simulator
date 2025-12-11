import React from "react";
import { player } from "../data/player-system";
import { leagues } from "../data/leagues";

export default function TransferSystem() {
  function proposeTransfer() {
    const leagueNames = Object.keys(leagues);
    const randomLeague = leagueNames[Math.floor(Math.random() * leagueNames.length)];
    const teams = leagues[randomLeague];

    const team = teams[Math.floor(Math.random() * teams.length)];

    const confirm = window.confirm(
      `Proposta de transferência:\nTime: ${team}\nLiga: ${randomLeague}\nAceitar?`
    );

    if (confirm) {
      player.league = randomLeague;
      player.team = team;
      alert("Transferência concluída!");
    }
  }

  return (
    <div>
      <h2>🔄 Transferências</h2>
      <button onClick={proposeTransfer}>Receber Proposta</button>
    </div>
  );
}
