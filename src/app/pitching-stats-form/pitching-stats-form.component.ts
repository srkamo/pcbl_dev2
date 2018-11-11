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
  players = ['Miller, Mike', 'Asmus, Jeff', 'Baer, Alex'];
  games = ['vs. Raptors(Warriors) (11/03/18 14:00)', 'at Raptors(Warriors) (11/03/18 10:00)'
    , 'at Lookouts (10/28/18 14:00)'];

  pitchingStat;

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
  }

  onSubmit(form){
    this.pitchingStat = new PitchingStats(form.player, form.game, form.innings, form.earnedRuns, form.totalRuns,
      form.strikeouts, form.walks, form.hits, form.hitByPitch, form.wildPitches, form.stolenBases, form.pickOffs, form.result);
      this.pitchingStatForm.reset();
      console.log(this.pitchingStat);
  }

}
