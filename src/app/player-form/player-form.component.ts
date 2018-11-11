import { Component, OnInit } from '@angular/core';
import { Player } from '../player'
import { FormGroup, FormControl } from '@angular/forms';
import { DataService } from '../data.service';
import { formatCurrency } from '@angular/common';


@Component({
  selector: 'app-player-form',
  templateUrl: './player-form.component.html',
  styleUrls: ['./player-form.component.scss']
})
export class PlayerFormComponent implements OnInit {

  bats = ['Right', 'Left', 'Switch'];
  throws = ['Right', 'Left', 'Both'];


  model = new Player("First", "Last", 42, "Positin", this.bats[0], this.throws[1]);

  submitted = false;

  playerForm = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl(),
    jersey: new FormControl(),
    positions: new FormControl(),
    bats: new FormControl(),
    throws: new FormControl(),

  });

  player;



  constructor(private data: DataService) { }

  ngOnInit() {
  }

  onSubmit(form){
    this.player = {"firstName":form.firstName,"lastName":form.lastName,
    "jerseyNumber":form.jersey,"positions":form.positions,"throwSide":form.throws,"batSide":form.bats,"fullNameLastFirst":form.firstName + ", " + form.lastName};
    this.data.addPlayer(this.player).subscribe()
    this.submitted = true;
    this.playerForm.reset();
  }

}
