import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DaysComponent } from './days/days.component';
import { HeaderComponent } from './header/header.component';
import { ActivityComponent } from './activity/activity.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DaycardComponent } from './daycard/daycard.component';
import { WeekcardComponent } from './weekcard/weekcard.component';
import { DisplaychartComponent } from './displaychart/displaychart.component';
import { AnalysisComponent } from './analysis/analysis.component';

@NgModule({
  declarations: [
    AppComponent,
    DaysComponent,
    HeaderComponent,
    ActivityComponent,
    DaycardComponent,
    WeekcardComponent,
    DisplaychartComponent,
    AnalysisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule,
    ReactiveFormsModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
