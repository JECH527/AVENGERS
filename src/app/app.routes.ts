import { RouterModule,Routes } from "@angular/router"
import { HeroesComponent } from "./compnents/componentes/heroes/heroes.component";
import { HistoriaComponent } from "./compnents/componentes/historia/historia.component";
import { HomeComponent } from "./compnents/componentes/home/home.component";
import { NosotrosComponent } from "./compnents/componentes/nosotros/nosotros.component";


// hacemos el path para cada componenenete
const APP_ROUTES: Routes = [
{path: 'home', component:HomeComponent},
{path:'heroes', component:HeroesComponent},
{path:'nosotros',component:NosotrosComponent},
{path:'historia',component:HistoriaComponent},

{path: '***', pathMatch: 'full', redirectTo: 'home'}
];


export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES); // exportamos las rutas