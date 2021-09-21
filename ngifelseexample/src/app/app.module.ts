import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmailvalidationComponent } from './emailvalidation/emailvalidation.component';

@NgModule({
  declarations: [
    AppComponent,
    EmailvalidationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // NgModel,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
