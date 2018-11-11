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
