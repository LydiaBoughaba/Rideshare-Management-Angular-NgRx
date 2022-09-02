import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { offres } from "../model/model.offres";

@Injectable({ providedIn: 'root' })
export class offresService {
  constructor(private http: HttpClient) {}

  getAllOffres(): Observable<offres[]> {
    let host = environment.host;
    return this.http.get<offres[]>(host + 'offres');
  }
  chercherOffres(mot: String,vDepart:String,vArrivee:String,date:Date): Observable<offres[]> {
    let host = environment.host;
    return this.http.get<offres[]>(host + 'offres?employe.genre='+mot+'&v_depart='+vDepart+'&v_arrive='+vArrivee+'&date='+date);
  }
  chercherOffresId(id: number): Observable<offres> {
    let host = environment.host;
    return this.http.get<offres>(host + 'offres/' + id);
  }

  deleteOffres(offre: offres): Observable<void> {
    let host = environment.host;
    return this.http.delete<void>(host + 'offres/' + offre.id);
  }
  saveOffre(offre: offres): Observable<offres> {
    let host = environment.host;
    return this.http.post<offres>(host + 'offres', offre);
  }
  updateOffre(offre: offres): Observable<offres> {
    let host = environment.host;
    return this.http.put<offres>(host + 'offres/' + offre.id, offre);
  }
}
