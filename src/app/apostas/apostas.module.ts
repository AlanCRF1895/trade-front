import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApostasRoutingModule } from './apostas-routing.module';
import { ApostasComponent } from './apostas/apostas.component';


@NgModule({
  declarations: [
    ApostasComponent
  ],
  imports: [
    CommonModule,
    ApostasRoutingModule
  ]
})
export class ApostasModule { }
