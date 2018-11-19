import { Component, OnInit } from '@angular/core';
import { Team } from '../team'
import { FormGroup, FormControl } from '@angular/forms';
import { DataService } from '../data.service';
import { formatCurrency } from '@angular/common';

@Component({
  selector: 'app-team-form',
  templateUrl: './team-form.component.html',
  styleUrls: ['./team-form.component.scss']
})
export class TeamFormComponent implements OnInit {

  teamForm = new FormGroup({
    teamName: new FormControl()

  });

  team;
  seasons;
  constructor(private data : DataService) { }

  ngOnInit() {
    this.data.getAllSeasons().subscribe(
      data => {
        this.seasons = data;
      }
    );
  }


  selectedSeason(seasonId){
    console.log("seasonId: " + seasonId);
  }
  

  formCorrect = true;
  successHidden = true;
  failHidden = true;
  onSubmit(form){

    if(form.teamName == null){
      this.formCorrect =false;
    }

    if(this.formCorrect){
      this.team = new Team(form.teamName);
      this.data.addTeam(this.team).subscribe();
      this.teamForm.reset();
      this.successHidden = false;
      this.failHidden = true;
    }
    else{
      this.successHidden = true;
      this.failHidden = false;
    }

    this.formCorrect = true;
  }

}
