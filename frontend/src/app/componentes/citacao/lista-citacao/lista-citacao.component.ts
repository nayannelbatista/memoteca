import { CitacaoService } from './../../../servicos/citacao.service';
import { Component, Input, OnInit } from '@angular/core';
import { Citacao } from '../citacao';

@Component({
  selector: 'app-lista-citacao',
  templateUrl: './lista-citacao.component.html',
  styleUrls: ['./lista-citacao.component.css']
})
export class ListaCitacaoComponent implements OnInit {

  listaCitacao: Citacao[] = [];

  constructor(
    private citacaoService: CitacaoService,
  ) { }

  ngOnInit(): void {
    this.citacaoService.mostrarListaCitacao().subscribe(listaCitacao => {
      this.listaCitacao = listaCitacao
    })
  }
}
