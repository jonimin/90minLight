import logo from '../images/90min_logo.svg';
import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class Header extends React.Component {
  render(){
    return (
    <div>
      <img src={logo} alt="image" className="header_logo"/>
    </div>
    )
  }
}

