import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-citacao',
  templateUrl: './citacao.component.html',
  styleUrls: ['./citacao.component.css']
})
export class CitacaoComponent implements OnInit {

  @Input() citacao: any = []

  constructor() { }

  ngOnInit(): void {
  }

  larguraCitacao(){
    if(this.citacao.conteudo.length >= 256){
      return 'citacao-g'
    }
    return 'citacao-p';
  }

}
