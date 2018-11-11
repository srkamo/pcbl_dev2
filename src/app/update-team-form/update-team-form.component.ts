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

  teams = ['51s', 'Aces', 'Angels (Conejo)', 'Angels(Valley)', 'AquaSox'];

  updateTeamForm = new FormGroup({
    teams: new FormControl(), 
  });

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form){
    console.log(form);
  }

}
