import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { CitacaoService } from 'src/app/servicos/citacao.service';

@Component({
  selector: 'app-citacao',
  templateUrl: './citacao.component.html',
  styleUrls: ['./citacao.component.css']
})
export class CitacaoComponent implements OnInit {

  @Input() citacao: any = []

  constructor(
    private citacaoService: CitacaoService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  excluirCitacao(): void {
    this.citacaoService.apagarCitacao(this.citacao.id).subscribe(() => {
      this.router.navigate(['/criarCitacao']);
    })
  }
}
