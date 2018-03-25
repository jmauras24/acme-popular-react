import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { updateRating } from '../store';

class Users extends Component {
  constructor(props){
    super(props);

    this.onChangeRating = this.onChangeRating.bind(this);
  }

  onChangeRating(user, operator){
    console.log('JJJJJJ',user, operator, user.rating, typeof(user.rating));
    const _user = {
      rating: operator === 'sub' ? user.rating - 1 : user.rating + 1,
      id: user.id,
      name: user.name
    }
    console.log(_user)
    this.props.updateRating(_user);
  }

  render(){
    const { users } = this.props;
    const { onChangeRating } = this;
  return(
      <ul>
      {
        users.map(user => {
          return(
            <li key={ user.id }>
              <button onClick={() => onChangeRating(user,'sub')}> - </button>
              <Link to={ `/users/${user.id}` }>
              { user.name }  { user.rating }
              </Link>
              <button onClick={() => onChangeRating(user,'add')}> + </button>
            </li>
          )
        })
      }
      </ul>
    )
  }
}

const mapStateToProps = (state) => {
  console.log('map', state.users.users)
  return {
    users: state.users.users // can't see why this is happening
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateRating: (user) => dispatch(updateRating(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);
