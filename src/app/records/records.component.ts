import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../data.service';
import { merge, Observable, of as observableOf } from 'rxjs';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';
import { MatPaginator, MatSort, MatTableDataSource, MatOption } from '@angular/material';

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.scss']
})
export class RecordsComponent implements OnInit {


  battingCol = [ 'recordString', 'recordValue'];
 

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

  constructor(private data: DataService) { }

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

}
