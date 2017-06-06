import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from './components/Header'
import {Grid} from './components/Grid'
import {FeedSelection} from './components/FeedSelection'
import {TeamMenu} from './components/TeamMenu'

class App extends Component {
  constructor() {
    super();
    this.state = {
      teamId: "1",
      teamName: "Arsenal",
      openTeamMenu: false,
      selectedTeamsApp :{"Premier League": [{id:'1',name:"Arsenal"}]}
    };
  }

  onUpdateFeed(feedId,teamName){
    this.setState({
      teamId: feedId,
      teamName,teamName,
      openTeamMenu: false
    })
  }

  openTeamMenu(){
    this.setState({
      openTeamMenu: true
    })
  }

  updateSelectedTeamsApp(leagueId,leagueName,TeamId,TeamName,removeSelection){
    this.setState({
      selectedTeamsApp: this.updateSelectedTeamsState(leagueId,leagueName,TeamId,TeamName,removeSelection)
    })
  }

  updateSelectedTeamsState(leagueId,leagueName,TeamId,TeamName,removeSelection) {
     if(removeSelection == 0) {
       let tempMap = {};
       tempMap =  this.state.selectedTeamsApp;
       let arr = [];
       if(tempMap[leagueName] != undefined) {
         arr = tempMap[leagueName];
       }
       else{
         arr = [];
       }
       let team = {id:TeamId,name:TeamName};
       arr.push(team);
       tempMap[leagueName ] = arr;
       return tempMap;
       
     }
     else { 
       let tempMap = {};
       tempMap =  this.state.selectedTeamsApp;
       let arr  = tempMap[leagueName];
       let arr2 = arr.filter(function (el) {
                              return el.id != TeamId });;    
       tempMap[leagueName] = arr2;                                
       return tempMap;
     }
  }
  
  render() {
    return (
      <div className="App">
        <div className="App-header">
           <Header/>
        </div>
        <div>
           <FeedSelection teamName = {this.state.teamName} onUpdateFeed = {this.onUpdateFeed.bind(this)} openTeamMenu = {this.openTeamMenu.bind(this)} selectedTeamsApp={this.state.selectedTeamsApp} />
        </div>
        <div>
           {!this.state.openTeamMenu
          ? ""
          : <TeamMenu selectedTeamsApp={this.state.selectedTeamsApp} updateSelectedTeamsApp = {this.updateSelectedTeamsApp.bind(this)}/>}
          
        </div>
        <div>
           <Grid teamId = {this.state.teamId}/>
        </div>
      </div>
    );
  }
}

export default App;
