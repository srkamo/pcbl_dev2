import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { DataService } from '../data.service';
import { merge, Observable, of as observableOf } from 'rxjs';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';
import { MatPaginator, MatSort, MatTableDataSource, MatOption } from '@angular/material';
import { Router, ActivatedRoute, Params, NavigationEnd} from '@angular/router';

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.scss']
})
export class RecordsComponent implements OnInit, OnDestroy {
  navigationSubscription;

  AllTimeCol = [ 'recordString', 'recordValue'];
 
  seasonCol = [ 'recordString', 'recordValue', 'seasonString'];
  gameCol = [ 'recordString',  'gameString', 'recordValue'];


  homeruns;
  games;
  hits;
  rbis;
  mvp;
  battingAverage;
  doubles;
  walks;
  onBasePercentage;
  hitByPitch;
  runs;
  slug;
  triples;
  stolenBases;

  cyYoung;
  gamesPitched;
  whip;
  strikeOuts;
  era;
  wins;
  saves;


  allTime;
  dropDown = [{"id": 1, "value": "All Time"}, {"id": 2, "value": "Single Season"}, {"id": 3, "value": "Single Game"}];

  allTimeHide = true;
  seasonHide = true;
  gameHide = true;
  battingHide = false;


  season_hr;
  season_mvp;
  season_hbp;
  season_rbis;
  season_slug;
  season_runs;
  season_sb;
  season_obp;
  season_2r;
  season_ba;
  season_3r;
  season_walks;
  season_hits;

  season_whip;
  season_wins;
  season_strikeouts;
  season_saves;
  season_era;
  season_cy_young;
  

  game_rbis;
  game_homeruns;
  game_3r;
  game_2r;
  game_stolenbases;
  game_hits;
  game_runs;
  game_walks;
  game_hitbypitch;

