import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addDuelWinner, finishDuel } from '../actions';

const duelStyle = {
  display: 'flex',
  justifyContent: 'space-evenly',
};

const description = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  border: '1 px solid #282c34'
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

  constructor() {
    super();
    this.state = {
      showResult: false,
      winner: '',
    };
  }

  showResults() {
    const { leftCharacter, rightCharacter } = this.props.duel;
    const winner = Math.round(Math.random()) === 1 ? leftCharacter.name : rightCharacter.name;
    this.setState({ showResult: true, winner });
    this.props.addDuelWinner({ winner, ...this.props.duel });
    this.props.finishDuel();
  }

  render() {
    const { leftCharacter = {}, rightCharacter = {} } = this.props.duel || {};

    return (
      <div>
        <strong>Actual duel:</strong>
        <div style={duelStyle}>
          <div style={description}>
            <strong>{ leftCharacter.name }</strong>
            <span>{ leftCharacter.speciality }</span>
          </div>
          <div style={vs}>--- VS ---</div>
          <div style={description}>
            <strong>{ rightCharacter.name }</strong>
            <span>{ rightCharacter.speciality }</span>
          </div>
        </div>
        <div style={result}>
          <strong>
            And the winner is ...
          </strong>
          { leftCharacter.id ? <button onClick={() => this.showResults()}>Show results</button> : '' }
          { this.state.showResult ? <strong>{ this.state.winner }</strong> : '' }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    duel: state.duel,
  }
}

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addDuelWinner: addDuelWinner,
    finishDuel: finishDuel,
  }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Duel);
