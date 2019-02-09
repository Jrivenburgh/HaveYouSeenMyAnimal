// Navbar.js

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/authentication';
import { withRouter } from 'react-router-dom';
// import css from 'index./css';

class Navbar extends Component {

    onLogout(e) {
        e.preventDefault();
        this.props.logoutUser(this.props.history);
    }

    render() {
        const {isAuthenticated, user} = this.props.auth;
        const authLinks = (
            <ul style={{
                fontFamily:'Righteous, cursive',
            }}
            className="navbar-nav ml-auto">
            <Link className="nav-link text-white" to="/Animals">Profile</Link>
                <a style={{
                    marginRight: '100px',
                    }}
                     href="#" className="nav-link text-white" onClick={this.onLogout.bind(this)}>
                    <img src={user.avatar} alt={user.name} title={user.name}
                        className="rounded-circle"
                        style={{ width: '25px', marginRight: '5px'}} />
                            Logout
                </a>
            </ul>
        )
      const guestLinks = (
        <ul style={{
            fontFamily:'Righteous, cursive',
        }}
        className="navbar-nav ml-auto">
            <li className="nav-item">
                <Link 
                className="nav-link text-white" to="/register">Sign Up</Link>
            </li>
            <li className="nav-item">
                <Link style={{
                    marginRight: '100px',
                }}
                    className="nav-link text-white" to="/login">Sign In</Link>
            </li>
        </ul>
      )
        return(
            <nav className="navbar navbar-expand-lg navbar-white bg-dark">
                <Link style={{
                    marginLeft: '100px',
                    textShadow: '2px 2px white',
                    fontSize: '25px',
                    fontWeight:'bold',
                    fontFamily:'Righteous, cursive',
                }}
                className="navbar-brand text-info" to="/">EyeOut</Link>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    {isAuthenticated ? authLinks : guestLinks}
                </div>
            </nav>
        )
    }
}
Navbar.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps, { logoutUser })(withRouter(Navbar));