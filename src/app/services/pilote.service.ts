import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
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

  public getPilotesEnFormation(): Observable<IPilote[]> {
    return this.http.get<IPilote[]>(this.url+this.endpoint+"/en-formation");
  }

  public getPilotesAvailable(): Observable<IPilote[]> {
    return this.http.get<IPilote[]>(this.url+this.endpoint+"/available");
  }

  public getPilotesHasChasseur(): Observable<IPilote[]> {
    return this.http.get<IPilote[]>(this.url+this.endpoint+"/has-chasseur");
  }

  public getPilotesMissionReady(): Observable<IPilote[]> {
    return this.http.get<IPilote[]>(this.url+this.endpoint+"/mission-ready");
  }

  public getPilote(id: string): Observable<IPilote> {
    return this.http.get<IPilote>(this.url+this.endpoint+id);
  }

  public savePilote(pilote: IPilote): Observable<IPilote> {
    console.log("données passé au service pilote : " + pilote);
    return this.http.post<IPilote>(this.url+this.endpoint, pilote);
  }

  public updatePilote(id: string, pilote: IPilote): Observable<IPilote> {
    return this.http.post<IPilote>(this.url+this.endpoint+id, pilote);
  }

  public endFormation(id: string): Observable<boolean> {
    return this.http.post<boolean>(this.url+this.endpoint+"/end-formation/"+id, {});
  }

  public deletePilote(id: string): Observable<boolean> {
    return this.http.delete<boolean>(this.url+this.endpoint+"/delete/"+id);
  }

  public affect(piloteId: string, chasseurId: string): Observable<IPilote> {
    return this.http.put<IPilote>(this.url+this.endpoint+"/affect-chasseur/"+piloteId,{}, {
      params: new HttpParams().set("chasseurId", chasseurId)
    });
  }

  public desaffect(piloteId: string): Observable<IPilote|any> {
    return this.http.put<IPilote>(this.url+this.endpoint+"/desaffect-chasseur/"+piloteId, {});
  }
}
