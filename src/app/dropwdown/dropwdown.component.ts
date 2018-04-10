import { CountriesService } from './../services/countries.service';
import { Component, OnInit } from '@angular/core';

// Extras PrimeNG
import {DropdownModule} from 'primeng/dropdown';
import {SelectItem} from 'primeng/api';
import {MultiSelectModule} from 'primeng/multiselect';
import {ChipsModule} from 'primeng/chips';

interface Country {
  name: string;
  code: string;
}



@Component({
  selector: 'app-dropwdown',
  templateUrl: './dropwdown.component.html',
  styleUrls: ['./dropwdown.component.css']
})
export class DropwdownComponent implements OnInit {

  countries: SelectItem[];
  selectCountry: Country;
  countries2: SelectItem[];
  selectCountry2: Country;
  countries3: SelectItem[];
  selectCountry3: Country;
  values: string[];


  constructor(private _countryServices: CountriesService) {

    this._countryServices.getCountries()
      .subscribe(result => {
        this.countries = result;
        this.countries2 = result;
        this.countries3 = result;
      });
  }

  ngOnInit(){

  }
  
  selected(e){
    this.values = [];
    let val = e.value;
    for(let item of val){
      this.values.push(item.name);
    }

  }

  removeItem(e){
    console.log(e);
    let index = array.indexOf(e.value);
    if (index > -1) {
      this.selectCountry3.splice(index, 1);
    }
  }

}
