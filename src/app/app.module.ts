import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Router} from '@angular/router';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { ZomatoHttpService } from './zomato-http.service';
import { RestauantDetailsComponent } from './restauant-details/restauant-details.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SearchRestaurantComponent } from './search-restaurant/search-restaurant.component';
import { ToastrModule } from 'ngx-toastr';
import { AgmCoreModule } from '@agm/core';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RestauantDetailsComponent,
    SearchRestaurantComponent
  ],
  imports: [
    BrowserModule,
    Ng2SearchPipeModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBAWMhd0hITRl0fQBBtiHn7e2zk-jD6NTs'
      }),
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent, pathMatch: 'full' },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'restaurant/:id', component: RestauantDetailsComponent },
      { path: 'search', component: SearchRestaurantComponent }
     ]),
  ],
  providers: [ZomatoHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
