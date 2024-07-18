import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { NgifNgforComponent } from './ngif-ngfor/ngif-ngfor.component';
import { AppComponent } from './app.component';
import { CrudComponent } from './components/crud/crud.component';

const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'primeiro-componente', component: DataBindingComponent},
  {path: 'ng-iffor', component: NgifNgforComponent},
  {path: 'crud', component: CrudComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
