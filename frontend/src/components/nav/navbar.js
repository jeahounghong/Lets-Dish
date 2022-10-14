
import React from 'react';
import { Link } from 'react-router-dom'
import './navbar.scss'

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  logoutUser(e) {
      e.preventDefault();
      this.props.logout();
  }

  // Selectively render links dependent on whether the user is logged in
  getLinks() {
      if (this.props.loggedIn) {
        return (
            <div>
                <Link to={'/tweets'}>All Tweets</Link>
                <Link to={'/profile'}>Profile</Link>
                <Link to={'/new_recipe'}>Write a Recipe!</Link>
                <button onClick={this.logoutUser}>Logout</button>
            </div>
        );
      } else {
        return (
            <div>
                <Link to={'/signup'}>Signup</Link>
                <Link to={'/login'}>Login</Link>
            </div>
        );
      }
  }

  render() {
      return (
        <div className='navbar-container'>
          <div className='left'>
            <Link to={'/'}>Let's Dish</Link>
          </div>
          <div className='middle'>
            <Link to={'/recipe'}>Search for recipe!</Link>
          </div>
          <div className='right'>
            { this.getLinks() }
          </div>
        </div>
      );
  }
}

export default NavBar;