import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import '../styles/NavBar.scss';
import logo from '../logo.svg';

export class NavBar extends Component {
  render() {
    const specialitiesClass = !this.props.specialities.length ? 'blink' : '';
    const charactersClass = (!specialitiesClass && !this.props.characters.length) ? 'blink' : '';
    const duelsClass = (!specialitiesClass && !charactersClass && !this.props.duelHistory.length) ? 'blink' : '';

    return (
      <div className="nav-bar">
        <div className="navigation">
          <img src={logo} className="logo" alt="logo" />
          <Link className="link hide-sm"
            to="/"
          >
            Duel-icious web application
          </Link>
        </div>
        <div className="navigation">
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
