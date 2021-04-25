import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DaysComponent } from './days/days.component';
import { HeaderComponent } from './header/header.component';
import { ActivityComponent } from './activity/activity.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DaycardComponent } from './daycard/daycard.component';

@NgModule({
  declarations: [
    AppComponent,
    DaysComponent,
    HeaderComponent,
    ActivityComponent,
    DaycardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
