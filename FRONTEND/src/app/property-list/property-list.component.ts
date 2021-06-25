import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ipropertybase } from '../model/ipropertybase';

import { HousingService } from '../services/housing.service';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  SellRent = 1;
  Property: Ipropertybase[];

  constructor(private route: ActivatedRoute, private housingService: HousingService) { }

  ngOnInit(): void {
    if(this.route.snapshot.url.toString()){
      this.SellRent = 2; // means we are on rent-property url else we are on base url
    }
    this.housingService.getAllProperties(this.SellRent).subscribe(
        data=>{
              this.Property=data;
              console.log(data);
            }
      ),error=>{
        console.log('httperror:');
        console.log(error);
      }
  }

}
