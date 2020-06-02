import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const duelHistory = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
};

const card = {
  border: '1px solid #282c34',
  borderRadius: '5px',
  padding: '1rem',
  display: 'flex',
  flexDirection: 'column',
  marginRight: '1rem',
  marginBottom: '1rem',
};

const duelDetail = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const characterDesc = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

export class DuelHistory extends Component {
  render() {
    const characters = this.props.duelHistory || [];

    return (
      <div>
        <strong>Duels history:</strong>
        <div style={duelHistory}>
          {characters.map((character, index) => (
            <div className="card" style={card} key={index}>
              <div style={duelDetail}>
                <div style={characterDesc}>
                  <strong>{ character.leftCharacter.name }</strong>
                  <span>{ character.leftCharacter.speciality }</span>
                </div>
                <span>VS</span>
                <div style={characterDesc}>
                  <strong>{ character.rightCharacter.name }</strong>
                  <span>{ character.rightCharacter.speciality }</span>
                </div>
              </div>
              <div>
                <hr />
                <strong>Winner: </strong> { character.winner }
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

DuelHistory.propTypes = {
  duelHistory: PropTypes.array,
};

const mapStateToProps = (state) => {
  return {
    duelHistory: state.duelHistory,
  };
};

export default connect(mapStateToProps)(DuelHistory);
