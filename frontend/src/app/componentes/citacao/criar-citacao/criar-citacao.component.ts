import { CitacaoService } from '../citacao.service';
import { Component, OnInit } from '@angular/core';
import { Citacao } from '../citacao';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-citacao',
  templateUrl: './criar-citacao.component.html',
  styleUrls: ['./criar-citacao.component.css']
})
export class CriarCitacaoComponent implements OnInit {

  citacao!: Citacao;

  constructor(
    private citacaoService: CitacaoService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  criarCitacao(): void {
    this.citacaoService.criarCitacao(this.citacao).subscribe(() => {
      this.router.navigate(['/listarCitacao']);
      this.limparCitacao();
    })
  }

  limparCitacao(): void {
    // this.citacao = {
    //   id: '',
    //   conteudo: '',
    //   autoria: '',
    //   modelo: '',
    //   data: new Date
    // }
  }

}


