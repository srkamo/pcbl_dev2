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
    console.log("player: " + player);
    return this.http.post('http://localhost:8888/api/createPlayer/', player);
  }

}
