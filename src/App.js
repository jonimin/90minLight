import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from './components/Header'
import {Grid} from './components/Grid'
import {FeedSelection} from './components/FeedSelection'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
           <Header/>
        </div>
        <div>
           <FeedSelection/>
        </div>
        <div>
           <Grid/>
        </div>
      </div>
    );
  }
}

export default App;
