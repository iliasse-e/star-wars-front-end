import {IPilote} from "./ipilote";

export interface IMission {
  nom: string,
  pilotes?: IPilote[],
  nbHeureMission?: number,
  estComplete?: boolean
}
