import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { CriarCitacaoComponent } from './componentes/citacao/criar-citacao/criar-citacao.component';
import { ListaCitacaoComponent } from './componentes/citacao/lista-citacao/lista-citacao.component';
import { RodapeComponent } from './componentes/rodape/rodape.component';
import { CitacaoComponent } from './componentes/citacao/citacao/citacao.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    RodapeComponent,
    ListaCitacaoComponent,
    CriarCitacaoComponent,
    CitacaoComponent
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
