import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { HomelazyComponent } from '../../components/homelazy/homelazy.component';
import { MyformComponent } from '../../components/myform/myform.component';

const routes: Routes = [
  {
    path: '',
    component: HomelazyComponent,
  },
];

@NgModule({
  declarations: [
    HomelazyComponent,
    MyformComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  exports: [RouterModule],
  providers: [MyformComponent],
})
export class LazyLoadingRoutingModule {}
