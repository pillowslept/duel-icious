import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import logo from '../../logo.svg';

import {
  BlinkLink,
  Container,
  LogoImg,
  OptionsContainer,
} from './NavBar.css';

class NavBar extends Component {
  render() {
    const hasSpeciality = !this.props.specialities.length ? 1 : 0;
    const hasCharacter = (!hasSpeciality && !this.props.characters.length) ? 1 : 0;
    const hasDuels = (!hasSpeciality && !hasCharacter && !this.props.duelHistory.length) ? 1 : 0;

    return (
      <Container>
        <OptionsContainer>
          <LogoImg src={logo} alt="logo" />
          <BlinkLink
            className="hide-sm"
            to="/"
          >
            Duel-icious web application
          </BlinkLink>
        </OptionsContainer>
        <OptionsContainer>
          <BlinkLink
            blink={hasSpeciality}
            to="/specialities"
          >
            Specialities
          </BlinkLink>
          <BlinkLink
            blink={hasCharacter}
            to="/characters"
          >
            Characters
          </BlinkLink>
          <BlinkLink
            blink={hasDuels}
            to="/duels"
          >
            Duels
          </BlinkLink>
        </OptionsContainer>
      </Container>
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
