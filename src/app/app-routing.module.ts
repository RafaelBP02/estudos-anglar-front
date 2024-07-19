import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { NgifNgforComponent } from './components/ngif-ngfor/ngif-ngfor.component';
import { AppComponent } from './app.component';
import { CrudComponent } from './components/crud/crud.component';

const routes: Routes = [
  {path: 'lazy', loadChildren: () => import('./modules/lazy-loading/lazy-loading.module').then(m => m.LazyLoadingModule)},

  {path: 'primeiro-componente', component: DataBindingComponent},
  {path: 'ng-iffor', component: NgifNgforComponent},
  {path: 'crud', component: CrudComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
