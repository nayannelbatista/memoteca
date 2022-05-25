import { CitacaoService } from '../citacao.service';
import { Component, OnInit } from '@angular/core';
import { Citacao } from '../citacao';

@Component({
  selector: 'app-listar-citacao',
  templateUrl: './listar-citacao.component.html',
  styleUrls: ['./listar-citacao.component.css']
})
export class ListarCitacaoComponent implements OnInit {

  listaCitacao: Citacao[] = [];

  constructor(private citacaoService: CitacaoService) { }

  ngOnInit(): void {
    this.citacaoService.listar().subscribe(listaCitacao => {
      this.listaCitacao = listaCitacao;
    })
  }
}