  game_strikeouts;

 
  constructor(private data: DataService, private router: Router) {
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      if(e instanceof NavigationEnd){
        this.ngOnInit();
      }
    });
  }

  ngOnInit() {
    this.data.getAllTimeRecordsBatting().subscribe(
     data => {
      this.homeruns = data['all_time_homeruns'];
      this.games = data['all_time_games'];
      this.hits = data['all_time_hits'];
      this.rbis = data['all_time_rbis'];
      this.mvp = data['all_time_mvp'];
      this.battingAverage = data['all_time_batting_average'];
      this.doubles = data['all_time_doubles'];
      this.walks = data['all_time_walks'];
      this.onBasePercentage = data['all_time_on_base_percentage'];
      this.hitByPitch = data['all_time_hitbypitch'];
      this.runs = data['all_time_runs'];
      this.slug = data['all_time_slugging_percentage'];
      this.triples = data['all_time_triples'];
      this.stolenBases = data['all_time_stolenbases'];
     }
    );

    this.data.getAllTimeRecordsPitching().subscribe(
      data=>{
        this.cyYoung = data['all_time_cy_young'];
        this.gamesPitched = data['all_time_games_pitched'];
        this.whip = data['all_time_whip'];
        this.strikeOuts = data['all_time_strikeouts'];
        this.era = data['all_time_era'];
        this.wins = data['all_time_wins'];
        this.saves = data['all_time_saves'];
      }
    );
  }

  getAllTimeRecordsPitching(){
    this.data.getAllTimeRecordsPitching().subscribe(
      data=>{
        this.cyYoung = data['all_time_cy_young'];
        this.gamesPitched = data['all_time_games_pitched'];
        this.whip = data['all_time_whip'];
        this.strikeOuts = data['all_time_strikeouts'];
        this.era = data['all_time_era'];
        this.wins = data['all_time_wins'];
        this.saves = data['all_time_saves'];
      }
    );
  }

  callBack(id){

    if(id == 1){
      console.log("show all time table");
      this.allTimeHide = false;
      this.seasonHide = true;
      this.gameHide = true;
    }

    else if(id == 2){
      this.allTimeHide = true;
      this.seasonHide = false;
      this.gameHide = true;
      this.data.getSeasonRecordsBatting().subscribe(
        data=>{
          this.season_hr = data['single_season_homeruns'];
          this.season_mvp = data['single_season_mvp'];
          this.season_hbp = data['single_season_hitbypitch'];
          this.season_rbis = data['single_season_rbis'];
          this.season_slug = data['single_season_slugging_percentage'];
          this.season_runs = data['single_season_runs'];
          this.season_sb = data['single_season_stolenbases'];
          this.season_obp = data['single_season_on_base_percentage'];
          this.season_2r = data['single_season_doubles'];
          this.season_ba = data['single_season_batting_average'];
          this.season_3r = data['single_season_triples'];
          this.season_walks = data['single_season_walks'] ;
          this.season_hits = data['single_season_hits'];
        }
      );

      this.data.getSeasonRecordsPitching().subscribe(
        data=>{
          this.season_whip = data['single_season_whip'];
          this.season_wins = data['single_season_wins'];
          this.season_strikeouts = data['single_season_strikeouts'];
          this.season_saves = data['single_season_saves'];
          this.season_era = data['single_season_era'];
          this.season_cy_young =  data['single_season_cy_young'];
        }
      );
    }

    else if(id == 3){
      this.allTimeHide = true;
      this.seasonHide = true;
      this.gameHide = false;
      
      this.data.getGameRecordsBatting().subscribe(
        data => {
          this.game_rbis = data['single_game_rbis'];
          this.game_homeruns = data['single_game_homeruns'];
          this.game_3r = data['single_game_triples'];
          this.game_2r = data['single_game_doubles'];
          this.game_stolenbases = data['single_game_stolenbases'];
          this.game_hits = data['single_game_hits'];
          this.game_runs = data['single_game_runs'];
          this.game_walks = data['single_game_walks'];
          this.game_hitbypitch = data['single_game_hitbypitch'];
        }
      );

      this.data.getGameRecordsPitching().subscribe(
        data =>{
          this.game_strikeouts = data['single_game_strikeouts'];
        }
      );
      
    }


  }

  toggleBatPitch(){
    this.battingHide = !this.battingHide;
  }

  allTimeRadio(){
    this.allTimeHide = false;
      this.seasonHide = true;
      this.gameHide = true;
  }

  SingleSeasonRadio(){
    this.allTimeHide = true;
      this.seasonHide = false;
      this.gameHide = true;
      this.data.getSeasonRecordsBatting().subscribe(
        data=>{
          this.season_hr = data['single_season_homeruns'];
          this.season_mvp = data['single_season_mvp'];
          this.season_hbp = data['single_season_hitbypitch'];
          this.season_rbis = data['single_season_rbis'];
          this.season_slug = data['single_season_slugging_percentage'];
          this.season_runs = data['single_season_runs'];
          this.season_sb = data['single_season_stolenbases'];
          this.season_obp = data['single_season_on_base_percentage'];
          this.season_2r = data['single_season_doubles'];
          this.season_ba = data['single_season_batting_average'];
          this.season_3r = data['single_season_triples'];
          this.season_walks = data['single_season_walks'] ;
          this.season_hits = data['single_season_hits'];
        }
      );

      this.data.getSeasonRecordsPitching().subscribe(
        data=>{
          this.season_whip = data['single_season_whip'];
          this.season_wins = data['single_season_wins'];
          this.season_strikeouts = data['single_season_strikeouts'];
          this.season_saves = data['single_season_saves'];
          this.season_era = data['single_season_era'];
          this.season_cy_young =  data['single_season_cy_young'];
        }
      );
  }

  SingleGameRadio(){
    this.allTimeHide = true;
    this.seasonHide = true;
    this.gameHide = false;
    
    this.data.getGameRecordsBatting().subscribe(
      data => {
        this.game_rbis = data['single_game_rbis'];
        this.game_homeruns = data['single_game_homeruns'];
        this.game_3r = data['single_game_triples'];
        this.game_2r = data['single_game_doubles'];
        this.game_stolenbases = data['single_game_stolenbases'];
        this.game_hits = data['single_game_hits'];
        this.game_runs = data['single_game_runs'];
        this.game_walks = data['single_game_walks'];
        this.game_hitbypitch = data['single_game_hitbypitch'];
      }
    );

    this.data.getGameRecordsPitching().subscribe(
      data =>{
        this.game_strikeouts = data['single_game_strikeouts'];
      }
    );

  }
 ngOnDestroy(){
    if(this.navigationSubscription){
      this.navigationSubscription.unsubscribe();
    }
}
}