import { Citacao } from './../citacao';
import { ActivatedRoute, Router } from '@angular/router';
import { CitacaoService } from '../citacao.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alterar-citacao',
  templateUrl: './alterar-citacao.component.html',
  styleUrls: ['./alterar-citacao.component.css']
})
export class AlterarCitacaoComponent implements OnInit {

  citacao!: Citacao;

  constructor(
    private citacaoService: CitacaoService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    console.log("id: " + id);
    this.citacaoService.mostrarCitacaoPorId(id).subscribe(citacao => {
      this.citacao = citacao
    });
  }

  editarCitacao(): void {
    this.citacaoService.alterarCitacao(this.citacao).subscribe(() => {
      this.router.navigate(['/listarCitacao'])
    })
  }

  cancelar(): void {
    alert("Operação cancelada")
    this.router.navigate(['/listarCitacao']);
  }
}
