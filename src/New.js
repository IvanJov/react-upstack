import React, { Component } from 'react';
import './App.css';
import Nav from './Nav';
import { connect } from 'react-redux'
import { addUser } from './actions'

class New extends Component {
  save = (e) => {
    e.preventDefault();
    this.props.addUser({
      id: `${this.firstName.value} ${this.email.value}`,
      first_name: this.firstName.value,
      email: this.email.value
    })
    this.props.history.push('/');
  }

  render() {
    return (
      <div>
        <Nav />
        <form onSubmit={this.save}>
          <input type='text' placeholder='First Name' ref={e => this.firstName = e} />
          <input type='text' placeholder='Email' ref={e => this.email = e} />
          <button>Save</button>
        </form>
      </div>
    );
  }
}

export default connect(null, { addUser })(New);
