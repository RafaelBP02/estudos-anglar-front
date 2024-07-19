import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { NgifNgforComponent } from './components/ngif-ngfor/ngif-ngfor.component';
import { CrudComponent } from './components/crud/crud.component';
import { CrudService } from './services/crud.service';
import { StudyAngularModule } from './modules/study-angular/study-angular.module';

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
    CommonModule,
    StudyAngularModule,
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
