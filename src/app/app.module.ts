import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrudService } from './services/crud.service';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent],
  imports: [BrowserModule, AppRoutingModule, CommonModule],
  providers: [
    provideClientHydration(),
    provideHttpClient(), // HttpClientModule foi "depreciado" no Angular 18, esta é a nova solução
    CrudService,
    HttpClient,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
