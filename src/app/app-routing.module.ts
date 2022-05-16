import { ListaCitacaoComponent } from './componentes/citacao/lista-citacao/lista-citacao.component';
import { CriarCitacaoComponent } from './componentes/citacao/criar-citacao/criar-citacao.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', redirectTo: 'listaCitacao', pathMatch: 'full',
  },
  {
    path: 'listaCitacao',
    component: ListaCitacaoComponent
  },
  {
    path: 'criarCitacao',
    component: CriarCitacaoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
