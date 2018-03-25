import React, { Component } from 'react';
import Nav from './Nav';
import { loadUsers } from '../store';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Users from './Users';
// import User from './User';
// import UserCreate from './UserCreate';

class App extends Component {

  componentDidMount(){
    this.props.loadUsers();
  }
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Route exact path='/' component={ Home }  />
          <Route exact path='/users' component={ Users }  />
        </div>
      </Router>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadUsers: () => dispatch(loadUsers())
  }
}

export default connect(null,mapDispatchToProps)(App);
