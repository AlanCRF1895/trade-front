import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApostasRoutingModule } from './apostas-routing.module';
import { ApostasComponent } from './apostas/apostas.component';

import { MatTableModule } from '@angular/material/table'

@NgModule({
  declarations: [
    ApostasComponent
  ],
  imports: [
    CommonModule,
    ApostasRoutingModule,
    MatTableModule
  ]
})
export class ApostasModule { }
