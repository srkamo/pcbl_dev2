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

  seasons;
  model = new Player("First", "Last", 42, "Positin", this.bats[0], this.throws[1]);

  submitted = false;

  successHidden = true;
  failHidden = true;

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
    // this.data.getAllSeasons().subscribe(
    //   data => {
    //     this.seasons = data;
    //   }
    // );
  }

  /*
  New Player:
{
    "firstName": "Temp",
    "lastName": "Test",
    "jerseyNumber": 96,
    "positions": "pitcher",
    "throwSide": "left",
    "batSide": "left"
}
   */
  formCorrect = true;

  onSubmit(form){
    if(form.firstName == null || form.lastName == null || form.jersey == null || form.positions == null
      || form.throws == null || form.bats == null){
        this.formCorrect = false;
        console.log("nulled");
    }

    else if(!Number.isInteger(parseInt(form.jersey))){
      this.formCorrect = false;
      console.log("inted");
    }
    this.player = new Player(form.firstName, form.lastName, form.jersey, form.positions, form.throws, form.bats);
    console.log("formCorrect: " + this.formCorrect);
    console.log(this.player);
    if(this.formCorrect){
    this.player = new Player(form.firstName, form.lastName, form.jersey, form.positions, form.throws, form.bats);
    this.data.addPlayer(this.player).subscribe()
    this.submitted = true;
    this.playerForm.reset();
    this.successHidden = false;
    this.failHidden = true;
    }
    else{
      this.failHidden = false;
      this.successHidden = true;
    }
    this.formCorrect = true;
  }

  selectedSeason(seasonId){
    console.log("seasonId: " + seasonId);
  }

}
