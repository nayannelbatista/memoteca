import { ListaCitacaoComponent } from './componentes/citacao/lista-citacao/lista-citacao.component';
import { CadastrarCitacaoComponent } from './componentes/citacao/cadastrar-citacao/cadastrar-citacao.component';
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
    path: 'cadsatrarCitacao',
    component: CadastrarCitacaoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
