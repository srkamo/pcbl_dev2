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

    if(form.season == null || form.year == null || form.division == null){
      this.formCorrect = false;
    }
    else if(!Number.isInteger(parseInt(form.year))){
      this.formCorrect = false;
    }

    if(this.formCorrect){
      this.season = new Season(form.season, form.year, form.division);
      this.data.addSeason(this.season).subscribe();
      this.seasonForm.reset();
      console.log(this.season);
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
