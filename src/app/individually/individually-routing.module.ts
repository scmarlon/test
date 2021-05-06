import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndividuallyPage } from './individually.page';

const routes: Routes = [
  {
    path: '',
    component: IndividuallyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndividuallyPageRoutingModule {}
