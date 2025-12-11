import { leagues } from "./leagues";

export function getTeamsByLeague(league: string) {
  return leagues[league] || [];
}
