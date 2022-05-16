import { Citacao } from './../componentes/citacao/citacao';
import { MOCK_LISTA_CITACAO } from './../mock/mock';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CitacaoService {
  listaCitacaoMocada = MOCK_LISTA_CITACAO;

  criarCitacao(citacao: Citacao) {
    this.listaCitacaoMocada.push(citacao);
  }

  mostrarListaCitacao() {
    this.listaCitacaoMocada = MOCK_LISTA_CITACAO;
  }


}

