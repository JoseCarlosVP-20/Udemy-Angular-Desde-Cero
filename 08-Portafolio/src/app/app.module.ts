import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/components/shared.module';
import { ProyectosModule } from './proyectos/proyectos.module';
import { ContactoModule } from './contacto/contacto.module';
import { AboutModule } from './about/about.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, SharedModule, ProyectosModule, ContactoModule, AboutModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
