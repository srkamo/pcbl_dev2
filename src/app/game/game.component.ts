import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../data.service';
import { merge, Observable, of as observableOf } from 'rxjs';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';
import { MatPaginator, MatSort, MatTableDataSource, MatOption } from '@angular/material';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {



  constructor(private data: DataService) { }



  ngOnInit() {
    
    
  }


}
