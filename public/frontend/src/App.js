import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UsersComponent from './components/UsersComponent';
import PhotosComponent from './components/PhotosComponent';
import UserEditComponent from './components/UserEditComponent';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


class App extends Component {
  render() {

    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>

          <Router>
            <div>
              <Route path="/users" component={UsersComponent} />
              <Route path="/editUser/:userId" component={UserEditComponent} />
              <Route path="/photos" component={PhotosComponent} />
            </div>
          </Router>
        </div>
    );
  }
}

export default App;
