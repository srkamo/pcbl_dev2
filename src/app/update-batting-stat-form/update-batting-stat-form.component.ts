import { Component, OnInit } from '@angular/core';
import { BattingStats } from '../batting-stats'
import { BattingStatsUpdate } from '../batting-stats-update'
import { FormGroup, FormControl } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-update-batting-stat-form',
  templateUrl: './update-batting-stat-form.component.html',
  styleUrls: ['./update-batting-stat-form.component.scss']
})
export class UpdateBattingStatFormComponent implements OnInit {

  players; //= ['Miller, Mike', 'Asmus, Jeff', 'Baer, Alex'];
  // games = ['vs. Raptors(Warriors) (11/03/18 14:00)', 
  // 'at Raptors(Warriors) (11/03/18 10:00)', 
  // 'at Lookouts (10/28/18 14:00)'];
  games;
  seasons;

  gameId = -1;
  playerId = -1;
  currentPlayer = null;

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

  battingStatsHidden = true;
  selectSeason = false;
  playerSelection = false;
  gameSelection = false
  season_id = -1;
  battingBean = null;

  selectedSeason(seasonId) {
    this.season_id = seasonId;
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
    this.playerSelection = false;
    this.gameSelection = false;
    this.selectSeason = true;
  }

  playerSelect(id) {
    this.playerId = id;
    this.playerSelection = true;
    if (this.playerSelection && this.gameSelection && this.selectSeason) {
      this.battingStatsHidden = false;
      //this.playerSelection = false;
      this.data.getBattingStatForSeasonGamePlayer(this.season_id, this.gameId, this.playerId).subscribe(
        data => {
          this.battingBean = data[0];
          if (this.battingBean == null) {
            this.battingStatsHidden = true;
            this.successHidden = true;
            this.failHidden = false;

          }
          else {
            this.failHidden = true;
            this.successHidden = true;
            this.battingStatForm.get('atBats').setValue(this.battingBean.atBats);
            this.battingStatForm.get('singles').setValue(this.battingBean.singles);
            this.battingStatForm.get('doubles').setValue(this.battingBean.doubles);
            this.battingStatForm.get('triples').setValue(this.battingBean.triples);
            this.battingStatForm.get('homeRuns').setValue(this.battingBean.homeRuns);
            this.battingStatForm.get('walks').setValue(this.battingBean.walks);
            this.battingStatForm.get('hitByPitch').setValue(this.battingBean.hitByPitch);
            this.battingStatForm.get('runs').setValue(this.battingBean.runs);
            this.battingStatForm.get('rbis').setValue(this.battingBean.rbis);
            this.battingStatForm.get('strikeouts').setValue(this.battingBean.strikeOuts);
            this.battingStatForm.get('sacrifices').setValue(this.battingBean.sacrifices);
            this.battingStatForm.get('stolenBases').setValue(this.battingBean.stolenBases);
            this.battingStatForm.get('caughtStealing').setValue(this.battingBean.caughtStealing);
            this.battingStatForm.get('passedBalls').setValue(this.battingBean.passedBalls);
          }

        }
      );
    }
  }

  gameSelect(id) {
    this.gameId = id;
    this.gameSelection = true;
    if (this.playerSelection && this.gameSelection && this.selectSeason) {
      this.battingStatsHidden = false;
      //this.gameSelection = false;
      console.log(this.season_id, this.gameId, this.playerId);
      this.data.getBattingStatForSeasonGamePlayer(this.season_id, this.gameId, this.playerId).subscribe(
        data => {
          this.battingBean = data[0];
          if (this.battingBean == null) {
            this.battingStatsHidden = true;
            this.successHidden = true;
            this.failHidden = false;
          }
          else {
            this.failHidden = true;
            this.successHidden = true;
            this.battingStatForm.get('atBats').setValue(this.battingBean.atBats);
            this.battingStatForm.get('singles').setValue(this.battingBean.singles);
            this.battingStatForm.get('doubles').setValue(this.battingBean.doubles);
            this.battingStatForm.get('triples').setValue(this.battingBean.triples);
            this.battingStatForm.get('homeRuns').setValue(this.battingBean.homeRuns);
            this.battingStatForm.get('walks').setValue(this.battingBean.walks);
            this.battingStatForm.get('hitByPitch').setValue(this.battingBean.hitByPitch);
            this.battingStatForm.get('runs').setValue(this.battingBean.runs);
            this.battingStatForm.get('rbis').setValue(this.battingBean.rbis);
            this.battingStatForm.get('strikeouts').setValue(this.battingBean.strikeOuts);
            this.battingStatForm.get('sacrifices').setValue(this.battingBean.sacrifices);
            this.battingStatForm.get('stolenBases').setValue(this.battingBean.stolenBases);
            this.battingStatForm.get('caughtStealing').setValue(this.battingBean.caughtStealing);
            this.battingStatForm.get('passedBalls').setValue(this.battingBean.passedBalls);
          }
          //console.log(data[0]);
        }
      );
      console.log(this.battingBean);
    }
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
  battingJSON;
  formCorrect = true;
  successHidden = true;
  failHidden = true;
  onSubmit(form) {

    console.log("form: " + form);
    if (form.player == null || form.game == null || form.atBats == null || form.singles == null || form.doubles == null || form.triples == null
      || form.homeRuns == null || form.walks == null || form.hitByPitch == null || form.runs == null || form.rbis == null || form.strikeouts == null
      || form.sacrifices == null || form.stolenBases == null || form.caughtStealing == null || form.passedBalls == null) {
      this.formCorrect = false;

    }
    else if (!Number.isInteger(parseInt(form.atBats)) || !Number.isInteger(parseInt(form.singles)) || !Number.isInteger(parseInt(form.doubles)) ||
      !Number.isInteger(parseInt(form.triples)) || !Number.isInteger(parseInt(form.homeRuns)) || !Number.isInteger(parseInt(form.walks)) || !Number.isInteger(parseInt(form.hitByPitch))
      || !Number.isInteger(parseInt(form.runs)) || !Number.isInteger(parseInt(form.rbis)) || !Number.isInteger(parseInt(form.strikeouts)) || !Number.isInteger(parseInt(form.sacrifices))
      || !Number.isInteger(parseInt(form.stolenBases)) || !Number.isInteger(parseInt(form.caughtStealing)) || !Number.isInteger(parseInt(form.passedBalls))) {
      this.formCorrect = false;

    }

    if (this.formCorrect) {
      this.player = { "id": form.player.id };
      this.game = { "id": this.gameId };
      this.battingStat = new BattingStatsUpdate(this.battingBean.id,this.player, this.game, form.atBats,
        form.singles, form.doubles, form.triples, form.homeRuns, form.walks, form.hitByPitch,
        form.runs, form.rbis, form.strikeouts, form.sacrifices, form.stolenBases, form.caughtStealing
        , form.passedBalls);

      
      console.log(this.battingStat);
      this.successHidden = false;
      this.failHidden = true;
      this.data.addBattingStat(this.battingStat).subscribe();
      this.data.updateBattingStat(this.battingStat).subscribe();
      this.battingStatForm.reset();
    }
    else {
      this.successHidden = true;
      this.failHidden = false;
    }
    this.formCorrect = true;
  }


}
