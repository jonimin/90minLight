import Api from '../api/Api'
import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class FeedSelection extends React.Component {
 
  constructor(props) {
    super();
    this.state = {
      options: null,
      selected: null,
      feedName: props.teamName
    };
  }  

componentDidMount() {
  this.updateOptions();
}

updateSelectedTeamId(selectedTeam,feedName) {
  this.setState(()=> {
    return {
      ...this.state,
      selected: selectedTeam,
      feedName:feedName
    }
  });
  this.props.onUpdateFeed(selectedTeam,feedName);
}

openTeamMenu() {
  this.props.openTeamMenu();
}


updateOptions() {
  this.setState(function () {
    return {
      ...this.state,
      options:this.props.selectedTeamsApp
    }
  });
}

render(){
  return (
    <div >
      <div> 
        {!this.state.options
          ? <p>LOADING!</p>
          : <SelectOptions leagues = {this.state.options}  
                           selected = {this.state.selected} 
                           updateFeed = {this.updateSelectedTeamId.bind(this)}
                           feedName = {this.state.feedName}
                           openTeamMenu = {this.openTeamMenu.bind(this)}/> }
      </div>
    </div>
    )
  }
}

function SelectOptions (props) {
  
  function updateFeed(){
    let selectedindex = document.getElementById("selectedTeam").options.selectedIndex;
    let teamName = document.getElementById("selectedTeam").options[selectedindex].innerHTML;
    if(teamName == "Add More"){
      props.openTeamMenu();
    }
    else {
      props.updateFeed(document.getElementById("selectedTeam").value,teamName);    
    }
  }

  return (
    <div>
    <div className="selection_Container">
      <div className="selection_logo"></div>
      <div className="selection_title">
         {props.feedName}
      </div>  
      <select id="selectedTeam" onChange={updateFeed}>
      {Object.keys(props.leagues).map(function (key) {
        var teams = props.leagues[key]
          return (  
            <optgroup label={key}>
            {teams.map(function (team, index) {
              return (
                <option key={index} value={team.id}>
                  {team.name}
                </option>
              )
            })}
            </optgroup>
          )
      })}
      <optgroup >
        <option  value="addMore">
            Add More
          </option>
      </optgroup>
       </select>
    </div>  
    </div>    
  )
}
