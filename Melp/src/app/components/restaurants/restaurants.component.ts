import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../../services/restaurants.service';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css'],
  providers:[RestaurantService]
})
export class RestaurantsComponent implements OnInit {

  public restaurants = [];

  constructor(private _restaurantsService : RestaurantService) { }

  ngOnInit() {

  this. _restaurantsService.getRestaurants()
                           .subscribe(data => this.restaurants = data);
  }

}
