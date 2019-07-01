import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../../services/restaurants.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css'],
  providers:[RestaurantService]
})
export class RestaurantsComponent implements OnInit {

  public restaurants = [];

  constructor(private _restaurantsService : RestaurantService,
              private router:Router) { }

  ngOnInit() {

  this. _restaurantsService.getRestaurants()
                           .subscribe(data => this.restaurants = data);
                           
  }

  
  filteredAsc(){

    this._restaurantsService.filterByrating(-1, this.restaurants)
    
  }


  filteredDes(){

    this._restaurantsService.filterByrating(1, this.restaurants)
    
  }


  


  
 

}
