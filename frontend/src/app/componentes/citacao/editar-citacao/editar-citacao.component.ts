import { Citacao } from '../citacao';
import { ActivatedRoute, Router } from '@angular/router';
import { CitacaoService } from '../citacao.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editar-citacao',
  templateUrl: './editar-citacao.component.html',
  styleUrls: ['./editar-citacao.component.css']
})
export class EditarCitacaoComponent implements OnInit {

  citacao: Citacao = {
    id: 0,
    conteudo: '',
    autoria: '',
    modelo: 'modelo1'
  }

  constructor(
    private citacaoService: CitacaoService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!);
    this.citacaoService.buscarPorId(id).subscribe(citacao => {
      this.citacao = citacao
    });
  }

  editarCitacao(): void {
    this.citacaoService.editar(this.citacao).subscribe(() => {
      this.router.navigate(['/listarCitacao'])
    })
  }

  cancelar(): void {
    this.router.navigate(['/listarCitacao']);
  }
}
