import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApostasRoutingModule } from './apostas-routing.module';
import { ApostasComponent } from './apostas/apostas.component';

import { MatTableModule } from '@angular/material/table'
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [
    ApostasComponent
  ],
  imports: [
    CommonModule,
    ApostasRoutingModule,
    MatTableModule,
    MatCardModule,
    MatToolbarModule
  ]
})
export class ApostasModule { }
