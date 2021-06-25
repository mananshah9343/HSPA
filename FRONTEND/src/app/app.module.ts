import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ HttpClientModule} from '@angular/common/http';
import {Routes, RouterModule} from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PropertyListComponent } from './property-list/property-list.component';
import { PropertyCardComponent } from './property/property-card/property-card.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HousingService } from './services/housing.service';
import { AddPropertyComponent } from './property/add-property/add-property.component';
import { PropertyDetailComponent } from './property/property-detail/property-detail.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserRegistrationComponent } from './user/user-registration/user-registration.component';
import { UserServiceService } from './services/user-service.service';
import { AuthService } from './services/auth.service';
import { AlertifyService } from './services/alertify.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import{TabsModule} from 'ngx-bootstrap/tabs'
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

const appRoutes: Routes = [
  {path: '', component: PropertyListComponent},
  {path: 'rent-property', component: PropertyListComponent},
  {path: 'add-property', component: AddPropertyComponent},
  {path: 'property-detail/:Id', component: PropertyDetailComponent},
  {path: 'user/login', component: UserLoginComponent},
  {path: 'user/register', component: UserRegistrationComponent},
  {path: '**', component: PropertyListComponent}
]

@NgModule({
  declarations: [
      AppComponent,
      PropertyCardComponent,
      PropertyListComponent,
      NavBarComponent,
      AddPropertyComponent,
      PropertyDetailComponent,
      UserLoginComponent,
      UserRegistrationComponent
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ButtonsModule.forRoot(),
    BsDatepickerModule.forRoot()
  ],
  providers: [
    HousingService,
    UserServiceService,
    AuthService,
    AlertifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
