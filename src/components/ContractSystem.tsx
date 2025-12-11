import React from "react";
import { player } from "../data/player-system";

export default function ContractSystem() {
  function generateContract() {
    // Gera contrato baseado no GER
    const salary = player.ger * 10000;  
    const years = Math.floor(Math.random() * 3) + 2; // 2 a 4 anos
    const release = player.ger * 1000000; // cláusula

    player.contract = {
      salary,
      years,
      releaseClause: release,
      active: true
    };

    alert(
      `📄 Novo contrato assinado!
Salário: R$ ${salary.toLocaleString()}
Duração: ${years} anos
Cláusula de rescisão: R$ ${release.toLocaleString()}`
    );
  }

  function nextSeasonContract() {
    if (!player.contract.active) return;

    player.contract.years--;

    if (player.contract.years <= 0) {
      player.contract.active = false;

      const renew = confirm(
        `Seu contrato acabou!\n\nDeseja renovar com ${player.team}?`
      );

      if (renew) {
        generateContract();
      } else {
        alert("Você agora está sem clube. Aguarde propostas.");
      }
    }
  }

  return (
    <div>
      <h2>📄 Contrato</h2>

      {player.contract.active ? (
        <>
          <p>Salário: R$ {player.contract.salary.toLocaleString()}</p>
          <p>Duração restante: {player.contract.years} ano(s)</p>
          <p>Cláusula: R$ {player.contract.releaseClause.toLocaleString()}</p>
        </>
      ) : (
        <p>Sem contrato ativo.</p>
      )}

      <button onClick={generateContract}>Assinar novo contrato</button>
      <br /><br />
      <button onClick={nextSeasonContract}>Avançar contrato (1 ano)</button>
    </div>
  );
}
