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

  constructor(private data : DataService) { }

  ngOnInit() {
  }

  onSubmit(form){
    this.team = new Team(form.teamName);
    console.log(this.team);
  }

}
