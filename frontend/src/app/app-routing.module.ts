import { ListarCitacaoComponent } from './componentes/citacao/listar-citacao/listar-citacao.component';
import { CriarCitacaoComponent } from './componentes/citacao/criar-citacao/criar-citacao.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlterarCitacaoComponent } from './componentes/citacao/alterar-citacao/alterar-citacao.component';
import { ExcluirCitacaoComponent } from './componentes/citacao/excluir-citacao/excluir-citacao.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'listarCitacao', pathMatch: 'full',
  },
  {
    path: 'listarCitacao',
    component: ListarCitacaoComponent
  },
  {
    path: 'criarCitacao',
    component: CriarCitacaoComponent
  },
  {
    path: 'citacoes/alterarCitacao/:id',
    component: AlterarCitacaoComponent
  },
  {
    path: 'citacoes/excluirCitacao/:id',
    component: ExcluirCitacaoComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
