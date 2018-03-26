import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Nav = ({ users }) => {
  console.log('--->', users)
  return(
    <ul>
      <li>
        <Link to='/'>
          Home
        </Link>
      </li>
      <li>
        <Link to='/users'>
         Users ({ users.users.length })
        </Link>
      </li>
    </ul>
  );
};

const mapStateToProps = (state) => {
  return {
    users: state.users
  };
};

export default connect(mapStateToProps)(Nav);
