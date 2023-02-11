import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApostasComponent } from './apostas/apostas.component';

const routes: Routes = [
  { path: '', component: ApostasComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApostasRoutingModule { }
