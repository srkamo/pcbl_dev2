import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabsComponent } from './tabs/tabs.component';
import { HomeComponent } from './home/home.component';
import { CareerComponent } from './career/career.component';
import { RecordsComponent } from './records/records.component';
import { GameComponent } from './game/game.component';
import { SeasonComponent } from './season/season.component';
import { PlayerComponent } from './player/player.component';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule, MatSortModule, MatFormFieldModule} from '@angular/material';
import {MatInputModule } from '@angular/material';
import { MatProgressSpinnerModule } from '@angular/material';
import { MatSelectModule } from '@angular/material/select';
import { AdminComponent } from './admin/admin.component';
import { PlayerFormComponent } from './player-form/player-form.component';
import { GameFormComponent } from './game-form/game-form.component';
import { TeamFormComponent } from './team-form/team-form.component';
import { BattingStatsFormComponent } from './batting-stats-form/batting-stats-form.component';
import { SeasonFormComponent } from './season-form/season-form.component';
import { PitchingStatsFormComponent } from './pitching-stats-form/pitching-stats-form.component';
import { UpdatePlayerFormComponent } from './update-player-form/update-player-form.component';
import { UpdateTeamFormComponent } from './update-team-form/update-team-form.component';
import { UpdateBattingStatFormComponent } from './update-batting-stat-form/update-batting-stat-form.component';
import { UpdatePitchingStatFormComponent } from './update-pitching-stat-form/update-pitching-stat-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    HomeComponent,
    CareerComponent,
    RecordsComponent,
    GameComponent,
    SeasonComponent,
    PlayerComponent,
    AdminComponent,
    PlayerFormComponent,
    GameFormComponent,
    TeamFormComponent,
    BattingStatsFormComponent,
    SeasonFormComponent,
    PitchingStatsFormComponent,
    UpdatePlayerFormComponent,
    UpdateTeamFormComponent,
    UpdateBattingStatFormComponent,
    UpdatePitchingStatFormComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule ,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
