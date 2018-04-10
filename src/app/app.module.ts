import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DropwdownComponent } from './dropwdown/dropwdown.component';


@NgModule({
  declarations: [
    AppComponent,
    DropwdownComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
