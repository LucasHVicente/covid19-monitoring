import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalDetalhePage } from './modal-detalhe.page';

const routes: Routes = [
  {
    path: '',
    component: ModalDetalhePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalDetalhePageRoutingModule {}
