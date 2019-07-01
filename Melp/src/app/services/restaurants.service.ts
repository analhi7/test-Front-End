import { Injectable} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Restaurants } from '../models/restaurants';
import { Observable } from 'rxjs';

@Injectable()
export class RestaurantService{

   

    private _url : string = "/assets/data/data_melp.json"

   constructor(private http : HttpClient) {

   }

   getRestaurants(): Observable<Restaurants[]>{
       return this.http.get<Restaurants[]>(this._url);
   }


   filterByrating (rating:number, restaurants:Restaurants[]){

    const sortRating = restaurants.sort((a, b) => {
        if (a.rating > b.rating) {
          return 1*rating;
        }
        else (a.rating < b.rating) 
          return -1*rating;
        
         
      })
      return sortRating
    
  }


  searchRestaurant( term: string, restaurants:Restaurants[]){
    
    let restaurantsArray=[]
    term = term.toLowerCase();

    for (let nombre of restaurants){
      
      let oneRestaurant = nombre.name.toLowerCase();
      
    if(oneRestaurant.indexOf(term)>=0){
      restaurantsArray.push(nombre)
      localStorage.setItem('restaurants', JSON.stringify(restaurantsArray));
     
    }
    
    }
   
    return restaurantsArray;
    }


    

  }

    
