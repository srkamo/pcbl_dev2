import { Component, OnInit } from '@angular/core';
import { Season } from '../season'
import { FormGroup, FormControl } from '@angular/forms';
import { DataService } from '../data.service';
import { formatCurrency } from '@angular/common';

@Component({
  selector: 'app-season-form',
  templateUrl: './season-form.component.html',
  styleUrls: ['./season-form.component.scss']
})
export class SeasonFormComponent implements OnInit {

  seasonForm = new FormGroup({
    season: new FormControl(),
    year: new FormControl(),
    division: new FormControl(),
  });

  season;

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form){
    this.season = new Season(form.season, form.year, form.division);
    console.log(this.season);
  }

}
