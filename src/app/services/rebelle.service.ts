import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import {IRebelle} from "../interfaces/IRebelle";

@Injectable({
  providedIn: 'root'
})
export class RebelleService {
  private url: string = "http://localhost:8080/";
  private endpoint: string = "rebelles";

  constructor(private http: HttpClient) { }

  public getRebelles(): Observable<IRebelle[]> {
    return this.http.get<IRebelle[]>(this.url+this.endpoint);
  }

  public getRebelle(id: string): Observable<IRebelle> {
    return this.http.get<IRebelle>(this.url+this.endpoint+id);
  }

  public saveRebelle(rebelle: IRebelle): Observable<IRebelle|any> {
    console.log("données passé au service rebelle : " + rebelle.nom);
    return this.http.post<any>(this.url+this.endpoint, rebelle);
  }

  public updateRebelle(id: string, rebelle: IRebelle): Observable<IRebelle|any> {
    return this.http.post<any>(this.url+this.endpoint+id, rebelle);
  }

  public deleteRebelle(id: string): Observable<boolean> {
    return this.http.delete<boolean>(this.url+this.endpoint+id);
  }


}
