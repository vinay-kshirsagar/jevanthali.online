import { Component, OnInit, Input } from '@angular/core';
import { ZomatoHttpService } from '../zomato-http.service';
import { Router } from '@angular/router';
import { ZomatoServiceService } from '../zomato-service.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public restaurantList = [];  //variable used to store array 
  public location_suggestions = [];
  public nearby_restaurants = [];
  public longitude;
  public latitude;
  public location;
  lat: any;
  lng: any;
  
  constructor(
    public zomatohttpservice: ZomatoHttpService,
    public router: Router,
    public zomatoservice: ZomatoServiceService) {
    console.log("Home construction Called");

  }

  //here first detect longitude and latitude and pass that to restaurant list

  ngOnInit() {
    this.zomatohttpservice.getPosition().then(pos => {
      console.log(`Positon: ${pos.lng} ${pos.lat}`);
      this.longitude=pos.lng;
      this.latitude=pos.lat;
      console.log(this.longitude,this.latitude);
      this.restaurantList = this.zomatohttpservice.restaurentlistGeo(this.latitude,this.longitude).subscribe(
        location_suggestions => {
          console.log(location_suggestions.nearby_restaurants);
          this.restaurantList = location_suggestions.nearby_restaurants;
          this.location = location_suggestions.location;
        },
        error => {
          console.log("some error occurred");
          console.log(error.errorMessage);
        }
      )
      console.log(this.restaurantList);
    });
  }
}
