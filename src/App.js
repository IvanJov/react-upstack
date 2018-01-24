import React, { Component } from 'react';
import './App.css';
import Item from './Item';
import Nav from './Nav';
import SearchBox from './SearchBox';
import { connect } from 'react-redux';
import { filter } from './actions';

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <SearchBox filter={this.props.filter} />
        {
          this.props.users.map(d => (
            <Item firstName={d.first_name} email={d.email} key={d.id} />
          ))
        }
      </div>
    );
  }
}

const mapStateToProps = store => {
  let users = store.users;
  if (store.filter !== '')
    users = store.users.filter(d => d.first_name.toLowerCase().includes(store.filter.toLowerCase()));

  return { users };
}

const mapDispatchToProps = {
  filter
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
