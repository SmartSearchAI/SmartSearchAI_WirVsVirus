import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import {FaIconLibrary, FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {MatRadioModule} from '@angular/material/radio';
import {MatSliderModule} from '@angular/material/slider';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { AngularFireModule } from 'angularfire2'
import { AngularFireDatabaseModule} from 'angularfire2/database'
import * as $ from 'jquery';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MSTracerComponent } from './mstracer/app.component.mstracer';
import {IntroductionComponent} from './introduction/app.component.introduction';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { QuoteComponent } from './quote/quote.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MoodwelcomeComponent } from './moodwelcome/moodwelcome.component';
import { HWPLDashboardComponent } from './HWPL/HWPL_Dashboard/HWPL_Dashboard_component';
import { DisplayDiaryComponent } from './display-diary/display-diary.component';
import {environment} from "../environments/environment";

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
    HWPLDashboardComponent,
    DisplayDiaryComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatRadioModule,
    MatSliderModule,
    MatProgressBarModule,
    AngularFireModule.initializeApp(environment.firebase, "fightclub-20"),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
