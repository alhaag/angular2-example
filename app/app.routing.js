"use strict";
var router_1 = require('@angular/router');
var dashboard_component_1 = require('./heroes/dashboard/dashboard.component');
var heroes_component_1 = require('./heroes/heroes/heroes.component');
var hero_detail_component_1 = require('./heroes/hero-detail/hero-detail.component');
var hero_form_component_1 = require('./heroes/hero-form/hero-form.component');
var index_1 = require('./home/index');
var appRoutes = [
    /*{
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },*/
    {
        path: '',
        component: index_1.HomeComponent
    },
    {
        path: 'dashboard',
        component: dashboard_component_1.DashboardComponent
    },
    {
        path: 'heroes',
        component: heroes_component_1.HeroesComponent
    },
    {
        path: 'detail/:id',
        component: hero_detail_component_1.HeroDetailComponent
    },
    {
        path: 'hero-form',
        component: hero_form_component_1.HeroFormComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map