import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Observable } from 'rxjs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class ZomatoHttpService {

  public restaurantList;

  public zomatoapiurl = 'https://developers.zomato.com/api/v2.1/';

  public city: 'https://developers.zomato.com/api/v2.1/categories?apikey=75b4d4b676fc267334603fb5c1f971ed';

  public apikey = '75b4d4b676fc267334603fb5c1f971ed';

  constructor(public _http: HttpClient) {
    console.log("service construction Called");
  }

  private handleError(err: HttpErrorResponse) {
    console.log(err.message);
    return Observable.throw(err.message);
  }

  public restaurentdetails(restroid): any {
    let myResponse = this._http.get<{}>(this.zomatoapiurl + "restaurant?res_id=" + restroid + "&apikey=" + this.apikey);
    console.log(myResponse);
    return myResponse;
  }

  public review(restroid): any {
    let myResponse = this._http.get(this.zomatoapiurl + "reviews?res_id=" + restroid + "&apikey=" + this.apikey);
    console.log(myResponse);
    return myResponse;
  }

  public restaurentlistGeo(lat,log): any {
    let myResponse = this._http.get(this.zomatoapiurl + "geocode?lat="+lat+"&lon="+log+"&apikey=" + this.apikey);
    console.log(myResponse);
    return myResponse;
  }

  public searchrestaurant(entity_id,type,q): any {
    console.log(entity_id,type,q); 
    let myResponse = this._http.get(this.zomatoapiurl+"search?entity_id="+entity_id+"&q="+q+"&entity_type="+type+"&apikey=" + this.apikey);
    console.log(myResponse);
    return myResponse;
  }

  public location(Longitude: number, Latitude: number): any {
    let myResponse = this._http.get("https://developers.zomato.com/api/v2.1/geocode?lat=18.455924&lon=73.827689&apikey=75b4d4b676fc267334603fb5c1f971ed");
    console.log(myResponse);
    return myResponse;
  }

  public getlocation(city): any {
    let myResponse = this._http.get<{}>(this.zomatoapiurl + "cities?q="+city+"&count=200"+"&apikey=" +this.apikey);
    console.log(myResponse);
    return myResponse;
  }

  getPosition(): Promise<any>
  {
    return new Promise((resolve, reject) => {

      navigator.geolocation.getCurrentPosition(resp => {

          resolve({lng: resp.coords.longitude, lat: resp.coords.latitude});
        },
        err => {
          reject(err);
        });
    });

  }

  
}
