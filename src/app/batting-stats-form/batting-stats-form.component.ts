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

  players = ['Miller, Mike', 'Asmus, Jeff', 'Baer, Alex'];
  games = ['vs. Raptors(Warriors) (11/03/18 14:00)', 'at Raptors(Warriors) (11/03/18 10:00)'
    , 'at Lookouts (10/28/18 14:00)'];

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
  }

  battingStat;
  onSubmit(form){
    this.battingStat = new BattingStats(form.player, form.game, form.atBats,
      form.singles, form.doubles, form.triples, form.homeRuns, form.walks, form.hitByPitch,
      form.runs, form.rbis, form.strikeouts, form.sacrifices, form.stolenBases, form.caughtStealing
      ,form.passedBalls); 

      console.log(this.battingStat);
  }

}
