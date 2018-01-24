import { combineReducers } from 'redux';
import data from './data';
import { ADD_USER, FILTER } from './constants';

const users = (store = data, action) => {
  switch (action.type) {
    case ADD_USER:
      return [
        ...store,
        action.payload
      ]
    default:
      return store
  }
}

const filter = (store = '', action) => {
  switch (action.type) {
    case FILTER:
      return action.payload
    default:
      return store
  }
}

export default combineReducers({
  users,
  filter
})