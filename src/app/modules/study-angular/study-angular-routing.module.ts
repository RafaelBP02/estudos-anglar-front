import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstStepsComponent } from '../../components/first-steps/first-steps.component';
import { DataBindingComponent } from '../../components/data-binding/data-binding.component';
import { NgifNgforComponent } from '../../components/ngif-ngfor/ngif-ngfor.component';
import { CrudComponent } from '../../components/crud/crud.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: '',
    component: FirstStepsComponent,
    children: [
      { path: 'primeiro-componente', component: DataBindingComponent },
      { path: 'ng-iffor', component: NgifNgforComponent },
      { path: 'crud', component: CrudComponent },
    ],
  },
];

@NgModule({
  declarations:[
    FirstStepsComponent,
    DataBindingComponent,
    NgifNgforComponent,
    CrudComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
  ],
  exports: [RouterModule],
})
export class StudyAngularRoutingModule {}
