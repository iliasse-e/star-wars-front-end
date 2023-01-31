import {IChasseur} from "./ichasseur";
import {IMission} from "./imission";
import {Grade} from "../enums/grade";
import {Sante} from "../enums/sante";

export interface IPilote {
  id: string,
  nom: string,
  prenom: string,
  race: any,
  age: number,
  grade: Grade,
  heureDeVol: number,
  sante: Sante,
  chasseur: IChasseur,
  missionActuelle: IMission,
}
