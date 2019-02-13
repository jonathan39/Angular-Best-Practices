import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

// Components
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroeComponent } from './heroe/heroe.component';
import { SearchHeroeComponent } from './search-heroe/search-heroe.component';
import { TemplateComponent } from '../formularios/components/template/template.component';
import { DataComponent } from '../formularios/components/data/data.component';
import { MiscelaneosComponent } from '../miscelaneos/miscelaneos.component';
import { RutasHijasComponent } from '../miscelaneos/rutas-hijas/rutas-hijas.component';
import { UsuarioComponent } from '../miscelaneos/rutas-hijas/usuario/usuario.component';
import { USUARIO_ROUTES } from '../miscelaneos/rutas-hijas/usuario/usuario.routes';

// Services
const APP_ROUTES: Routes = [
    { path: 'heroe/:id', component: HeroeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'search/:termino', component: SearchHeroeComponent },
    { path: 'heroes', component: HeroesComponent },
    { path: 'about', component: AboutComponent },
    { path: 'formTemplate', component: TemplateComponent },
    { path: 'formData', component: DataComponent },
    { path: 'miscelaneos', component: MiscelaneosComponent },
    { path: 'rutasHijas', component: RutasHijasComponent },
    { path: 'usuario/:id', component: UsuarioComponent, children: USUARIO_ROUTES },
    { path: '**', pathMatch: 'full', redirectTo: 'rutasHijas' },
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
