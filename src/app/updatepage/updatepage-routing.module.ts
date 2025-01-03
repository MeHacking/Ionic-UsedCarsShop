import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdatePage } from './updatepage.page';

const routes: Routes = [
  {
    path: '',
    component: UpdatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdatePageRoutingModule {}
