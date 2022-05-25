import { ListarCitacaoComponent } from './componentes/citacao/listar-citacao/listar-citacao.component';
import { SalvarCitacaoComponent } from './componentes/citacao/salvar-citacao/salvar-citacao.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarCitacaoComponent } from './componentes/citacao/editar-citacao/editar-citacao.component';
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
    path: 'salvarCitacao',
    component: SalvarCitacaoComponent
  },
  {
    path: 'citacoes/editarCitacao/:id',
    component: EditarCitacaoComponent
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
