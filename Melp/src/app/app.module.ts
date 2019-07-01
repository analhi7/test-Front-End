import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';
import { RestaurantsComponent } from './components/restaurants/restaurants.component';
import { SearchComponent } from './components/search/search.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { routing, appRoutingProviders } from './app.routes';


@NgModule({
  declarations: [
    AppComponent,
    RestaurantsComponent,
    SearchComponent,
    NavbarComponent 
   

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    routing
    
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
