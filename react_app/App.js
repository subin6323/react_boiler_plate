import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import 'antd/dist/antd.css'
import './css/style.css'
import './css/custom.css'


import Dashboard from './containers/dashboard'
class App extends Component{
  constructor(props){
    super(props)
    this.state={

    }
  }
  componentWillMount(){
  }
  componentDidMount(){
    
  }
   render(){
    let route=""
      return( 
        <Router>
        <Route exact path="/" component={Dashboard} />
        </Router>
      );
   }
}

function mapStateToProps(state){
  return{};
}
function matchDispatchToProps(dispatch){
  return bindActionCreators({}, dispatch);
}
export default connect(mapStateToProps, matchDispatchToProps)(App);