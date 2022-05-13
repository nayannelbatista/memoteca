import { CitacaoService } from '../../../servicos/citacao.service';
import { Component, OnInit } from '@angular/core';
import { Citacao } from '../citacao';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar-citacao',
  templateUrl: './cadastrar-citacao.component.html',
  styleUrls: ['./cadastrar-citacao.component.css']
})
export class CadastrarCitacaoComponent implements OnInit {

  citacao: Citacao = {
    conteudo: '',
    autoria: '',
    modelo: '',
    data: new Date
  }

  constructor(
    private citacaoService: CitacaoService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  cadastrarCitacao(): void {

    this.citacaoService.cadastrarCitacao(this.citacao)
    this.router.navigate(['/listaCitacao']);
    this.limparCitacao();
  }

  limparCitacao(): void {
    this.citacao = {
      conteudo: '',
      autoria: '',
      modelo: '',
      data: new Date
    }
  }

}


