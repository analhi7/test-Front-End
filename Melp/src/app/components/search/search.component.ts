import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurantService } from '../../services/restaurants.service';




@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers:[RestaurantService]
})
export class SearchComponent implements OnInit {


  public getRestaurant;
  public restaurant = [];
  

  constructor(private activatedRoute: ActivatedRoute,
              private _restaurantsService : RestaurantService,
              ) { 

  }

  ngOnInit() {
    
    
    this.activatedRoute.params.subscribe(params =>{
      let getRestaurant= JSON.parse(localStorage.getItem('restaurants'));
      this.restaurant = this._restaurantsService.searchRestaurant(params['term'], getRestaurant)
      
    })
                    
    
    
    }

    filteredAsc(){

      this._restaurantsService.filterByrating(-1, this.restaurant)
      
    }
  
  
    filteredDes(){
  
      this._restaurantsService.filterByrating(1, this.restaurant)
      
    }
  
  

 
  }
