import { Citacao } from './../componentes/citacao/citacao';
import { MOCK_LISTA_CITACAO } from './../mock/mock';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CitacaoService {
  listaCitacaoMocada = MOCK_LISTA_CITACAO;

  cadastrarCitacao(citacao: Citacao) {
    this.listaCitacaoMocada.push(citacao);
    console.log(this.listaCitacaoMocada)
  }

  mostrarListaCitacao() {
    this.listaCitacaoMocada = MOCK_LISTA_CITACAO;
  }


}

