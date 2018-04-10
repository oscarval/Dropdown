import { CountriesService } from './../services/countries.service';
import { Component, OnInit } from '@angular/core';

// Extras PrimeNG
import {DropdownModule} from 'primeng/dropdown';
import {SelectItem} from 'primeng/api';
import {MultiSelectModule} from 'primeng/multiselect';

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

  constructor(private _countryServices: CountriesService) {

    this._countryServices.getCountries()
      .subscribe(result => {
        this.countries = result;
        this.countries2 = result;
      });
  }

  ngOnInit() {
  }

}
