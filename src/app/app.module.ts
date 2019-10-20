import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import {FaIconLibrary, FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {MatRadioModule} from '@angular/material/radio';
import {MatSliderModule} from '@angular/material/slider';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import * as $ from 'jquery';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MSTracerComponent } from './mstracer/app.component.mstracer';
import {IntroductionComponent} from './introduction/app.component.introduction';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { QuoteComponent } from './quote/quote.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { MoodwelcomeComponent } from './moodwelcome/moodwelcome.component';
import { HWPLDashboardComponent } from './HWPL/HWPL_Dashboard/HWPL_Dashboard_component';

@NgModule({
  declarations: [
    AppComponent,
    MSTracerComponent,
    IntroductionComponent,
    UserProfileComponent,
    DashboardComponent,
    WelcomeComponent,
    QuoteComponent,
    MoodwelcomeComponent,
    HWPLDashboardComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatRadioModule,
    MatSliderModule,
    MatProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
