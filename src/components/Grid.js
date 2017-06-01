var React = require('react');
var PropTypes = require('prop-types');
var api = require('../api/Api');

//replace to import
export class Grid extends React.Component {
  constructor(props) {
      super();
      this.state = {
        feed: null,
        feedId: props.teamId
      };
    }  
  
  componentWillReceiveProps(nextProps){
     this.updateFeedPosts(nextProps);
  }

  componentDidMount() {
    this.updateFeed(this.state.selectedFeed)
  }
   
  updateFeedPosts(nextProps) {
    api.fetchTeamFeed(nextProps.teamId)
      .then((selectedFeed)=>this.setState(()=>({feed: selectedFeed})))
  }

  setSelectedFeed(feed) {
    this.setState({feed})
  }

  updateFeed(selectedFeed) {
    this.setState(function () {
      return {
        feed: selectedFeed,
        feedId: this.props.teamId
      }
    });
   
    api
      .fetchTeamFeed(this.state.feedId)
      .then(this.setSelectedFeed.bind(this))
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

function GridArticels (props) {
  var articels = props.articels.slice(1, 19); 
  return (
    <div>
    <ul className='article-list'>
      {articels.map(function (article, index) {
        return (
          <li key={index} className="article-item">
              <div>
                 <a href={`http://www.90min.com/hybrid/posts/${article.article.id}`} target="_blank">
                <div className="article__image_container">
                  <img src={article.article.image_url} alt="image" className="article__image"/>
                </div>
                  </a>
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

