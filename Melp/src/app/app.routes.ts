import { ModuleWithProviders} from '@angular/core';
import {RouterModule, Routes}  from '@angular/router';
import {RestaurantsComponent}  from './components/restaurants/restaurants.component'
import {SearchComponent}  from './components/search/search.component'

const appRoutes : Routes = [
    { path:'home', component:RestaurantsComponent},
    {path :'restaurant/:term', component:SearchComponent},
    {path: '**', pathMatch:'full', redirectTo : 'home'}
]



export const appRoutingProviders: any[]=[];
export const routing:ModuleWithProviders= RouterModule.forRoot(appRoutes);