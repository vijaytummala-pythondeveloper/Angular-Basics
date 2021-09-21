import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// to use ngModel we have to add this
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CheckboxvalidationComponent } from './checkboxvalidation/checkboxvalidation.component';
import { NgModelComponent } from './ng-model/ng-model.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CheckboxvalidationComponent,
    NgModelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
