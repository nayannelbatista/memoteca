import { CitacaoService } from '../citacao.service';
import { Component, OnInit } from '@angular/core';
import { Citacao } from '../citacao';
import { Router } from '@angular/router';

@Component({
  selector: 'app-salvar-citacao',
  templateUrl: './salvar-citacao.component.html',
  styleUrls: ['./salvar-citacao.component.css']
})
export class SalvarCitacaoComponent implements OnInit {

  citacao: Citacao = {
    id: 0,
    conteudo: '',
    autoria: '',
    modelo: 'modelo1'
  }

  constructor(
    private citacaoService: CitacaoService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  salvarCitacao(): void {
    this.citacaoService.salvar(this.citacao).subscribe(() => {
      this.router.navigate(['/listarCitacao']);
    })
  }

  cancelar() {
    this.router.navigate(['/listarCitacao']);
  }

}


