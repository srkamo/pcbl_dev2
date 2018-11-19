import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {


  dropDown = [{"id": 1, "value": "New Player"}, {"id": 2, "value": "New Game"},
   {"id": 3, "value": "New Team"}, {"id": 4, "value": "New Batting Stats"}, {"id": 5, "value": "New Season"},
   {"id": 6, "value": "New Pitching Stats"}, {"id": 7, "value": "Update Players for Season"}, {"id": 8, "value": "Update Team for Season"}, 
   {"id": 9, "value": "Update Batting Stat"}, {"id": 10, "value": "Update Pitching Stat"}];

   newPlayerHidden = true;
   newGameHidden = true;
   newTeamHidden = true;
   newBattingStatsHidden = true;
   newSeasonHidden = true;
   newPitchingStatsHidden = true;
   updatePlayersHidden = true;
   updateTeamHidden = true;
   updateBatHidden = true;
   updatePitchHidden = true;

  constructor(private data: DataService) { }

  ngOnInit() {
    // this.data.addPlayer().subscribe(
    //   // data => {
    //   //   console.log(data);
    //   // }
    // );
  }

  callBack(id){
    
    if(id == 1){
      this.newPlayerHidden = false;
      this.newGameHidden = true;
      this.newTeamHidden = true;
      this.newBattingStatsHidden = true;
      this.newSeasonHidden = true;
      this.newPitchingStatsHidden = true;
      this.updatePlayersHidden = true;
      this.updateTeamHidden = true;
      this.updateBatHidden = true;
      this.updatePitchHidden = true;
    }
    else if(id == 2){
      this.newPlayerHidden = true;
      this.newGameHidden = false;
      this.newTeamHidden = true;
      this.newBattingStatsHidden = true;
      this.newSeasonHidden = true;
      this.newPitchingStatsHidden = true;
      this.updatePlayersHidden = true;
      this.updateTeamHidden = true;
      this.updateBatHidden = true;
      this.updatePitchHidden = true;
    }
    else if(id == 3){
      this.newPlayerHidden = true;
      this.newGameHidden = true;
      this.newTeamHidden = false;
      this.newBattingStatsHidden = true;
      this.newSeasonHidden = true;
      this.newPitchingStatsHidden = true;
      this.updatePlayersHidden = true;
      this.updateTeamHidden = true;
      this.updateBatHidden = true;
      this.updatePitchHidden = true;
    }
    else if(id == 4){
      this.newPlayerHidden = true;
      this.newGameHidden = true;
      this.newTeamHidden = true;
      this.newBattingStatsHidden = false;
      this.newSeasonHidden = true;
      this.newPitchingStatsHidden = true;
      this.updatePlayersHidden = true;
      this.updateTeamHidden = true;
      this.updateBatHidden = true;
      this.updatePitchHidden = true;
    }
    else if(id == 5){
      this.newPlayerHidden = true;
      this.newGameHidden = true;
      this.newTeamHidden = true;
      this.newBattingStatsHidden = true;
      this.newSeasonHidden = false;
      this.newPitchingStatsHidden = true;
      this.updatePlayersHidden = true;
      this.updateTeamHidden = true;
      this.updateBatHidden = true;
      this.updatePitchHidden = true;
    }
    else if(id == 6){
      this.newPlayerHidden = true;
      this.newGameHidden = true;
      this.newTeamHidden = true;
      this.newBattingStatsHidden = true;
      this.newSeasonHidden = true;
      this.newPitchingStatsHidden = false;
      this.updatePlayersHidden = true;
      this.updateTeamHidden = true;
      this.updateBatHidden = true;
      this.updatePitchHidden = true;
    }
    else if(id == 7){
      this.newPlayerHidden = true;
      this.newGameHidden = true;
      this.newTeamHidden = true;
      this.newBattingStatsHidden = true;
      this.newSeasonHidden = true;
      this.newPitchingStatsHidden = true;
      this.updatePlayersHidden = false;
      this.updateTeamHidden = true;
      this.updateBatHidden = true;
      this.updatePitchHidden = true;
    }
    else if(id == 8){
      this.newPlayerHidden = true;
      this.newGameHidden = true;
      this.newTeamHidden = true;
      this.newBattingStatsHidden = true;
      this.newSeasonHidden = true;
      this.newPitchingStatsHidden = true;
      this.updatePlayersHidden = true;
      this.updateTeamHidden = false;
      this.updateBatHidden = true;
      this.updatePitchHidden = true;
    }
    else if(id == 9){
      this.newPlayerHidden = true;
      this.newGameHidden = true;
      this.newTeamHidden = true;
      this.newBattingStatsHidden = true;
      this.newSeasonHidden = true;
      this.newPitchingStatsHidden = true;
      this.updatePlayersHidden = true;
      this.updateTeamHidden = true;
      this.updateBatHidden = false;
      this.updatePitchHidden = true;
    }
    else if(id == 10){
      this.newPlayerHidden = true;
      this.newGameHidden = true;
      this.newTeamHidden = true;
      this.newBattingStatsHidden = true;
      this.newSeasonHidden = true;
      this.newPitchingStatsHidden = true;
      this.updatePlayersHidden = true;
      this.updateTeamHidden = true;
      this.updateBatHidden = true;
      this.updatePitchHidden = false;
    }
  

  }

}
