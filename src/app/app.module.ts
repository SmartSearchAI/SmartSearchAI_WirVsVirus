import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import {MatRadioModule} from '@angular/material/radio';
import {MatSliderModule} from '@angular/material/slider';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { AngularFireModule } from 'angularfire2'
import { AngularFireDatabaseModule} from 'angularfire2/database'
import {environment} from "../environments/environment";

import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';;
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AgileFluencyQuestionairComponent} from './AgileFluency/Agile_Fluency.Questionair.component';
import {RankComponent} from './Question/Rank/question.rank.component';
import {CompareComponent} from './Question/Compare/question.compare.component';
import {RankingTableComponent} from './Question/RankingTable/ranking.table.component';
import {ScorePieChartComponent} from './Question/RankingCharts/RankingPie/score.piechart.component'
import {ScoreSpidergraphComponent} from './Question/RankingCharts/RankingSpider/score.spidergraph.component'
@NgModule({
  declarations: [
    AppComponent,
    AgileFluencyQuestionairComponent,
    RankComponent,
    CompareComponent,
    RankingTableComponent,
    ScorePieChartComponent,
    ScoreSpidergraphComponent
  ],
  imports: [
    BrowserModule,
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
