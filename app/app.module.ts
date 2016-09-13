import './rxjs-extensions';

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard.component';
import { HeroesComponent }      from './heroes.component';
import { HeroDetailComponent }  from './hero-detail.component';
//import { HeroFormComponent }  from './hero-form.component';
import { HeroService }          from './hero.service';
import { HeroSearchComponent }  from './hero-search.component';
import { routing }              from './app.routing';

@NgModule({
    // Outros módulos cujas aulas exportados são necessários por modelos de componentes declarados no presente módulo
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService),
        routing
    ],
    // Classes visiveis pertencentes a este módulo
    declarations: [
        AppComponent,
        DashboardComponent,
        HeroDetailComponent,
        //HeroFormComponent,
        HeroesComponent,
        HeroSearchComponent
    ],
    // Service factory que este módulo contribui para a coleta global de serviços; eles se tornam acessíveis em todas as partes do aplicativo.
    providers: [
        HeroService
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule {
}
