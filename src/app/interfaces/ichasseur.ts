import {IPilote} from "./ipilote";
import {ChasseurType} from "../enums/chasseur-type";
import {ChasseurEtat} from "../enums/chasseur-etat";

export interface IChasseur {
  name: string,
  typeChasseur: ChasseurType,
  etatChasseur?: ChasseurEtat,
  pilote?: IPilote

}
