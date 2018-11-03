import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  seasonCol: string[] = ['season', 'record'];
  last3Columns: string[] = ['opponent', 'score'];
  
  seasonsRecord: Object;
  lastThree: Object;
  allTime: Object;

  constructor(private data: DataService) { }

  ngOnInit() {

    this.data.getAllSeasonsAndRecentGames().subscribe(
      data => {
        this.seasonsRecord = data['seasonRecords'];
        this.allTime = data['allTimeRecord'][0];
        this.lastThree = data['recentGames'];
        
       }
      
    );
  }



}
