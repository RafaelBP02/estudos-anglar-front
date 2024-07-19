import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path: 'lazy', loadChildren: () => import('./modules/lazy-loading/lazy-loading.module').then(m => m.LazyLoadingModule)},
  {path: 'old', loadChildren: () => import('./modules/study-angular/study-angular.module').then(m => m.StudyAngularModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
