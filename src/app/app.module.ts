import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { NgifNgforComponent } from './components/ngif-ngfor/ngif-ngfor.component';
import { CrudComponent } from './components/crud/crud.component';
import { LazyLoadingModule } from './modules/lazy-loading/lazy-loading.module';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { CrudService } from './services/crud.service';

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    NgifNgforComponent,
    CrudComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LazyLoadingModule,
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(), // HttpClientModule foi "depreciado" no Angular 18, esta é a nova solução
    CrudService,
    HttpClient,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
