import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import {IRebelle} from "../interfaces/IRebelle";

@Injectable({
  providedIn: 'root'
})
export class RebelleServiceService {
  private url: string = "http://localhost:8080/";
  private endpoint: string = "rebelles";

  constructor(private http: HttpClient) { }

  public getRebelles(): Observable<any> {
    return this.http.get<any>(this.url+this.endpoint)
  }

  public saveRebelle(rebelle: IRebelle): Observable<any> {
    return this.http.post<any>(this.url+this.endpoint);
  }

  public endFormation(rebelle: IRebelle): Observable<any> {
    return this.http.post<any>(this.url+this.endpoint);
  }


}
