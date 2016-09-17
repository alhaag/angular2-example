import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent }   from './heroes/dashboard/dashboard.component';
import { HeroesComponent }      from './heroes/heroes/heroes.component';
import { HeroDetailComponent }  from './heroes/hero-detail/hero-detail.component';
import { HeroFormComponent }    from './heroes/hero-form/hero-form.component';
import { HomeComponent }        from './home/index';

const appRoutes: Routes = [
    /*{
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },*/
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'heroes',
        component: HeroesComponent
    },
    {
        path: 'detail/:id',
        component: HeroDetailComponent
    },
    {
        path: 'hero-form',
        component: HeroFormComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
