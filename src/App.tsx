import React from "react";
import MatchEngine from "./components/MatchEngine";
import TransferSystem from "./components/TransferSystem";
import Dashboard from "./components/Dashboard";
import AgeSystem from "./components/AgeSystem";

export default function App() {
  return (
    <div style={{ padding: 20 }}>
      <h1>⚽ FutGol Simulator</h1>

      <AgeSystem />
      <Dashboard />
      <TransferSystem />
      <MatchEngine />
    </div>
  );
}
import ContractSystem from "./components/ContractSystem"
<ContractSystem />
import NationalTeam from "./components/NationalTeam";
<NationalTeam player={player} />
