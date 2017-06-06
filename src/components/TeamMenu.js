import React, { Component } from 'react';
import {Teams} from './Teams'
import Api from '../api/Api'
import oreangArrow from '../images/arrow.svg';
import greyArrow from '../images/arrow_grey.svg';

export class TeamMenu extends React.Component {
  constructor(props) {
      super();
      this.state = {
        leagues: null,
      };
    }  
  
  updateSelectedTeams(leagueId,leagueName,TeamId,TeamName,removeSelection){
    this.props.updateSelectedTeamsApp(leagueId,leagueName,TeamId,TeamName,removeSelection);
  }

  componentWillMount() {
    Api.getAllLegues()
    .then((leagues) => {
      this.setState(() => ({
          ...this.state,
          leagues: leagues,
        }))
        return leagues;
      })    
    }

  render(){
    return (
      <div className="teamMenuContainer">
         {!this.state.leagues
          ? <span></span>
          : <Menu selectedTeamsApp = {this.props.selectedTeamsApp} leagues = {this.state.leagues} updateSelectedTeams = {this.updateSelectedTeams.bind(this)}/>}
       </div>
    )
  }
}

function Menu (props) {
  
  function openLeaguesMenu(e) {
    let className = e.currentTarget.id;
    document.getElementsByClassName(className)[0].style.display == "block" ? 
    manageMenu(className,"none","greyArrow","orangeArrow"):
    manageMenu(className,"block","orangeArrow","greyArrow");     
  }

  function manageMenu(className,displayMode,removeClass,addClass) {
    document.getElementsByClassName(className)[0].style.display = displayMode;
    document.getElementById(className).getElementsByClassName(removeClass)[0].classList.add(addClass);
    document.getElementById(className).getElementsByClassName(removeClass)[0].classList.remove(removeClass);
  }
  
  return (
    <div>
      {props.leagues.map((league, index)=> {
        return (
        <div>
        <div className="leagueMenu" onClick={openLeaguesMenu} id = {league.league.name}>
           <div className="leagueLogoMenuContainer">
             <img src={league.league.logo_url} alt="image" className="leagueLogoMenu"/>
           </div>  
          <span className="leagueNametitle">
            {league.league.name}
          </span>
          <img  className="orangeArrow"/>  
        </div>
        <div className={["teamNewContainer", league.league.name].join(' ')}>
          <Teams selectedTeamsApp = {props.selectedTeamsApp} teams = {league.teams} updateSelectedTeams = {props.updateSelectedTeams} leagueName = {league.league.name} />
        </div> 
      </div> 
        )
      })}
      {/*<div className = "saveBtn" onClick={save}>save</div>*/}
    </div>
  )
}