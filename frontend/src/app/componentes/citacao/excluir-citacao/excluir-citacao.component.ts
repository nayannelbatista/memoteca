import { Citacao } from './../citacao';
import { Router, ActivatedRoute } from '@angular/router';
import { CitacaoService } from '../citacao.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-excluir-citacao',
  templateUrl: './excluir-citacao.component.html',
  styleUrls: ['./excluir-citacao.component.css']
})
export class ExcluirCitacaoComponent implements OnInit {

  citacao: Citacao = {
    id: 0,
    conteudo: '',
    autoria: '',
    modelo: '',
  };

  constructor(
    private citacaoService: CitacaoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.citacaoService.buscarPorId(id).subscribe(citacao => {
      this.citacao = citacao;
    });
  }

  excluirCitacao(): void {
    this.citacaoService.excluir(this.citacao.id).subscribe(() => {
      this.router.navigate(['/listarCitacao']);
    });
  }

  cancelar(): void {
    this.router.navigate(['/listarCitacao']);
  }
}
