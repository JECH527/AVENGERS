import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { APP_ROUTING } from './app.routes'; //importamos las rutas y se agregan automaticamente
import { AppComponent } from './app.component';
import { HomeComponent } from './compnents/componentes/home/home.component';
import { HeroesComponent } from './compnents/componentes/heroes/heroes.component';
import { NosotrosComponent } from './compnents/componentes/nosotros/nosotros.component';
import { HistoriaComponent } from './compnents/componentes/historia/historia.component';
import { FooterComponent } from './compnents/componentes/footer/footer.component';
import { NabvarComponent } from './compnents/componentes/nabvar/nabvar.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeroesComponent,
    NosotrosComponent,
    HistoriaComponent,
    FooterComponent,
    NabvarComponent,


  ],
  imports: [
    BrowserModule,
    APP_ROUTING   //llamamos las rutas que exportamos
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
