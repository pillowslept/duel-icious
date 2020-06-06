import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addDuelWinner, clearDuel } from '../actions';

const duelStyle = {
  display: 'flex',
  justifyContent: 'space-evenly',
};

const description = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const vs = {
  display: 'flex',
  alignItems: 'center',
};

const result = {
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

export class Duel extends Component {

  showResults() {
    const { leftCharacter, rightCharacter } = this.props.duel;
    const winner = Math.round(Math.random()) === 1 ? leftCharacter.name : rightCharacter.name;
    this.props.addDuelWinner({ winner, ...this.props.duel });
    this.props.clearDuel();
  }

  render() {
    const { leftCharacter = {}, rightCharacter = {}, progress } = this.props.duel || {};

    return (
      <div>
        <strong>Actual duel:</strong>
        <div style={duelStyle}>
          <div style={description}>
            <strong>{ leftCharacter.name || 'Not selected' }</strong>
            <span>{ leftCharacter.speciality }</span>
          </div>
          <div style={vs}>--- VS ---</div>
          <div style={description}>
            <strong>{ rightCharacter.name || 'Not selected' }</strong>
            <span>{ rightCharacter.speciality }</span>
          </div>
        </div>
        { progress ?
          <div style={result}>
            <strong>
              And the winner is ...
            </strong>
            { leftCharacter.id ?
              <div>
                <button onClick={() => this.showResults()}>Show results</button>
                <button onClick={() => this.props.clearDuel()}>Cancel</button>
              </div>
              : ''
            }
          </div>
          : ''
        }
      </div>
    );
  }
}

Duel.propTypes = {
  duel: PropTypes.object,
  addDuelWinner: PropTypes.func,
  clearDuel: PropTypes.func,
};

const mapStateToProps = (state) => {
  return {
    duel: state.duel,
  };
};

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addDuelWinner: addDuelWinner,
    clearDuel: clearDuel,
  }, dispatch);
};

export default connect(mapStateToProps, matchDispatchToProps)(Duel);
