import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CheckboxvalidationComponent } from './checkboxvalidation/checkboxvalidation.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CheckboxvalidationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
