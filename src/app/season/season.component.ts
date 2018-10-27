import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../data.service';
import { merge, Observable, of as observableOf } from 'rxjs';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';
import { MatPaginator, MatSort, MatTableDataSource, MatOption } from '@angular/material';

@Component({
  selector: 'app-season',
  templateUrl: './season.component.html',
  styleUrls: ['./season.component.scss']
})
export class SeasonComponent implements OnInit {

  batting;
  pitching;
  dropDown;

  pitchingAllTime;
  battingAllTime;
  careerBattingColumns: string[] = ['displayName', 'numGames','atBats', 'runs', 'singles', 'doubles', 'triples', 'homeRuns', 'rbis', 'walks', 'hitByPitch', 'sacrifices', 'strikeOuts', 'stolenBases', 'passedBalls', 'caughtStealing', 'battingAverage', 'onBasePercentage', 'sluggingAverage'];
  careerPitchingColumns: string[] = ['displayName',  'numGames','wins', 'losses', 'ties', 'saves', 'inningsPitched', 'earnedRuns', 'totalRuns', 'strikeouts', 'walks', 'hitByPitch', 'hits', 'wildPitches', 'stolenBases', 'pickoffs', 'earnedRunAverage', 'walksAndHitsPerInning' ];
 
  dataSource;

  selected = "";
  @ViewChild('battingTableSort') public battingTableSort: MatSort;
  @ViewChild('pitchingTableSort') public pitchingTableSort: MatSort;

  constructor(private data: DataService) { }


  ngOnInit() {

    this.data.getStatsBySeason(1).subscribe(
      data => {
     
        this.dropDown = data[0];
        this.batting = new MatTableDataSource(data[1]);
        this.batting.sort = this.battingTableSort;
        this.pitching = new MatTableDataSource(data[3]);
        this.pitching.sort = this.pitchingTableSort;
        this.pitchingAllTime = data[4][0];
        this.battingAllTime = data[2][0];
        
      }
    );
    
    
  }

  callBack(id) {
    
    this.data.getStatsBySeason(id).subscribe(
      data => {
        this.batting = new MatTableDataSource(data[1]);
        this.pitching = new MatTableDataSource(data[2]);
        this.batting.sort = this.battingTableSort;
        this.pitching.sort = this.pitchingTableSort;
        
      }
    );
   
  }

}
