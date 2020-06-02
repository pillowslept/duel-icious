import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import logo from '../logo.svg';

const navBar = {
  padding: '0.8rem',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: '#282c34',
  color: 'white',
};

const logoStyle = {
  width: '50px',
};

const navigation = {
  display: 'flex',
  alignItems: 'center',
};

export class NavBar extends Component {
  render() {
    const specialitiesClass = !this.props.specialities.length ? 'blink' : '';
    const charactersClass = (!specialitiesClass && !this.props.characters.length) ? 'blink' : '';
    const duelsClass = (!specialitiesClass && !charactersClass && !this.props.duelHistory.length) ? 'blink' : '';

    return (
      <div style={navBar}>
        <div style={navigation}>
          <img src={logo} style={logoStyle} alt="logo" />
          <Link className="link hide-sm"
            to="/"
          >
            Duel-icious web application
          </Link>
        </div>
        <div style={navigation}>
          <Link
            className={ 'link ' + specialitiesClass }
            to="/specialities"
          >
            Specialities
          </Link>
          <Link
            className={ 'link ' + charactersClass }
            to="/characters"
          >
            Characters
          </Link>
          <Link
            className={ 'link ' + duelsClass }
            to="/duels"
          >
            Duels
          </Link>
        </div>
      </div>
    );
  }
}

NavBar.propTypes = {
  specialities: PropTypes.array,
  characters: PropTypes.array,
  duelHistory: PropTypes.array,
};

const mapStateToProps = (state) => {
  return {
    specialities: state.specialities,
    characters: state.characters,
    duelHistory: state.duelHistory,
  };
};

export default connect(mapStateToProps)(NavBar);
