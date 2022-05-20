import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { CriarCitacaoComponent } from './componentes/citacao/criar-citacao/criar-citacao.component';
import { ListarCitacaoComponent } from './componentes/citacao/listar-citacao/listar-citacao.component';
import { RodapeComponent } from './componentes/rodape/rodape.component';
import { CitacaoComponent } from './componentes/citacao/citacao/citacao.component';

import { ExcluirCitacaoComponent } from './componentes/citacao/excluir-citacao/excluir-citacao.component';
import { AlterarCitacaoComponent } from './componentes/citacao/alterar-citacao/alterar-citacao.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    RodapeComponent,
    ListarCitacaoComponent,
    CriarCitacaoComponent,
    CitacaoComponent,
    AlterarCitacaoComponent,
    ExcluirCitacaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
