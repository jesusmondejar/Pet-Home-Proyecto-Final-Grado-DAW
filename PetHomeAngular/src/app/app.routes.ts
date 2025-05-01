import { Routes } from '@angular/router';
import { InicioComponent } from './secciones/inicio/inicio.component';
import { AdoptaComponent } from './secciones/adopta/adopta.component';
import { OrganizacionesComponent } from './secciones/organizaciones/organizaciones.component';
import { SobreNosotrosComponent } from './secciones/sobre-nosotros/sobre-nosotros.component';
import { Page404Component } from './secciones/page404/page404.component';

export const routes: Routes = [
    { path: "inicio", component: InicioComponent },
    { path: "adopta", component: AdoptaComponent },
    { path: "organizaciones", component: OrganizacionesComponent },
    { path: "sobre-nosotros", component: SobreNosotrosComponent },
    { path: "", redirectTo: "inicio", pathMatch: "full" },
    { path: "**", component: Page404Component }
];
