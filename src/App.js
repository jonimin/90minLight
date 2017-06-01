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
      openTeamMenu: false
    };
  }

  onUpdateFeed(feedId){
    this.setState({
      teamId: feedId
    })
  }
  
  openTeamMenu(){
    this.setState({
      ...this.state,
      openTeamMenu: !this.state.openTeamMenu
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
           <Header/>
        </div>
        <div>
           <FeedSelection teamName = {this.state.teamName} onUpdateFeed = {this.onUpdateFeed.bind(this)} openTeamMenu = {this.openTeamMenu.bind(this)} />
        </div>
        <div>
           {!this.state.openTeamMenu
          ? <span></span>
          : <TeamMenu/>}
          
        </div>
        <div>
           <Grid teamId = {this.state.teamId}/>
        </div>
      </div>
    );
  }
}

export default App;
