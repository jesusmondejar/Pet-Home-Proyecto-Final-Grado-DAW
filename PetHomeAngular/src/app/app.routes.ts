import { Routes } from '@angular/router';
import { InicioComponent } from './secciones/inicio/inicio.component';
import { AdoptaComponent } from './secciones/adopta/adopta.component';
import { OrganizacionesComponent } from './secciones/organizaciones/organizaciones.component';
import { SobreNosotrosComponent } from './secciones/sobre-nosotros/sobre-nosotros.component';
import { Page404Component } from './secciones/page404/page404.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { MascotaDetalleComponent } from './secciones/mascota-detalle/mascota-detalle.component';
import { OrganizacionesDetalleComponent } from './secciones/organizaciones-detalle/organizaciones-detalle.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: "inicio", component: InicioComponent },
    { path: "adopta", component: AdoptaComponent },
    { path: "organizaciones", component: OrganizacionesComponent },
    { path: "sobre-nosotros", component: SobreNosotrosComponent },
    { path: "detalle-mascota/:id", component: MascotaDetalleComponent },
    { path: "detalle-organizacion/:id", component: OrganizacionesDetalleComponent },
    { path: "", redirectTo: "inicio", pathMatch: "full" },
    { path: "**", component: Page404Component }
];
