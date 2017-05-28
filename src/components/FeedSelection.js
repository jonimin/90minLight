var React = require('react');
var PropTypes = require('prop-types');
var api = require('../api/Api');

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
  console.log("componentDidMount")
  this.updateOptions(this.state.options)
}

updateSelectedTeamId(selectedTeam,feedNameu) {
  console.log(feedNameu);
  this.setState(()=> {
    return {
      ...this.state,
      selected: selectedTeam,
      feedName:feedNameu
    }
  });
}

updateOptions(optionsFromServer) {
  this.setState(function () {
    return {
      ...this.state,
      options: optionsFromServer,
    }
  });

  api.getLegues()
    .then((optionsFromServer)=>this.setState(()=>({options: optionsFromServer})))
}
render(){

  return (
    <div >
      <div> 
        {!this.state.options
          ? <p>LOADING!</p>
          : <SelectOptions options = {this.state.options}  
                           selected = {this.state.selected} 
                           updateFeed = {this.updateSelectedTeamId.bind(this)}
                           feedName = {this.state.feedName}/> }}
      </div>
    </div>
    )
  }
}


function SelectOptions (x) {
  
  function updateFeed(){
    let selectedindex = document.getElementById("selectedTeam").options.selectedIndex;
    let teamName = document.getElementById("selectedTeam").options[selectedindex].innerHTML;
    x.updateFeed(document.getElementById("selectedTeam").value,teamName);
   
    
  }
  return (
    <div>
    <div className="selection_Container">
      <div className="selection_logo"></div>
      <div className="selection_title">
         {x.feedName}
      </div>
    <select id="selectedTeam" onChange={updateFeed}>
      {x.options.map(function (option, index) {
        return (
          <option value={option.id} >
            {option.name}
          </option>
        )
      })}
    </select>
    </div>  
    </div>
  )
}
