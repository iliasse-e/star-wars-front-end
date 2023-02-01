import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import {Irebelle} from "../interfaces/irebelle";

@Injectable({
  providedIn: 'root'
})
export class RebelleService {
  private url: string = "http://localhost:8080/";
  private endpoint: string = "rebelles";

  constructor(private http: HttpClient) { }

  public getRebelles(): Observable<Irebelle[]> {
    return this.http.get<Irebelle[]>(this.url+this.endpoint);
  }

  public getRebelle(id: string): Observable<Irebelle> {
    return this.http.get<Irebelle>(this.url+this.endpoint+id);
  }

  public saveRebelle(rebelle: Irebelle): Observable<Irebelle|any> {
    console.log("données passé au service rebelle : " + rebelle);
    return this.http.post<any>(this.url+this.endpoint, rebelle);
  }

  public updateRebelle(id: string, rebelle: Irebelle): Observable<Irebelle|any> {
    return this.http.post<any>(this.url+this.endpoint+id, rebelle);
  }

  public deleteRebelle(id: string): Observable<boolean> {
    return this.http.delete<boolean>(this.url+this.endpoint+id);
  }


}
