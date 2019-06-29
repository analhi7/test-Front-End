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
    
}