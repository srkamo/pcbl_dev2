import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DataService } from '../data.service';
import { formatCurrency } from '@angular/common';

@Component({
  selector: 'app-update-team-form',
  templateUrl: './update-team-form.component.html',
  styleUrls: ['./update-team-form.component.scss']
})
export class UpdateTeamFormComponent implements OnInit {

  teams;// = ['51s', 'Aces', 'Angels (Conejo)', 'Angels(Valley)', 'AquaSox'];
  seasons;
  updateTeamForm = new FormGroup({
    teams: new FormControl(), 
  });

  constructor(private data : DataService) { }

  ngOnInit() {
    this.data.getAllSeasons().subscribe(
      data => {
        this.seasons = data;
      }
    );

    this.data.getAllTeams().subscribe(
      data => {
        this.teams = data;
      }
    );
  }

  season_id;
  selectedSeason(seasonId){
    this.season_id = seasonId;
    console.log("seasonId: " + seasonId);
  }

  selectedTeam(selTeams){
    console.log("selTeams: " + selTeams);
    //console.log("selTeams: " + this.updateTeamForm.teams);
    
  }



  /*
     Update Team for Season:
{
    "season_id": 4444,
    "team_ids": [401,402,403]
}
  */
  updateTeams;
  teams_ids = new Array();
  onSubmit(form){
    for(let t of form.teams){
      this.teams_ids.push(t.id);
    }
    this.updateTeams = {"season_id": this.season_id, "team_ids": this.teams_ids};
    this.data.updateSeasonTeam(this.updateTeams).subscribe();
    this.teams_ids = new Array();
    console.log(this.updateTeams);
  }

}
