import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CareerComponent } from './career/career.component'; 
import { GameComponent } from './game/game.component'; 
import { HomeComponent } from './home/home.component'; 
import { PlayerComponent } from './player/player.component'; 
import { RecordsComponent } from './records/records.component'; 
import { SeasonComponent } from './season/season.component'; 
import { AdminComponent } from './admin/admin.component'

const routes: Routes = [
{
  path: '',
  component: HomeComponent
},
{
  path: 'career',
  component: CareerComponent
},
{
  path: 'season',
  component: SeasonComponent
},
{
  path: 'game',
  component: GameComponent
},
{
  path: 'records',
  component: RecordsComponent
},
{
  path: 'player',
  component: PlayerComponent
},

{
  path: 'admin',
  component: AdminComponent
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
