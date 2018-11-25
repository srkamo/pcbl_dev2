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
  component: HomeComponent,
  runGuardsAndResolvers: 'always'
},
{
  path: 'career',
  component: CareerComponent,
  runGuardsAndResolvers: 'always'
},
{
  path: 'season',
  component: SeasonComponent,
  runGuardsAndResolvers: 'always'
},
{
  path: 'game',
  component: GameComponent,
  runGuardsAndResolvers: 'always'
},
{
  path: 'records',
  component: RecordsComponent,
  runGuardsAndResolvers: 'always'
},
{
  path: 'player',
  component: PlayerComponent,
  runGuardsAndResolvers: 'always'
},

{
  path: 'admin',
  component: AdminComponent,
  runGuardsAndResolvers: 'always'
},

];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
