import { ADD_USER, FILTER } from './constants';

export const addUser = user => ({
  type: ADD_USER,
  payload: user
})

export const filter = filter => ({
  type: FILTER,
  payload: filter
})
