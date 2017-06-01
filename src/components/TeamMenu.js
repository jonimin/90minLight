import React, { Component } from 'react';
import {Teams} from './Teams'
var api = require('../api/Api');

export class TeamMenu extends React.Component {
  constructor(props) {
      super();
      this.state = {
        leagues: null,
      };
    }  
  
  componentWillMount() {
    api.getAllLegues()
    .then((leagues) => this.setState(() => ({leagues: leagues})));
   
    
  }

  render(){
    return (
      <div className="teamMenuContainer">
         {!this.state.leagues
          ? <span></span>
          : <Menu leagues = {this.state.leagues} />}
       </div>
    )
  }
}

function Menu (props) {

 function openLeaguesMenu(e) {
   let className = e.currentTarget.id;
   document.getElementsByClassName(className)[0].style.display == "block" ? 
   document.getElementsByClassName(className)[0].style.display = "none":
   document.getElementsByClassName(className)[0].style.display = "block";
 }
 console.log(props.leagues[0].league.name);
  return (
    <div>
      {props.leagues.map(function (league, index) {
        return (
        
        <div>
        <div className="leagueMenu" onClick={openLeaguesMenu} id = {league.league.name}>
           <div className="leagueLogoMenuContainer">
             <img src={league.league.logo_url} alt="image" className="leagueLogoMenu"/>
           </div>  
          <div className="leagueNametitle">
            {league.league.name}
          </div>  
        </div>
        <div className={["teamNewContainer", league.league.name].join(' ')}>
          <Teams teams = {league.teams}  />
        </div> 
      </div> 
        )
      })}
    </div>
  )
}