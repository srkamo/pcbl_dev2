import { Component, OnInit } from '@angular/core';
import { Game } from '../game'
import { FormGroup, FormControl } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.scss']
})
export class GameFormComponent implements OnInit {


  opponents = ['CBA Tigers', 'Crooks(2016 Lions)', 'Ironbirds', 'Lookouts', 'Outlaws', 'Platoon', 'Raptors(Warriors)'];

  gameForm = new FormGroup({
    month: new FormControl(),
    day: new FormControl(),
    year: new FormControl(),
    start: new FormControl(),
    opponent: new FormControl(),
    teamScore: new FormControl(),
    opponentScore: new FormControl(),
    location: new FormControl(),
    home: new FormControl(),
    playoff: new FormControl(),

  });

  game;
  date;
  constructor(private data: DataService) { }

  ngOnInit() {
  }

  onSubmit(form){
    this.date = form.month + "-" + form.day + "-" + form.year;
    if(!form.home)
      form.home = false;
    if(!form.playoff)
      form.playoff = false;
    this.game = new Game( this.date, form.start, form.opponent, form.teamScore, form.opponentScore, form.location, form.home, form.playoff); 
    console.log(this.game);
  }

}
