import { Component, OnInit } from '@angular/core';
import { Game } from '../game'
import { FormGroup, FormControl } from '@angular/forms';
import { DataService } from '../data.service';
import { Season } from '../season';

@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.scss']
})

// export interface season{

//     id: string;
  
// }

export class GameFormComponent implements OnInit {


  opponents = ['CBA Tigers', 'Crooks(2016 Lions)', 'Ironbirds', 'Lookouts', 'Outlaws', 'Platoon', 'Raptors(Warriors)'];
  seasons;

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
    this.data.getAllSeasons().subscribe(
      data => {
        this.seasons = data;
      }
    );

  }

  teams;
  season_id;
  opponent_id;
  selectedSeason(seasonId){
    this.season_id = seasonId;
    this.data.getAllTeams().subscribe(
      data => {
       this.teams = data;
      }
    );
  }

  selectedOpponent(id){
    console.log(id);
    this.opponent_id = id;
  }


  
  gameSeason;
  
  onSubmit(form){
    this.date =  form.year + "-" + form.month + "-" + form.day ;
    if(!form.home)
      form.home = 0;
    else
      form.home = 1;
    if(!form.playoff)
      form.playoff = 0;
    else
      form.playoff = 1;


    this.gameSeason = {id: this.season_id};
    this.opponent_id = {id: form.opponent.id}
    this.game = new Game( this.date, form.start, this.gameSeason, this.season_id, this.opponent_id, form.teamScore, form.opponentScore, form.location, form.home, form.playoff); 
    
    this.data.addGame(this.game).subscribe();

    console.log(this.game);
  }

}
