import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { DataService } from '../data.service';
import { merge, Observable, of as observableOf } from 'rxjs';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';
import { MatPaginator, MatSort, MatTableDataSource, MatOption } from '@angular/material';
import { Router, ActivatedRoute, Params, NavigationEnd} from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit, OnDestroy {
  navigationSubscription;


  constructor(private data: DataService, private router: Router){ 
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      if(e instanceof NavigationEnd){
        this.ngOnInit();
      }
    });
  }

  seasonsDrop;
  gamesDrop;
  battingStats;
  battingAllTime;
  pitchingStats;
  pitchingAllTime;
  gameInfo;
  gameSel;


  seasonId = 1;
  gameId = 1;

  careerBattingColumns: string[] = ['displayName', 'atBats', 'runs', 'singles', 'doubles', 'triples', 'homeRuns', 'rbis', 'walks', 'hitByPitch', 'sacrifices', 'strikeOuts', 'stolenBases', 'passedBalls', 'caughtStealing', 'battingAverage', 'onBasePercentage', 'sluggingAverage'];
  careerPitchingColumns: string[] = ['displayName',  'wins', 'losses', 'ties', 'saves', 'inningsPitched', 'earnedRuns', 'totalRuns', 'strikeouts', 'walks', 'hitByPitch', 'hits', 'wildPitches', 'stolenBases', 'pickoffs', 'earnedRunAverage', 'walksAndHitsPerInning' ];
 
  @ViewChild('battingTableSort') public battingTableSort: MatSort;
  @ViewChild('pitchingTableSort') public pitchingTableSort: MatSort;


  ngOnInit() {
    this.data.getAllSeasons().subscribe(
      data => {
        this.seasonsDrop = data;
      }
    );

    this.gamesDrop = null;
    this.battingStats = null;
    this.battingAllTime = null;
    this.pitchingStats = null;
    this.pitchingAllTime = null;
    this.gameInfo = null;
    this.gameSel = false;

  }

  callBackGames(id) {
    
    this.data.getStatsBySeasonGame(this.seasonId,id).subscribe(
      data => {
        this.battingStats = new MatTableDataSource( data['playerBatting']);
        this.battingStats.sort = this.battingTableSort;
        this.pitchingStats = new MatTableDataSource( data['playerPitching']);
        this.pitchingStats.sort = this.pitchingTableSort;
        this.pitchingAllTime = data['totalPitching'][0];
        this.battingAllTime = data['totalBatting'][0];
        this.gameInfo = data['gameInfo'][0];
        
      }
    );
   
  }

  callBackGetGamesBySeason(id) {
    this.seasonId = id;
    this.data.getGamesBySeason(id).subscribe(
      data => {
       this.gamesDrop = data;
      }
    );
  }

  ngOnDestroy(){
    if(this.navigationSubscription){
      this.navigationSubscription.unsubscribe();
    }
  }
}
