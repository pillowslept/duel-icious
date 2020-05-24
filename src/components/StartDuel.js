import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { startDuel, updateCharacter } from '../actions';

export class StartDuel extends Component {

  handleChange(event, character) {
    const selected = event.target.checked;
    this.props.updateCharacter({ ...character, selected });
  }

  startDuel() {
    const charactersDuel = this.props.characters.filter(({ selected }) => selected);
    this.props.updateCharacter({ ...charactersDuel[0], selected: false });
    this.props.updateCharacter({ ...charactersDuel[1], selected: false });
    this.props.startDuel(charactersDuel[0], charactersDuel[1]);
  }

  render() {
    const characters = this.props.characters || [];
    const allowBtn = characters.filter(({ selected }) => selected).length === 2;

    return (
      <div className="character-list">
        <strong>Select two oponents to start a duel:</strong>
        {characters.map((character, index) => (
          <div className="character" key={index}>
            <input
              checked={character.selected}
              onChange={(event) => this.handleChange(event, character)}
              type="checkbox"
            />
            <strong>{ character.name }</strong> - <span>{ character.speciality }</span>
          </div>
        ))}
        {characters.length > 1 ?
          <div>
            <button onClick={() => this.startDuel()} disabled={!allowBtn}>Start duel</button>
          </div>
          : ''}
      </div>
    );
  }
}

StartDuel.propTypes = {
  characters: PropTypes.array,
  startDuel: PropTypes.func,
  updateCharacter: PropTypes.func,
};

const mapStateToProps = (state) => {
  return {
    characters: state.characters,
  };
};

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({
    startDuel: startDuel,
    updateCharacter: updateCharacter,
  }, dispatch);
};

export default connect(mapStateToProps, matchDispatchToProps)(StartDuel);
