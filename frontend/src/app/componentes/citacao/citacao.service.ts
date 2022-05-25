
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Citacao } from './citacao';

@Injectable({
  providedIn: 'root'
})
export class CitacaoService {

  baseUrl = "http://localhost:3000/citacoes";

  constructor(private http: HttpClient) { }

  salvar(citacao: Citacao): Observable<Citacao> {
    return this.http.post<Citacao>(this.baseUrl, citacao);
  }

  listar(): Observable<Citacao[]> {
    return this.http.get<Citacao[]>(this.baseUrl);
  }

  buscarPorId(id: number): Observable<Citacao> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Citacao>(url);
  }

  editar(citacao: Citacao): Observable<Citacao> {
    const url = `${this.baseUrl}/${citacao.id}`;
    return this.http.put<Citacao>(url, citacao);
  }

  excluir(id: number): Observable<Citacao> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Citacao>(url);
  }
}

