import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from './components/Header'
import {Grid} from './components/Grid'
import {FeedSelection} from './components/FeedSelection'

class App extends Component {
  constructor() {
    super();
    this.state = {
      teamId:1,
      teamName:"Arsenal"
    };
  }

  onChangeSelection(selectedTeamName){
    this.setState({
      teamName: selectedTeamName
    })
  }
  
  render() {
    return (
      <div className="App">
        <div className="App-header">
           <Header/>
        </div>
        <div>
           <FeedSelection teamName = {this.state.teamName} onChange = {this.onChangeSelection.bind(this)}/>
        </div>
        <div>
           <Grid teamId = {this.state.teamId}/>
        </div>
      </div>
    );
  }
}

export default App;
