import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { NgifNgforComponent } from './components/ngif-ngfor/ngif-ngfor.component';
import { CrudComponent } from './components/crud/crud.component';
import { HttpClient } from '@angular/common/http';
import { LazyLoadingModule } from './modules/lazy-loading/lazy-loading.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    NgifNgforComponent,
    CrudComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LazyLoadingModule
  ],
  providers: [
    provideClientHydration(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
