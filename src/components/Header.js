import logo from '../images/90min_logo.svg';
var React = require('react');
var PropTypes = require('prop-types');


export class Header extends React.Component {
  render(){
    return (
    <div>
      <img src={logo} alt="image" className="header_logo"/>
    </div>
    )
  }
}

