import { Component, OnInit } from '@angular/core';
import { PitchingStats } from '../pitching-stats'
import { PitchingStatsUpdate } from '../pitching-stats-update'
import { FormGroup, FormControl } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-update-pitching-stat-form',
  templateUrl: './update-pitching-stat-form.component.html',
  styleUrls: ['./update-pitching-stat-form.component.scss']
})
export class UpdatePitchingStatFormComponent implements OnInit {

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

  pitchingStatsHidden = true;
  selectSeason = false;
  playerSelection = false;
  gameSelection = false
  season_id = -1;
  pitchingBean = null;

  selectedSeason(seasonId){
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

  playerSelect(id){
    this.playerId = id;
    this.playerSelection = true;
    if(this.playerSelection && this.gameSelection && this.selectSeason){
      this.pitchingStatsHidden = false;
      this.playerSelection = false;

      this.data.getPitchingStatForSeasonGamePlayer(this.season_id, this.gameId, this.playerId).subscribe(
        data => {
          this.pitchingBean = data[0];
          if (this. pitchingBean == null) {
            this.pitchingStatsHidden = true;
            this.successHidden = true;
            this.failHidden = false;

          }
          else {
            this.failHidden = true;
            this.successHidden = true;
            this. pitchingStatForm.get('innings').setValue(this. pitchingBean.innings);
            this. pitchingStatForm.get('earnedRuns').setValue(this. pitchingBean.earnedRuns);
            this. pitchingStatForm.get('totalRuns').setValue(this. pitchingBean.totalRuns);
            this. pitchingStatForm.get('strikeouts').setValue(this. pitchingBean.strikeouts);
            this. pitchingStatForm.get('walks').setValue(this. pitchingBean.walks);
            this. pitchingStatForm.get('hits').setValue(this. pitchingBean.hits);
            this. pitchingStatForm.get('hitByPitch').setValue(this. pitchingBean.hitByPitch);
            this. pitchingStatForm.get('wildPitches').setValue(this. pitchingBean.wildPitches);
            this. pitchingStatForm.get('stolenBases').setValue(this. pitchingBean.stolenBases);
            this. pitchingStatForm.get('pickOffs').setValue(this. pitchingBean.pickoffs);
            this. pitchingStatForm.get('result').setValue(this. pitchingBean.result);
        
          }

        }
      );
      
    }
  }

  gameSelect(id){
    this.gameId = id;
    this.gameSelection = true;
    if(this.playerSelection && this.gameSelection && this.selectSeason){
      this.pitchingStatsHidden = false;
      this.gameSelection = false;
      this.data.getPitchingStatForSeasonGamePlayer(this.season_id, this.gameId, this.playerId).subscribe(
        data => {
          this.pitchingBean = data[0];
          if (this. pitchingBean == null) {
            this.pitchingStatsHidden = true;
            this.successHidden = true;
            this.failHidden = false;

          }
          else {
            this.failHidden = true;
            this.successHidden = true;
            this. pitchingStatForm.get('innings').setValue(this. pitchingBean.innings);
            this. pitchingStatForm.get('earnedRuns').setValue(this. pitchingBean.earnedRuns);
            this. pitchingStatForm.get('totalRuns').setValue(this. pitchingBean.totalRuns);
            this. pitchingStatForm.get('strikeouts').setValue(this. pitchingBean.strikeouts);
            this. pitchingStatForm.get('walks').setValue(this. pitchingBean.walks);
            this. pitchingStatForm.get('hits').setValue(this. pitchingBean.hits);
            this. pitchingStatForm.get('hitByPitch').setValue(this. pitchingBean.hitByPitch);
            this. pitchingStatForm.get('wildPitches').setValue(this. pitchingBean.wildPitches);
            this. pitchingStatForm.get('stolenBases').setValue(this. pitchingBean.stolenBases);
            this. pitchingStatForm.get('pickOffs').setValue(this. pitchingBean.pickoffs);
            this. pitchingStatForm.get('result').setValue(this. pitchingBean.result);
            
        
          }

        }
      );
      
    }
  }

  game;
  player;
  result_val;
  //pitching .0, .1, .2
  formCorrect = true;
  successHidden = true;
  failHidden = true;
  onSubmit(form) {
    console.log("form: " + form.result);

    if (form.player == null || form.game == null || form.result == null || form.innings == null || form.earnedRuns == null || form.totalRuns == null
      || form.strikeouts == null || form.walks == null || form.hits == null || form.hitByPitch == null || form.wildPitches == null || form.stolenBases == null
      || form.pickOffs == null) {
      this.formCorrect = false;
    }
    else if ( form.innings.toString().indexOf('.0') < 0 && form.innings.toString().indexOf('.1') < 0 && form.innings.toString().indexOf('.2') < 0) {
      this.formCorrect = false;

    }
    else if (!Number.isInteger(parseInt(form.earnedRuns)) || !Number.isInteger(parseInt(form.totalRuns)) || !Number.isInteger(parseInt(form.strikeouts)) ||
      !Number.isInteger(parseInt(form.walks)) || !Number.isInteger(parseInt(form.hits)) || !Number.isInteger(parseInt(form.hitByPitch)) ||
      !Number.isInteger(parseInt(form.wildPitches)) || !Number.isInteger(parseInt(form.stolenBases)) || !Number.isInteger(parseInt(form.pickOffs))) {
      this.formCorrect = false;
    }

    if (this.formCorrect) {
      this.player = { "id": this.playerId };
      this.game = { "id": this.gameId };


      this.pitchingStat = new PitchingStatsUpdate( this.pitchingBean.id ,this.player, this.game, form.innings, form.earnedRuns, form.totalRuns,
        form.strikeouts, form.walks, form.hits, form.hitByPitch, form.wildPitches, form.stolenBases, form.pickOffs, form.result);
      //this.data.addPitchingStat(this.pitchingStat).subscribe();
      this.data.updatePitchingStat(this.pitchingStat).subscribe();
      this.pitchingStatForm.reset();
      console.log(this.pitchingStat);
      this.successHidden = false;
      this.failHidden = true;
    }
    else {
      this.successHidden = true;
      this.failHidden = false;
    }

    this.formCorrect = true;

  }

}
