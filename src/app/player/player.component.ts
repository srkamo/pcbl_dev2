import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../data.service';
import { merge, Observable, of as observableOf } from 'rxjs';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';
import { MatPaginator, MatSort, MatTableDataSource, MatOption } from '@angular/material';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  constructor(private data: DataService) { }

  playerId = 1;
  seasonId = 1;

  playersDrop;
  playersDrop_;
  playerAllBat;
  playerAllPitch;

  currPlayer;


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

    this.data.getAllPlayers().subscribe(
      data=>{
        this.playersDrop = data;
        this.playersDrop_ = data;
        //console.log("[0].firstName: " + this.playersDrop[0].firstName)
      }
    );

  }

//callBackSeasonByPlayer callBackSeasonByPlayer
callBackSeasonByPlayer(player){
    this.playerId = player.id;
    this.currPlayer = player;
    this.data.getAllSeasonsForPlayer(player.id).subscribe(
      data => {
        this.seasonsDrop = data;
        // this.playerAllBat = data[1];
        // this.playerAllPitch = data[2];
        
      }
    );
  }

  callBackGameBySeasonPlayer(id){
    this.seasonId = id;

    this.data.getStatsGameBySeasonPlayer(this.seasonId, this.playerId).subscribe(
      data => {
        // this.battingStats = data['gameBatting'];
        // this.pitchingStats = data['gamePitching'];
        this.battingStats = new MatTableDataSource(data['gameBatting']);
        this.battingStats.sort = this.battingTableSort;
        this.pitchingStats = new MatTableDataSource(data['gamePitching']);
        this.pitchingStats.sort = this.pitchingTableSort;
        
      }
    );
  }

  callBackAllSeasonByPlayer(player){
    this.currPlayer = player;
    this.data.getStatsSeasonByPlayer(player.id).subscribe(
      data => {
        // this.battingStats = data['gameBatting'];
        // this.pitchingStats = data['gamePitching'];
        this.battingStats_ = new MatTableDataSource(data['seasonBatting']);
        this.battingStats_.sort = this.battingTableSort_;
        this.pitchingStats_ = new MatTableDataSource(data['seasonPitching']);
        this.pitchingStats_.sort = this.pitchingTableSort_;
        
      }
    );
  }


}
