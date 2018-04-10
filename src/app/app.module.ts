import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { DropwdownComponent } from './dropwdown/dropwdown.component';

// Services
import { CountriesService } from './services/countries.service';

// Extras
import {DropdownModule} from 'primeng/primeng';
import {MultiSelectModule} from 'primeng/primeng';

@NgModule({
  declarations: [
    AppComponent,
    DropwdownComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DropdownModule,
    MultiSelectModule,
    BrowserAnimationsModule
  ],
  providers: [CountriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
