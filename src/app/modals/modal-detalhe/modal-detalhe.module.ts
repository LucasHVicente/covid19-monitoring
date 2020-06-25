import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalDetalhePageRoutingModule } from './modal-detalhe-routing.module';

import { ModalDetalhePage } from './modal-detalhe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalDetalhePageRoutingModule
  ],
  declarations: [ModalDetalhePage]
})
export class ModalDetalhePageModule {}
