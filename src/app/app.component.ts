import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ZomatoHttpService } from './zomato-http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public location: any;
  public locationId: any;
  public cityname: any;

  constructor(public router: Router,
    public zomatohttpservice: ZomatoHttpService) { }

  public locationsubmit() {
    console.log(this.location);
    this.locationId = this.zomatohttpservice.getlocation(this.location).subscribe(
      data => {
        console.log(data.location_suggestions[0].id);
        this.locationId = data.location_suggestions[0].id;
      },
      error => {
        console.log("some error occurred");
        console.log(error.errorMessage);
      }
    )
    console.log(this.locationId);
  }

  public SearchFunction: any = () => {
    this.router.navigate(['/search']);
  }


}
