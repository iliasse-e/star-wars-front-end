import {IChasseur} from "./ichasseur";
import {IMission} from "./imission";
import {Grade} from "../enums/grade";
import {Sante} from "../enums/sante";

export interface IPilote {
  id: string,
  nom: string,
  race: any,
  age: number,
  grade?: Grade,
  heureDeVol?: number,
  enFormation?: boolean,
  sante?: Sante,
  chasseur?: IChasseur,
  missionActuelle?: IMission,
  inMission: boolean
}
