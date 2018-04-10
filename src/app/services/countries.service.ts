import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { forEach } from '@angular/router/src/utils/collection';

@Injectable()
export class CountriesService {

  // tslint:disable-next-line:no-trailing-whitespace
  // tslint:disable-next-line:max-line-length
  countries: any = {'AL': 'Alabama', 'AK': 'Alaska', 'AZ': 'Arizona', 'AR': 'Arkansas', 'CA': 'California', 'CO': 'Colorado', 'CT': 'Connecticut', 'DE': 'Delaware', 'DC': 'District Of Columbia', 'FL': 'Florida', 'GA': 'Georgia', 'HI': 'Hawaii', 'ID': 'Idaho', 'IL': 'Illinois', 'IN': 'Indiana', 'IA': 'Iowa', 'KS': 'Kansas', 'KY': 'Kentucky', 'LA': 'Louisiana', 'ME': 'Maine', 'MD': 'Maryland', 'MA': 'Massachusetts', 'MI': 'Michigan', 'MN': 'Minnesota', 'MS': 'Mississippi', 'MO': 'Missouri', 'MT': 'Montana', 'NE': 'Nebraska', 'NV': 'Nevada', 'NH': 'New Hampshire', 'NJ': 'New Jersey', 'NM': 'New Mexico', 'NY': 'New York', 'NC': 'NorthCarolina', 'ND': 'North Dakota', 'OH': 'Ohio', 'OK': 'Oklahoma', 'OR': 'Oregon', 'PA': 'Pennsylvania', 'RI': 'Rhode Island', 'SC': 'South Carolina', 'SD': 'South Dakota', 'TN': 'Tennessee', 'TX': 'Texas', 'UT': 'Utah', 'VT': 'Vermont', 'VA': 'Virginia', 'WA': 'Washington', 'WV': 'West Virginia', 'WI': 'Wisconsin', 'WY': 'Wyoming' };
  constructor() {
    console.log('init services');
  }

  getCountries(): Observable<any> {
    // create observable and simulate call api 1 second returning all countries
    // tslint:disable-next-line:prefer-const
    let data = new Observable(observer => {
        let arrayData = [];
        setTimeout(() => {
            Object.keys(this.countries).forEach((key, index) => {
                let aux = {label: this.countries[key], value: key};
                arrayData.push(aux);
            });
            observer.next(arrayData);
        }, 1000);
    });

    return data;
  }

}
