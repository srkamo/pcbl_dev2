import { Component, OnInit } from '@angular/core';
import { PitchingStats } from '../pitching-stats'
import { FormGroup, FormControl } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-pitching-stats-form',
  templateUrl: './pitching-stats-form.component.html',
  styleUrls: ['./pitching-stats-form.component.scss']
})
export class PitchingStatsFormComponent implements OnInit {

  results = ['No Decision', 'Win', 'Loss', 'Save', 'Tie'];
  players;// = ['Miller, Mike', 'Asmus, Jeff', 'Baer, Alex'];
  games;// = ['vs. Raptors(Warriors) (11/03/18 14:00)', 'at Raptors(Warriors) (11/03/18 10:00)'
    //, 'at Lookouts (10/28/18 14:00)'];

  pitchingStat;
  seasons;
  playerId;
  gameId;

  pitchingStatForm = new FormGroup({
    player: new FormControl(),
    game: new FormControl(),
    innings: new FormControl(),
    earnedRuns: new FormControl(),
    totalRuns: new FormControl(),
    strikeouts: new FormControl(),
    walks: new FormControl(),
    hits: new FormControl(),
    hitByPitch: new FormControl(),
    wildPitches: new FormControl(),
    stolenBases: new FormControl(),
    pickOffs: new FormControl(),
    result: new FormControl(),

  });

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getAllSeasons().subscribe(
      data => {
        this.seasons = data;
      }
    );

    
  }

  selectedSeason(seasonId){
   
    this.data.getGamesBySeason(seasonId).subscribe(
      data => {
       this.games = data;
      }
    );

    this.data.getAllPlayersForSeason(seasonId).subscribe(
      data => {
        this.players = data;
      }
    );
   
    console.log("seasonId: " + seasonId);
  }

  playerSelect(id){
    console.log("playerid: " + id);

    this.playerId = id;
  }

  gameSelect(id){
    console.log("gameid: " + id);
    this.gameId = id;
  }

  game;
  player;
  result_val;
  onSubmit(form){
    this.player = {"id": form.player.id};
    this.game = {"id": form.game.id}; 
  
    if(form.result === 'No Decision')
      this.result_val = 0;
    else if(form.result === 'Win')
      this.result_val = 1;
    else if(form.result === 'Loss')
    this.result_val = 2;
    else if(form.result === 'Save')
      this.result_val = 3;
    else if(form.result === 'Tie')
      this.result_val = 4;

    this.pitchingStat = new PitchingStats(this.player, this.game, form.innings, form.earnedRuns, form.totalRuns,
      form.strikeouts, form.walks, form.hits, form.hitByPitch, form.wildPitches, form.stolenBases, form.pickOffs, this.result_val);

      this.data.addPitchingStat(this.pitchingStat).subscribe();

      this.pitchingStatForm.reset();
      console.log(this.pitchingStat);
      
  }

}
