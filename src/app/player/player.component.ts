import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { DataService } from '../data.service';
import { merge, Observable, of as observableOf } from 'rxjs';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';
import { MatPaginator, MatSort, MatTableDataSource, MatOption } from '@angular/material';
import { Router, ActivatedRoute, Params, NavigationEnd} from '@angular/router';//edited for links

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  constructor(private data: DataService, private activatedRoute: ActivatedRoute, private router: Router) {
  this.navigationSubscription = this.router.events.subscribe((e: any) => {
      if(e instanceof NavigationEnd){
        this.ngOnInit();
      }
    }); 
  }

  navigationSubscription;

  playersDrop;
  playersDrop_;
  playerAllBat;
  playerAllPitch;
  playerSeasonBat;
  playerSeasonPitch;

  currPlayer;
  playerId;
  seasonId;
  seasonView;
  battingView;
  isOn;
  isOn_;
  allTime;

  battingButton1;
  pitchingButton1;
  battingButton2;
  pitchingButton2;
  allTimeButton;
  seasonButton;

  seasonsDrop;
  battingStats;
  pitchingStats;
  battingStats_;
  pitchingStats_;

  careerBattingColumns: string[] = ['gameString', 'atBats', 'runs', 'singles', 'doubles', 'triples', 'homeRuns', 'rbis', 'walks', 'hitByPitch', 'sacrifices', 'strikeOuts', 'stolenBases', 'passedBalls', 'caughtStealing', 'battingAverage', 'onBasePercentage', 'sluggingAverage'];
  careerPitchingColumns: string[] = ['gameString', 'wins', 'losses', 'ties', 'saves', 'inningsPitched', 'earnedRuns', 'totalRuns', 'strikeouts', 'walks', 'hitByPitch', 'hits', 'wildPitches', 'stolenBases', 'pickoffs', 'earnedRunAverage', 'walksAndHitsPerInning' ];
  
  seasonBattingColumns: string[] = ['seasonDisplayName', 'atBats', 'runs', 'singles', 'doubles', 'triples', 'homeRuns', 'rbis', 'walks', 'hitByPitch', 'sacrifices', 'strikeOuts', 'stolenBases', 'passedBalls', 'caughtStealing', 'battingAverage', 'onBasePercentage', 'sluggingAverage'];
  seasonPitchingColumns: string[] = ['seasonDisplayName', 'wins', 'losses', 'ties', 'saves', 'inningsPitched', 'earnedRuns', 'totalRuns', 'strikeouts', 'walks', 'hitByPitch', 'hits', 'wildPitches', 'stolenBases', 'pickoffs', 'earnedRunAverage', 'walksAndHitsPerInning' ];
 

  @ViewChild('battingTableSort') public battingTableSort: MatSort;
  @ViewChild('pitchingTableSort') public pitchingTableSort: MatSort;
  @ViewChild('battingTableSort_') public battingTableSort_: MatSort;
  @ViewChild('pitchingTableSort_') public pitchingTableSort_: MatSort;

  ngOnInit() {
    this.seasonsDrop = null;
    this.currPlayer = null;

    this.activatedRoute.queryParams.subscribe(params => {
        this.seasonId = params['seasonId'];
        this.playerId = params['playerId'];
        this.seasonView = params['seasonView'];
        this.battingView = params['battingView'];        
      });

    this.data.getAllPlayers().subscribe(
      data=>{
        this.playersDrop = data;
        this.playersDrop_ = data;
        
      }
    );

    

    //setting batting/pitching
    this.allTimeButton = document.getElementById('allTimeButton');
    this.seasonButton = document.getElementById('seasonButton');
    if(this.seasonView == 1){
      this.allTime = false;

      this.allTimeButton.checked = false;
      this.seasonButton.checked = true;
    }
    else if(this.seasonView == 0){
      this.allTime = true;

      this.allTimeButton.checked = true;
      this.seasonButton.checked = false;
    }
    else{
      this.allTime = false;

      this.allTimeButton.checked = false;
      this.seasonButton.checked = true;
    }

    //setting batting/pitching
    this.battingButton1 = document.getElementById('battingButton1');
    this.pitchingButton1 = document.getElementById('pitchingButton1');
    this.battingButton2 = document.getElementById('battingButton2');
    this.pitchingButton2 = document.getElementById('pitchingButton2');
    if(this.battingView == 1){
      this.isOn = false;
      this.isOn_ = false;

      this.battingButton1.checked = true;
      this.pitchingButton1.checked = false;
      this.battingButton2.checked = true;
      this.pitchingButton2.checked = false;
    }
    else if(this.battingView == 0){
      this.isOn = true;
      this.isOn_ = true;

      this.battingButton1.checked = false;
      this.pitchingButton1.checked = true;
      this.battingButton2.checked = false;
      this.pitchingButton2.checked = true;
    }
    else{
      this.isOn = false;
      this.isOn_ = false;

      this.battingButton1.checked = true;
      this.pitchingButton1.checked = false;
      this.battingButton2.checked = true;
      this.pitchingButton2.checked = false;
    }


    this.data.getStatsGameBySeasonPlayer(this.seasonId, this.playerId).subscribe(
      data => {
        this.battingStats = new MatTableDataSource(data['gameBatting']);
        this.battingStats.sort = this.battingTableSort;
        this.pitchingStats = new MatTableDataSource(data['gamePitching']);
        this.pitchingStats.sort = this.pitchingTableSort;
        this.playerSeasonBat = data['totalBatting'][0];
        this.playerSeasonPitch = data['totalPitching'][0];
        
      }
    );

    this.data.getStatsSeasonByPlayer(this.playerId).subscribe(
      data => {
        this.battingStats_ = new MatTableDataSource(data['seasonBatting']);
        this.battingStats_.sort = this.battingTableSort_;
        this.pitchingStats_ = new MatTableDataSource(data['seasonPitching']);
        this.pitchingStats_.sort = this.pitchingTableSort_;
        this.playerAllBat = data['allTimeBatting'][0];
        this.playerAllPitch = data['allTimePitching'][0];
      }
    );

    this.data.getPlayerInfo(this.playerId).subscribe(
      data => {
        this.currPlayer = data;
      }
    );

  }


