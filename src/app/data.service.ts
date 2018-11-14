import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})


export class DataService {

  constructor(private http: HttpClient) { }

  getSeasons(){
    return this.http.get('http://qa.pcblroyals.com:8888/api/viewAllSeason')
  }

  getAllSeasonsAndRecentGames(){
    
    return this.http.get('http://qa.pcblroyals.com:8888/api/getAllSeasonsAndRecentGames')
  }

  getCareerBattingPitchingStats(){
   
    return this.http.get('http://qa.pcblroyals.com:8888/api/viewCareerStatsAllPlayer')
  }

  getCareerPitchingStats(){
    
    return this.http.get('http://qa.pcblroyals.com:8888/api/viewCareerPitchingStatsAllPlayer')
  }

  getStatsBySeason(id){
    return this.http.get('http://qa.pcblroyals.com:8888/api/getStatsBySeason/'+id)
  }

  getStatsBySeasonGame(seasonId, gameId){
    return this.http.get('http://qa.pcblroyals.com:8888/api/getStatsBySeasonGame/'+seasonId +'/'+gameId)
  }

  getStatsSeasonByPlayer(playerId){
    return this.http.get('http://qa.pcblroyals.com:8888/api/getStatsSeasonByPlayer/'+playerId)
  }

  getStatsGameBySeasonPlayer(seasonId, playerId){
    return this.http.get('http://qa.pcblroyals.com:8888/api/getStatsGameBySeasonPlayer/'+seasonId + '/' + playerId)
  }


  getAllSeasons(){
    return this.http.get('http://qa.pcblroyals.com:8888/api/viewAllSeasons')

  }

  getGamesBySeason(seasonId){
    return this.http.get('http://qa.pcblroyals.com:8888/api/getGamesBySeason/'+ seasonId)

  }

  getAllPlayers(){
    return this.http.get('http://qa.pcblroyals.com:8888/api/viewAllPlayers')
  }

  getAllSeasonsForPlayer(playerId){
    return this.http.get('http://qa.pcblroyals.com:8888/api/getAllSeasonsForPlayer/' + playerId)
  }

  getAllTimeRecordsBatting(){
    return this.http.get('http://qa.pcblroyals.com:8888/api/getAllTimeRecordsBatting')

  }

  getAllTimeRecordsPitching(){
    return this.http.get('http://qa.pcblroyals.com:8888/api/getAllTimeRecordsPitching')

  }

  getSeasonRecordsBatting(){
    return this.http.get('http://qa.pcblroyals.com:8888/api/getSeasonRecordsBatting')
  }

  getSeasonRecordsPitching(){
    return this.http.get('http://qa.pcblroyals.com:8888/api/getSeasonRecordsPitching')
  }

  getGameRecordsBatting(){
    return this.http.get('http://qa.pcblroyals.com:8888/api/getGameRecordsBatting')
  }

  getGameRecordsPitching(){
    return this.http.get('http://qa.pcblroyals.com:8888/api/getGameRecordsPitching')
  }

  addPlayer(player){
    //return this.http.post('http://qa.pcblroyals.com:8888/api/createPlayer', player);
    console.log(player);
    return this.http.put('http://localhost.com:8888/api/createPlayer/', player);
  }

  addGame(game){
    // return this.http.post('http://qa.pcblroyals.com:8888/api/createGame/', game);
    return this.http.post('http://localhost.com:8888/api/createGame/', game);
  }

  addSeason(season){
    // return this.http.post('http://qa.pcblroyals.com:8888/api/createSeason/', season);
    return this.http.post('https://localhost.com:8888/api/createSeason/', season);
  }

  addTeam(team){
    //return this.http.post('http://qa.pcblroyals.com:8888/api/createTeam/', team);
    return this.http.post('http://localhost.com:8888/api/createTeam/', team);
  }

  addBattingStat(stat){
    //return this.http.post('http://qa.pcblroyals.com:8888/api/createBattingStat/', stat);
    return this.http.post('http://localhost.com:8888/api/createBattingStat/', stat);
  }

  addPitchingStat(stat){
    //return this.http.post('http://qa.pcblroyals.com:8888/api/createPitchingStat/', stat);
    return this.http.post('http://localhost.com:8888/api/createPitchingStat/', stat);
  }

  updateSeasonPlayer(players){
    //return this.http.post('http://qa.pcblroyals.com:8888/api/updateSeasonPlayer/', players);
    return this.http.post('http://localhost.com:8888/api/updateSeasonPlayer/', players);
  }

  updateSeasonTeam(teams){
    //return this.http.post('http://qa.pcblroyals.com:8888/api/updateSeasonTeam/', teams);
    return this.http.post('http://localhost.com:8888/api/updateSeasonTeam/', teams);
  }

  getAllPlayersForSeason(seasonId){
   // return this.http.get('http://qa.pcblroyals.com:8888/api/getAllPlayersForSeason/'+ seasonId);
    return this.http.get('http://localhost.com:8888/api/getAllPlayersForSeason/'+ seasonId);
  }

  getAllTeams(){
    //return this.http.get('http://qa.pcblroyals.com:8888/api/getAllTeams/');
    return this.http.get('http://localhost.com:8888/api/getAllTeams/');
  }

  

}
