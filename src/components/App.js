import React, { Component } from 'react';
import { connect } from 'react-redux';

import Routes from './Routes';
import * as actionTypes from '../store/actions';

class App extends Component {
  render () {
    const { background, color } = this.props.theme 
    const themeSetting = {
      backgroundColor: `${background}`,
      color: `${color}`
    }

    return (
      <div className='App' style={themeSetting}>
        <button className='float-button' onClick={this.props.changeTheme}>ChangeTheme</button>
        <Routes />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    theme: state.thm.theme
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeTheme: () => dispatch({type: actionTypes.SET_THEME })
  };
};
  
  

export default connect(mapStateToProps, mapDispatchToProps)(App);
