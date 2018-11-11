import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DataService } from '../data.service';
import { formatCurrency } from '@angular/common';

@Component({
  selector: 'app-update-player-form',
  templateUrl: './update-player-form.component.html',
  styleUrls: ['./update-player-form.component.scss']
})
export class UpdatePlayerFormComponent implements OnInit {

  players = ['Miller, Mike', 'Asmus, Jeff', 'Baer, Alex'];
  constructor() { }

  ngOnInit() {
  }

  updatePlayerForm = new FormGroup({
    players: new FormControl(), 
  });

  onSubmit(form){
    console.log(form);
  }

}
