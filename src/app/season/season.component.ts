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
  careerBattingColumns: string[] = ['Name', 'numGames', 'AB', 'R', 'H', '2B', '3B', 'HR', 'RBI', 'BB', 'HBP', 'SAC', 'K', 'SB', 'PB', 'CS', 'AVG', 'OBP', 'SLG'];
  careerPitchingColumns: string[] = ['Name', 'numGames', 'W', 'L', 'T', 'S', 'IP', 'ER', 'R', 'K', 'BB', 'HBP', 'H', 'WP', 'SB', 'PO', 'ERA', 'WHIP'];

  dataSource;

  selected = "";
  @ViewChild('battingTableSort') public battingTableSort: MatSort;
  @ViewChild('pitchingTableSort') public pitchingTableSort: MatSort;

  constructor(private data: DataService) { }


  ngOnInit() {

    this.data.getStatsBySeason(0).subscribe(
      data => {
     
        this.dropDown = data[0];
        this.batting = new MatTableDataSource(data[1]);
        this.batting.sort = this.battingTableSort;
        this.pitching = new MatTableDataSource(data[2]);
        this.pitching.sort = this.pitchingTableSort;
        
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
