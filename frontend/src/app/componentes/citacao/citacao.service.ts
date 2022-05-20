
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, EMPTY, map, Observable } from 'rxjs';
import { Citacao } from './citacao';

@Injectable({
  providedIn: 'root'
})
export class CitacaoService {

  baseUrl = "http://localhost:3000/citacoes";

  constructor(private http: HttpClient) { }

  criarCitacao(citacao: Citacao): Observable<Citacao> {
    return this.http.post<Citacao>(this.baseUrl, citacao);
  }

  listarCitacao(): Observable<Citacao[]> {
    return this.http.get<Citacao[]>(this.baseUrl);
  }

  mostrarCitacaoPorId(id: number): Observable<Citacao> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Citacao>(url);
  }

  alterarCitacao(citacao: Citacao): Observable<Citacao> {
    console.log(citacao);
    const url = `${this.baseUrl}/${citacao.id}`;
    return this.http.put<Citacao>(url, citacao);
  }

  apagarCitacao(id: string): Observable<Citacao> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Citacao>(url);
  }

  mostrarMensagem(msg: string) {
    alert(msg)
  }
}

