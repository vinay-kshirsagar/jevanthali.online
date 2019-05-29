import { Component, OnInit } from '@angular/core';
import { ZomatoHttpService } from '../zomato-http.service';
import { ToastrModule } from 'ngx-toastr';


@Component({
  selector: 'app-search-restaurant',
  templateUrl: './search-restaurant.component.html',
  styleUrls: ['./search-restaurant.component.css']
})
export class SearchRestaurantComponent implements OnInit {

  public restaurantList;
  public entity_type = "city";
  public query: any;
  public count: any;
  public location: any;
  public locationId: any;
  public cityname: string;


  constructor(public zomatohttpservice: ZomatoHttpService) {
  }

  ngOnInit() { }


   // we can search restauant by restauant name and location 
   //first i get city name and find id of city and pass that to search field 

  public SearchFunction() {
   
    console.log(this.location)
    this.locationId = this.zomatohttpservice.getlocation(this.location).subscribe(
      data => {
        console.log(data.location_suggestions[0].id);
        this.locationId = data.location_suggestions[0].id;
        this.restaurantList = this.zomatohttpservice.searchrestaurant(this.locationId,this.entity_type, this.query).subscribe(
          location_suggestions => {
            console.log(location_suggestions.restaurants);
            this.restaurantList = location_suggestions.restaurants;
          },
          error => {
            console.log("some error occurred");
            console.log(error.errorMessage);
          }
        )
      },
      error => {
        console.log("some error occurred");
        console.log(error.errorMessage);
      }
    )
  }
}