callBackSeasonByPlayer(player){
    this.playerId = player.id;
    this.currPlayer = player;
    this.data.getAllSeasonsForPlayer(player.id).subscribe(
      data => {
        this.seasonsDrop = data;
      }
    );
  }

  callBackGameBySeasonPlayer(id){
    this.seasonId = id;

    this.data.getStatsGameBySeasonPlayer(this.seasonId, this.playerId).subscribe(
      data => {
        this.battingStats = new MatTableDataSource(data['gameBatting']);
        this.battingStats.sort = this.battingTableSort;
        this.pitchingStats = new MatTableDataSource(data['gamePitching']);
        this.pitchingStats.sort = this.pitchingTableSort;
        this.playerSeasonBat = data['totalBatting'][0];
        this.playerSeasonPitch = data['totalPitching'][0];
        
      }
    );
  }

  callBackAllSeasonByPlayer(player){
    this.currPlayer = player;
    this.data.getStatsSeasonByPlayer(player.id).subscribe(
      data => {
        this.battingStats_ = new MatTableDataSource(data['seasonBatting']);
        this.battingStats_.sort = this.battingTableSort_;
        this.pitchingStats_ = new MatTableDataSource(data['seasonPitching']);
        this.pitchingStats_.sort = this.pitchingTableSort_;
        this.playerAllBat = data['allTimeBatting'][0];
        this.playerAllPitch = data['allTimePitching'][0];
        
      }
    );
  }

  ngOnDestroy(){
    if(this.navigationSubscription){
      this.navigationSubscription.unsubscribe();
    }
  }


}
