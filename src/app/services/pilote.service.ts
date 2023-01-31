import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IMission} from "../interfaces/imission";
import {IPilote} from "../interfaces/ipilote";

@Injectable({
  providedIn: 'root'
})
export class PiloteService {
  private url: string = "http://localhost:8080/";
  private endpoint: string = "pilotes";

  constructor(private http: HttpClient) { }

  public getPilotes(): Observable<IPilote[]> {
    return this.http.get<IPilote[]>(this.url+this.endpoint);
  }

  public getPilote(id: string): Observable<IPilote> {
    return this.http.get<IPilote>(this.url+this.endpoint+id);
  }

  public savePilote(pilote: IPilote): Observable<IPilote|any> {
    console.log("données passé au service pilote : " + pilote);
    return this.http.post<any>(this.url+this.endpoint, pilote);
  }

  public updatePilote(id: string, pilote: IPilote): Observable<IPilote|any> {
    return this.http.post<any>(this.url+this.endpoint+id, pilote);
  }

  public deletePilote(id: string): Observable<boolean> {
    return this.http.delete<boolean>(this.url+this.endpoint+id);
  }
}
