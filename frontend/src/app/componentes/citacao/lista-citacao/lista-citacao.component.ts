import { CitacaoService } from './../../../servicos/citacao.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    private router: Router
  ) { }

  ngOnInit(): void {
    this.citacaoService.mostrarListaCitacao().subscribe(listaCitacao => {
      this.listaCitacao = listaCitacao
    })
  }

  criarCitacao(): void {
    this.router.navigate(['/criarCitacao']);
  }
}
