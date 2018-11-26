import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { DataService } from '../data.service';
import { MatPaginator, MatSort, MatTableDataSource, MatOption } from '@angular/material';
import { DataSource} from '@angular/cdk/collections';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute, Params, NavigationEnd} from '@angular/router';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.scss']
})
export class CareerComponent implements OnInit, OnDestroy {
  navigationSubscription;

  battingStats;
  battingAllTime;
  pitchingStats;
  pitchingAllTime;

  careerBattingColumns: string[] = ['displayName', 'numGames', 'atBats', 'runs', 'singles', 'doubles', 'triples', 'hits', 'homeRuns', 'rbis', 'walks', 'hitByPitch', 'sacrifices', 'strikeOuts', 'stolenBases', 'passedBalls', 'caughtStealing', 'battingAverage', 'onBasePercentage', 'sluggingAverage'];
  careerPitchingColumns: string[] = ['displayName', 'numGames', 'wins', 'losses', 'ties', 'saves', 'inningsPitched', 'earnedRuns', 'totalRuns', 'strikeouts', 'walks', 'hitByPitch', 'hits', 'wildPitches', 'stolenBases', 'pickoffs', 'earnedRunAverage', 'walksAndHitsPerInning' ];
 
  @ViewChild('battingTableSort') public battingTableSort: MatSort;
  @ViewChild('pitchingTableSort') public pitchingTableSort: MatSort;
  constructor(private data: DataService, private router: Router) {
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      if(e instanceof NavigationEnd){
        this.ngOnInit();
      }
    });
  }

  ngOnInit() {
    this.data.getCareerBattingPitchingStats().subscribe(
      data =>{
        this.battingStats = new MatTableDataSource( data['playerBatting']);
        this.battingStats.sort = this.battingTableSort;
        this.battingAllTime = data['totalBatting'][0];
        this.pitchingStats  = new MatTableDataSource( data['playerPitching']);
        this.pitchingStats.sort = this.pitchingTableSort;
        this.pitchingAllTime = data['totalPitching'][0];
      }  
    ); 
  }

  ngOnDestroy(){
    if(this.navigationSubscription){
      this.navigationSubscription.unsubscribe();
    }
  }
}
