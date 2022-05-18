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

  // mostrarListaCitacao(): Observable<Citacao[]> {
  //   return this.http.get<Citacao[]>(this.baseUrl).pipe(
  //     map(obj => obj),
  //     catchError(e => this.errorHandler(e))
  //   );
  // }

  // mostrarPorId(id: number): Observable<Citacao> {
  //   const url = `${this.baseUrl}/${id}`;
  //   return this.http.get<Citacao>(url).pipe(
  //     map(obj => obj),
  //     catchError(e => this.errorHandler(e))
  //   );
  // }

  // alterarCitacao(Citacao: Citacao): Observable<Citacao> {
  //   const url = `${this.baseUrl}/${Citacao.conteudo}`;
  //   return this.http.put<Citacao>(url, Citacao).pipe(
  //     map(obj => obj),
  //     catchError(e => this.errorHandler(e))
  //   );
  // }

  // apagarCitacao(id: number): Observable<Citacao> {
  //   const url = `${this.baseUrl}/${id}`;
  //   return this.http.delete<Citacao>(url).pipe(
  //     map(obj => obj),
  //     catchError(e => this.errorHandler(e))
  //   );
  // }

  errorHandler(e: any): Observable<any> {
    alert('Ocorreu um erro, a operação não foi concluída!')
    return EMPTY;
  }
}

