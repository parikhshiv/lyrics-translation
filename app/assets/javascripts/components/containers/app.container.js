import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as CounterActions from '../actions/counter';
import { HomePage } from './homePage.container';

export class App extends Component {
  render() {
    return (<HomePage {...this.props}/>);
  }
}

function mapStateToProps(state) {
    return Object.assign({}, state);
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(CounterActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);