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

  onSubmit(form){
    this.season = new Season(form.season, form.year, form.division);
    this.data.addSeason(this.season).subscribe();
    console.log(this.season);
  }

}
