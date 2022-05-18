import { Citacao } from './../componentes/citacao/citacao';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, EMPTY, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CitacaoService {

  baseUrl = "http://localhost:3000/citacoes";

  constructor(private http: HttpClient) { }

  criarCitacao(citacao: Citacao): Observable<Citacao> {
    return this.http.post<Citacao>(this.baseUrl, citacao);
  }

  mostrarListaCitacao(): Observable<Citacao[]> {
    return this.http.get<Citacao[]>(this.baseUrl);
  }

  apagarCitacao(id: string): Observable<Citacao> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Citacao>(url);
  }
}

