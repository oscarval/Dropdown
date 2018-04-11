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
  selectCountry3: any;
  values: string[];


  constructor(private _countryServices: CountriesService) {

    this._countryServices.getCountries()
      .subscribe(result => {
        this.countries = result;
        this.countries2 = result;
        this.countries3 = result;
      });
  }

  ngOnInit() {

  }

  selected(e) {
    this.values = [];
    // tslint:disable-next-line:prefer-const
    let val = e.value;
    // tslint:disable-next-line:prefer-const
    for ( let item of val) {
      this.values.push(item.name);
    }

  }

  removeItem(e): any {
    console.log(e);
    console.log(this.selectCountry3);
    this.selectCountry3.filter(elem => {
      console.log(elem);
      if ( elem.name === e.value) {
        this.selectCountry3.splice(elem, 1);
      }
    });
  }

}
