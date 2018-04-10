import { CountriesService } from './../services/countries.service';
import { Component, OnInit } from '@angular/core';

// Extras PrimeNG
import {DropdownModule} from 'primeng/dropdown';
import {SelectItem} from 'primeng/api';



@Component({
  selector: 'app-dropwdown',
  templateUrl: './dropwdown.component.html',
  styleUrls: ['./dropwdown.component.css']
})
export class DropwdownComponent implements OnInit {

  countries: SelectItem[];
  selectCountry: any;

  constructor(private _countryServices: CountriesService) {

    this._countryServices.getCountries()
      .subscribe(result => {
        this.countries = result;
      });
  }

  ngOnInit() {
  }

}
