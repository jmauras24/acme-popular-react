import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';

const initialize = {
  users: []
}

const SET_USERS = 'SET_USERS';
const UPDATE_USER = 'UPDATE_USER';

const usersReducers = (state = initialize, action) => {
  switch(action.type){
    case 'SET_USERS':
      console.log(`SET_USERS`, action.users, action.users.length)
      return  Object.assign({}, state, { users: action.users });
    case UPDATE_USER:
    return Object.assign({}, state, {
      users: [
          ...state.users.filter(user => user.id !== action.user.id),
          action.user
        ]
      })
      break;
    default:
      return state;
  }
}

const reducer = combineReducers({
  users: usersReducers
})

export const updateRating = (user) => {
  return (dispatch) => {
    return axios.put(`/api/users/${user.id}`, user)
      .then(res => res.data)
      .then(user => {
        console.log('updated user', user);
        dispatch({
          type: UPDATE_USER,
          user
        })
      }
      )
      .then(() => {
        document.location.hash = '/users';
      })
  }
}

export const loadUsers = () => {
  return (dispatch) => {
    return axios.get('/api/users')
      .then(res => res.data)
      .then( users => {
        console.log('set users',users)
        dispatch({
          type: SET_USERS,
          users
        })
      }
      )
  }
}

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
