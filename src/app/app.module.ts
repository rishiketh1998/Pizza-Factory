import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PizzaFactoryComponent } from './pizza-factory/pizza-factory.component';

@NgModule({
  declarations: [
    AppComponent,
    PizzaFactoryComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
