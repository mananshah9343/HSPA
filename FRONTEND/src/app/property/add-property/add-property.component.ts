import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
// import { Iproperty } from 'src/app/model/iproperty';
import { Ipropertybase } from 'src/app/model/ipropertybase';
// import { Iproperty } from '../IProperty.interface';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.scss']
})
export class AddPropertyComponent implements OnInit {
// @ViewChild('Form') addPropertyForm: NgForm;
@ViewChild('formTabs') formTabs: TabsetComponent;

  propertyTypes: Array<string> = ['House', 'Apartment', 'Duplex']
  furnishTypes: Array<string> = ['Fully', 'Semi', 'Unfurnished']
  gCommunity: Array<string> = ['Yes', 'No']
  rMove: Array<string> = ['East', 'West', 'North', 'South']

  addPropertyForm: FormGroup;

  propertyView: Ipropertybase = {
    Id: null,
    Name: '',
    Price: null,
    SellRent: null,
    PType: null,
    FType: null,
    BHK: null,
    BuiltArea: null,
    City: '',
    RTM: null
  };

  constructor(private router:Router, private fb: FormBuilder) { }

  ngOnInit() {
    this.CreateAddPropertyForm();
  }

  CreateAddPropertyForm(){
    this.addPropertyForm = this.fb.group({
      SellRent: [null, Validators.required],
      PType: [null, Validators.required],
      Name: [null, Validators.required],
      Price: [null, Validators.required],
      BuiltArea: [null, Validators.required]
    })
  }

  onBack() {
    this.router.navigate(['/'])
  }

  onSubmit(){
    console.log('Submitted');
    console.log('SellRent=' + this.addPropertyForm.value.BasicInfo.SellRent);
    // console.log('SellRent=' + this.addPropertyForm.value.SellRent);
    console.log(this.addPropertyForm);
  }

  selectTab(tabId: number){
    this.formTabs.tabs[tabId].active = true;
  }

}
