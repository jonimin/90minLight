import React, { Component } from 'react';

export class Teams extends React.Component {
  constructor(props) {
      super();
  }  

 updateSelectedTeams(leagueId,leagueName,teamId,teamName) {
    let className = document.getElementById(teamId).classList;
    if(className == "teamMenu") {
      document.getElementById(teamId).classList.remove("teamMenu");
      document.getElementById(teamId).classList.add("teamSelected");
      this.props.updateSelectedTeams(leagueId,leagueName,teamId,teamName,0)
    }
    else {
      document.getElementById(teamId).classList.remove("teamSelected");
      document.getElementById(teamId).classList.add("teamMenu");
      this.props.updateSelectedTeams(leagueId,leagueName,teamId,teamName,1)
    }
    
 }
  
  isSelected(id) {
    for (var key in this.props.selectedTeamsApp) {
      for (let i = 0; i <  this.props.selectedTeamsApp[key].length; i++) { 
        if (id == this.props.selectedTeamsApp[key][i].id)
          return "teamSelected"
      }
    }
    return "teamMenu";
  }

   
  render(){
    return (
     <div  className="teamsContainer">
        {this.props.teams.map((team, index) =>{
        return (
          <div id ={team.id} className={this.isSelected(team.id)} onClick={() =>this.updateSelectedTeams(team.league_id,this.props.leagueName,team.id,team.name)}>

            <div className="teamLogoContainer">
              <img src={team.logo_url} alt="image" className="teamLogo"/>
            </div>
             <div className="teamTitle">
              {team.name}
            </div>
          </div> 
        )
      })}
      </div>
    )
  }
}



