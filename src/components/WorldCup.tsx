import React, { useState } from "react";
import { player } from "../data/player-system";

/**
 * WorldCup.tsx
 * - 16 seleções (padrão)
 * - 4 grupos de 4 seleções
 * - fase de grupos (todos contra todos)
 * - oitavas/quartas/semis/final (mata-mata)
 * - atualiza player.nationalTeam.caps / goals / ger
 * - aplica bônus de campeão (ger +7) e marca 'lenda' no player
 */

type TeamStat = {
  name: string;
  pts: number;
  gf: number;
  ga: number;
  gd: number;
};

type MatchResult = {
  a: string;
  b: string;
  ga: number;
  gb: number;
  winner?: string | "draw";
};

const DEFAULT_TEAMS = [
  "Brasil","Espanha","Inglaterra","Alemanha",
  "Argentina","França","Portugal","Itália",
  "Holanda","Bélgica","Uruguai","México",
  "Japão","Coreia do Sul","Estados Unidos","Colômbia"
];

function randInt(min:number, max:number){ return Math.floor(Math.random()*(max-min+1))+min; }
function chance(p:number){ return Math.random() < p; }

export default function WorldCup(){
  const [teams] = useState<string[]>(DEFAULT_TEAMS);
  const [stage, setStage] = useState<string | null>(null);
  const [log, setLog] = useState<string[]>([]);
  const [champion, setChampion] = useState<string | null>(null);
  const [tournamentPlayed, setTournamentPlayed] = useState(false);

  function addLog(line: string){
    setLog(l => [line, ...l].slice(0, 200));
  }

  function createGroups(list:string[]){
    // shuffle
    const arr = [...list];
    for(let i=arr.length-1;i>0;i--){
      const j = randInt(0,i);
      [arr[i],arr[j]] = [arr[j],arr[i]];
    }
    const groups = [];
    for(let g=0;g<4;g++){
      groups.push(arr.slice(g*4,(g+1)*4));
    }
    return groups; // array of 4 arrays
  }

  function simulateMatch(a:string,b:string){
    // Basic strength: base + small variation
    const baseA = 50 + (a === player.nationalTeam.country && a === player.nationalTeam.country ? 0 : 0);
    const baseB = 50;
    // Decide goals by Poisson-ish random based on small modifier
    const ga = Math.max(0, randInt(0,
