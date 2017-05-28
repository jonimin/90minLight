var React = require('react');
var PropTypes = require('prop-types');
var api = require('../api/Api');

//replace to import
export class Grid extends React.Component {
  constructor(props) {
      super();
      this.state = {
        feed: null,
      };
    }  
  
  //trigger 1 time only
  componentDidMount() {
    this.updateFeed(this.state.selectedFeed)
  }

  updateFeed(selectedFeed) {
    this.setState(function () {
      return {
        feed: selectedFeed,
      }
    });

    api.fetchTeamFeed()
      .then((selectedFeed)=>this.setState(()=>({feed: selectedFeed})))
  }

// render trigger every time the state changed
  render(){
    return (
    <div className="grid_container">
      <div className="grid_items"> 
        {!this.state.feed
          ? <p>LOADING!</p>
          : <GridArticels articels = {this.state.feed} />}
      </div>
    </div>
    )
  }


}
function Article (props) {
  var articles = api.getPost().then(function(post){
     console.log(post);
        return {
          post
        }
      })
}

function GridArticels (props) {
  var click =  function (){
     return(
      {/*<Router>
        <div>
          <Route path="/post" Component={Article}/>
        </div>
      </Router>*/}
      )
  } 
  
  var articels = props.articels.slice(1, 19);
  
  return (
    <div>
      {Article()}
    <ul className='article-list'>
      {articels.map(function (article, index) {
        return (
          /*<li className="article-item" onClick={() => { click()}}>*/
            <li className="article-item">
            <div>
              <div className="article__image_container">
                <img src={article.article.image_url} alt="image" className="article__image"/>
              </div>
              <div className="article__title">
                {article.article.title}
              </div>  
            </div>
          </li>
        )
      })}
    </ul>
    </div>
  )
}

