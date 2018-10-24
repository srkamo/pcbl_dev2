import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {DataSource} from '@angular/cdk/collections';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.scss']
})
export class CareerComponent implements OnInit {

  battingStats: Object;
  pitchingStats: Object;
  careerBattingColumns: string[] = ['Name', 'G', 'AB', 'R', 'H', '2B', '3B', 'HR', 'RBI', 'BB', 'HBP', 'SAC', 'K', 'SB', 'PB', 'CS', 'AVG', 'OBP', 'SLG'];
  careerPitchingColumns: string[] = ['Name', 'G', 'W', 'L', 'T', 'S', 'IP', 'ER', 'R', 'K', 'BB', 'HBP', 'H', 'WP', 'SB', 'PO', 'ERA', 'WHIP' ];
 

  constructor(private data: DataService) { 

  }

  ngOnInit() {
    this.data.getCareerBattingStats().subscribe(
      data =>{
        this.battingStats = data[0];
        this.pitchingStats = data[1];
      }  
      
    ); 
    }

}
