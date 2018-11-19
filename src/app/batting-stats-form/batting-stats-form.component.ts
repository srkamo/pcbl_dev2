import { Component, OnInit } from '@angular/core';
import { BattingStats } from '../batting-stats'
import { FormGroup, FormControl } from '@angular/forms';
import { DataService } from '../data.service';


@Component({
  selector: 'app-batting-stats-form',
  templateUrl: './batting-stats-form.component.html',
  styleUrls: ['./batting-stats-form.component.scss']
})
export class BattingStatsFormComponent implements OnInit {

  players; //= ['Miller, Mike', 'Asmus, Jeff', 'Baer, Alex'];
  // games = ['vs. Raptors(Warriors) (11/03/18 14:00)', 
  // 'at Raptors(Warriors) (11/03/18 10:00)', 
  // 'at Lookouts (10/28/18 14:00)'];
  games;
  seasons;

  gameId = -1;
  playerId = -1;

  battingStatForm = new FormGroup({
    player: new FormControl(),
    game: new FormControl(),
    atBats: new FormControl(),
    singles: new FormControl(),
    doubles: new FormControl(),
    triples: new FormControl(),
    homeRuns: new FormControl(),
    walks: new FormControl(),
    hitByPitch: new FormControl(),
    runs: new FormControl(),
    rbis: new FormControl(),
    strikeouts: new FormControl(),
    sacrifices: new FormControl(),
    stolenBases: new FormControl(),
    caughtStealing: new FormControl(),
    passedBalls: new FormControl(),

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
    this.playerId = id;
  }

  gameSelect(id){
    this.gameId = id;
  }


  /*
   Batting Stat:
{
    "game":{
        "id":1
    },
    "player":{
        "id":1
    },
    "atBats": 5,
    "singles": 1,
    "doubles": 1,
    "triples": 1,
    "homeRuns": 1,
    "walks": 0,
    "hitByPitch": 100000,
    "sacrifices": 0,
    "runs": 0,
    "rbis": 0,
    "stolenBases": 0,
    "passedBalls": 0,
    "caughtStealing": 0,
    "strikeOuts": 5
}
  */

  battingStat;
  player;
  game;
  formCorrect = true;
  successHidden = true;
  failHidden = true;
  onSubmit(form){

    if(form.player == null || form.game == null || form.atBats == null || form.singles == null || form.doubles == null || form.triples == null
      || form.homeRuns == null || form.walks == null || form.hitByPitch == null || form.runs == null || form.rbis == null || form.strikeouts == null
      || form.sacrifices == null || form.stolenBases == null || form.caughtStealing == null || form.passedBalls == null ){
        this.formCorrect = false;
       
    }
    else if(!Number.isInteger(parseInt(form.atBats)) || !Number.isInteger(parseInt(form.singles)) || !Number.isInteger(parseInt(form.doubles)) ||
    !Number.isInteger(parseInt(form.triples)) || !Number.isInteger(parseInt(form.homeRuns)) || !Number.isInteger(parseInt(form.walks)) || !Number.isInteger(parseInt(form.hitByPitch))
    || !Number.isInteger(parseInt(form.runs)) || !Number.isInteger(parseInt(form.rbis)) || !Number.isInteger(parseInt(form.strikeouts)) || !Number.isInteger(parseInt(form.sacrifices))
    || !Number.isInteger(parseInt(form.stolenBases)) || !Number.isInteger(parseInt(form.caughtStealing)) || !Number.isInteger(parseInt(form.passedBalls))){
      this.formCorrect = false;
      
    }

    if(this.formCorrect){
      this.player = {"id": form.player.id};
    this.game = {"id": form.game.id}; 
    this.battingStat = new BattingStats(this.player,this.game , form.atBats,
      form.singles, form.doubles, form.triples, form.homeRuns, form.walks, form.hitByPitch,
      form.runs, form.rbis, form.strikeouts, form.sacrifices, form.stolenBases, form.caughtStealing
      ,form.passedBalls); 
      this.successHidden = false;
      this.failHidden = true;
      this.data.addBattingStat(this.battingStat).subscribe();
      this.battingStatForm.reset();
    }
    else{
      this.successHidden = true;
      this.failHidden = false;
    }
    this.formCorrect = true;
  }

}
