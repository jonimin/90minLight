import React, { Component } from 'react';

export class Teams extends React.Component {
  constructor(props) {
      super();
      // this.state = {
       
      // };
    }  
    
  render(){
    return (
     <div  className="teamsContainer">
        {this.props.teams.map(function (team, index) {
        return (
          <div className="teamMenu">
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
