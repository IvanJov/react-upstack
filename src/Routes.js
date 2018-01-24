import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';
import New from './New';
import data from "./data";

export default class Routes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [ ...data ]
    };
  }

  search = (name) => {
    this.setState({
      data: this.state.data.filter(d => d.first_name.toLowerCase().includes(name.toLowerCase()))
    })
  };

  render () {
    return (
      <Router>
        <div>
          <Route exact path='/' component={App} data={this.state.data} />
          <Route path='/new' component={New} data={this.state.data} />
        </div>
      </Router>
    );
  }
}
