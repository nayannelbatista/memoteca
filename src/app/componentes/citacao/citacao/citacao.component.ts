import { Component, Input, OnInit } from '@angular/core';
import { CitacaoService } from 'src/app/servicos/citacao.service';

@Component({
  selector: 'app-citacao',
  templateUrl: './citacao.component.html',
  styleUrls: ['./citacao.component.css']
})
export class CitacaoComponent implements OnInit {

  @Input() citacao: any = [];
  citacaoGrande: boolean = false;

  constructor() { }

  ngOnInit(): void {
    if(this.citacao.conteudo.length >= 256){
      this.citacaoGrande = true
    }
    else {
      this.citacaoGrande = false
    }
  }

  larguraCitacao(){
    if(this.citacao.conteudo.length >= 256){
      return 'citacao-g'
    }
    return 'citacao-p';
  }

}
