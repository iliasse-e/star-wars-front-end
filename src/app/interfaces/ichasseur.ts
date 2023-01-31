import {IPilote} from "./ipilote";
import {ChasseurType} from "../enums/chasseur-type";
import {ChasseurEtat} from "../enums/chasseur-etat";

export interface IChasseur {
  nom: string,
  typeChasseur: ChasseurType,
  etatChasseur: ChasseurEtat,
  pilote?: IPilote

}
