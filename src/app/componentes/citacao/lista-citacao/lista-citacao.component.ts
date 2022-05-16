import { CitacaoService } from './../../../servicos/citacao.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-citacao',
  templateUrl: './lista-citacao.component.html',
  styleUrls: ['./lista-citacao.component.css']
})
export class ListaCitacaoComponent implements OnInit {

  listaCitacaoMocada: any = [];

  constructor(
    private citacaoService: CitacaoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.listaCitacaoMocada = this.citacaoService.listaCitacaoMocada;
  }

  criarCitacao(): void {
    this.router.navigate(['/criarCitacao']);
  }
}
