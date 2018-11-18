import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DataService } from '../data.service';
import { formatCurrency } from '@angular/common';

@Component({
  selector: 'app-update-player-form',
  templateUrl: './update-player-form.component.html',
  styleUrls: ['./update-player-form.component.scss']
})
export class UpdatePlayerFormComponent implements OnInit {

  players;// = ['Miller, Mike', 'Asmus, Jeff', 'Baer, Alex'];
  seasons;
  constructor(private data : DataService) { }

  ngOnInit() {

    this.data.getAllSeasons().subscribe(
      data => {
        this.seasons = data;
      }
    );

    this.data.getAllPlayers().subscribe(
      data => {
        this.players = data;
        
      }
    );

  }

  season_id;
  selectedSeason(seasonId){
    this.season_id = seasonId;
    
    console.log("seasonId: " + seasonId);
  }

  updatePlayerForm = new FormGroup({
    players: new FormControl(), 
  });

  /*
  Update Players for Season:
{
    "season_id": 999,
    "player_ids": [901,902,904]
}
   */
  updatePlayers;
  player_ids = new Array();
  onSubmit(form){
    
    for(let p of form.players){
      this.player_ids.push(p.id);
    }
    
    this.updatePlayers = {"season_id": this.season_id, "player_ids": this.player_ids};
    this.data.updateSeasonPlayer(this.updatePlayers).subscribe();
    this.player_ids = new Array();
    this.updatePlayerForm.reset();
    console.log(this.updatePlayers);
  }

 

}
