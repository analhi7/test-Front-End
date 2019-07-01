import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../../services/restaurants.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers:[RestaurantService]
})
export class NavbarComponent implements OnInit {

  constructor(private _restaurantsService : RestaurantService,
    private router:Router) { }

    public restaurants = [];

  ngOnInit() {
    this. _restaurantsService.getRestaurants()
                           .subscribe(data => this.restaurants = data);
  }

  searchRestaurant(term : string ){
    this._restaurantsService.searchRestaurant(term, this.restaurants)
    this.router.navigate(['/restaurant', term]);
   
  }
  
  
}
