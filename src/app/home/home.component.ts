import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { DataService } from '../data.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  navigationSubscription;

  seasonCol: string[] = ['season', 'record'];
  last3Columns: string[] = ['opponent', 'score'];
  
  seasonsRecord: Object;
  lastThree: Object;
  allTime: Object;

  constructor(private data: DataService, private router: Router) { 
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      if(e instanceof NavigationEnd){
        this.ngOnInit();
      }
    });

  }

  ngOnInit() {

    this.data.getAllSeasonsAndRecentGames().subscribe(
      data => {
        this.seasonsRecord = data['seasonRecords'];
        this.allTime = data['allTimeRecord'][0];
        this.lastThree = data['recentGames'];
        
       }
      
    );
  }

  ngOnDestroy(){
    if(this.navigationSubscription){
      this.navigationSubscription.unsubscribe();
    }

  }
}
