import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../data.service';
import { merge, Observable, of as observableOf } from 'rxjs';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';
import { MatPaginator, MatSort, MatTableDataSource, MatOption } from '@angular/material';
import {Router, ActivatedRoute, Params} from '@angular/router';//edited for links

@Component({
  selector: 'app-season',
  templateUrl: './season.component.html',
  styleUrls: ['./season.component.scss']
})
export class SeasonComponent implements OnInit {

  batting;
  pitching;
  dropDown;
  seasonId; //edited for links

  pitchingAllTime;
  battingAllTime;
  careerBattingColumns: string[] = ['displayName', 'numGames','atBats', 'runs', 'singles', 'doubles', 'triples', 'homeRuns', 'rbis', 'walks', 'hitByPitch', 'sacrifices', 'strikeOuts', 'stolenBases', 'passedBalls', 'caughtStealing', 'battingAverage', 'onBasePercentage', 'sluggingAverage'];
  careerPitchingColumns: string[] = ['displayName',  'numGames','wins', 'losses', 'ties', 'saves', 'inningsPitched', 'earnedRuns', 'totalRuns', 'strikeouts', 'walks', 'hitByPitch', 'hits', 'wildPitches', 'stolenBases', 'pickoffs', 'earnedRunAverage', 'walksAndHitsPerInning' ];
 
  dataSource;

  selected = "";
  @ViewChild('battingTableSort') public battingTableSort: MatSort;
  @ViewChild('pitchingTableSort') public pitchingTableSort: MatSort;

  constructor(private data: DataService, private activatedRoute: ActivatedRoute) { } //edited for links


  ngOnInit() {

    //edited for links
    this.activatedRoute.queryParams.subscribe(params => {
        this.seasonId = params['seasonId'];
      });


    if(this.seasonId == null){
      this.seasonId = 1;
    }
    this.data.getStatsBySeason(this.seasonId).subscribe(
      data => {
        this.dropDown = data['seasonsDropdown'];
        this.batting = new MatTableDataSource(data['playerBatting']);
        this.batting.sort = this.battingTableSort;
        this.pitching = new MatTableDataSource(data['playerPitching']);
        this.pitching.sort = this.pitchingTableSort;
        this.pitchingAllTime = data['seasonPitching'][0];
        this.battingAllTime = data['totalBatting'][0];
        
        }
      );
    //end of editted for links   
    
  }

  callBack(id) {
    this.seasonId = id;
    this.data.getStatsBySeason(id).subscribe(
      data => {
        this.batting = new MatTableDataSource(data['playerBatting']);
        this.pitching = new MatTableDataSource(data['playerPitching']);
        this.batting.sort = this.battingTableSort;
        this.pitching.sort = this.pitchingTableSort;
        
      }
    );
   
  }

}
