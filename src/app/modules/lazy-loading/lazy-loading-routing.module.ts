import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from '../../components/footer/footer.component';
import { HeaderComponent } from '../../components/header/header.component';
import { HomelazyComponent } from '../../components/homelazy/homelazy.component';

const routes: Routes = [
  {
    path: '',
    component: HomelazyComponent,
    children: [
      {
        path: 'header',
        component: HeaderComponent,
      },
      {
        path: 'footer',
        component: FooterComponent,
      },
    ]
  }
];

@NgModule({
  declarations:[FooterComponent, HeaderComponent, HomelazyComponent],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyLoadingRoutingModule { }
