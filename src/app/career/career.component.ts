import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../data.service';
import { MatPaginator, MatSort, MatTableDataSource, MatOption } from '@angular/material';
import {DataSource} from '@angular/cdk/collections';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.scss']
})
export class CareerComponent implements OnInit {

  battingStats;
  battingAllTime;
  pitchingStats;
  pitchingAllTime;

  careerBattingColumns: string[] = ['displayName', 'numGames', 'atBats', 'runs', 'singles', 'doubles', 'triples', 'homeRuns', 'rbis', 'walks', 'hitByPitch', 'sacrifices', 'strikeOuts', 'stolenBases', 'passedBalls', 'caughtStealing', 'battingAverage', 'onBasePercentage', 'sluggingAverage'];
  careerPitchingColumns: string[] = ['displayName', 'numGames', 'wins', 'losses', 'ties', 'saves', 'inningsPitched', 'earnedRuns', 'totalRuns', 'strikeouts', 'walks', 'hitByPitch', 'hits', 'wildPitches', 'stolenBases', 'pickoffs', 'earnedRunAverage', 'walksAndHitsPerInning' ];
 
  @ViewChild('battingTableSort') public battingTableSort: MatSort;
  @ViewChild('pitchingTableSort') public pitchingTableSort: MatSort;
  constructor(private data: DataService) { 

  }

  ngOnInit() {
    this.data.getCareerBattingPitchingStats().subscribe(
      data =>{
        this.battingStats = new MatTableDataSource( data[0]);
        this.battingStats.sort = this.battingTableSort;
        this.battingAllTime = data[1][0];
        this.pitchingStats  = new MatTableDataSource( data[2]);
        this.pitchingStats.sort = this.pitchingTableSort;
        this.pitchingAllTime = data[3][0];
      }  
    ); 
    }

}
