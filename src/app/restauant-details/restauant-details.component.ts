import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ZomatoHttpService } from '../zomato-http.service';
import { AgmCoreModule } from '@agm/core';

@Component({
  selector: 'app-restauant-details',
  templateUrl: './restauant-details.component.html',
  styleUrls: ['./restauant-details.component.css']
})
export class RestauantDetailsComponent implements OnInit {

  public restauantdetails;
  public restaurantdetail;
  public restaurantreview = [];
  public restaurantreviews = [];
  public latitude :number ;
  public longitude:number ;
  zoom: number = 15;

  constructor(
    private _route: ActivatedRoute, private router: Router,public zomatohttpservice: ZomatoHttpService
  ) { }
 
   //here first capture restaurant id and pass to restaurant details api

  ngOnInit() {

    let restaurentID = this._route.snapshot.paramMap.get('id');
    console.log(restaurentID);
    this.zomatohttpservice.restaurentdetails(restaurentID).subscribe(
      restaurantdetail => {
        console.log(restaurantdetail);
        this.restauantdetails = restaurantdetail;
        this.latitude = parseFloat(restaurantdetail.location.latitude);  //display location of restaurant on map by using latitude and longitude
        this.longitude = parseFloat(restaurantdetail.location.longitude);
      },
      error =>{
        console.log("some error occurred");
        console.log(error.errorMessage)
      }

    )

    // here restauant review display 
     
    this.zomatohttpservice.review(restaurentID).subscribe(
      restaurantreview => {
        console.log(restaurantreview.user_reviews);
        this.restaurantreviews = restaurantreview.user_reviews;
      },
      error =>{
        console.log("some error occurred");
        console.log(error.errorMessage)
      }

    )
  }

}
