import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IChasseur} from "../interfaces/ichasseur";

@Injectable({
  providedIn: 'root'
})
export class ChasseurService {

  private url: string = "http://localhost:8080/";
  private endpoint: string = "chasseurs";

  constructor(private http: HttpClient) { }

  public getChasseurs(): Observable<IChasseur[]> {
    return this.http.get<IChasseur[]>(this.url+this.endpoint);
  }

  public getChasseur(id: string): Observable<IChasseur> {
    return this.http.get<IChasseur>(this.url+this.endpoint+id);
  }

  public saveChasseur(chasseur: IChasseur): Observable<IChasseur|any> {
    console.log("données passé au service chasseur : " + chasseur);
    return this.http.post<any>(this.url+this.endpoint, chasseur);
  }

  public updateChasseur(id: string, chasseur: IChasseur): Observable<IChasseur|any> {
    return this.http.post<any>(this.url+this.endpoint+id, chasseur);
  }

  public deleteChasseur(id: string): Observable<boolean> {
    return this.http.delete<boolean>(this.url+this.endpoint+id);
  }

}
