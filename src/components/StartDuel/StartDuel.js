import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { startDuel, updateCharacter } from '../../actions';

import {
  Button,
  Row,
} from 'components/Styled/Common.css';

class StartDuel extends Component {

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
      <Fragment>
        <Row>
          <strong>Select two opponents to start a duel:</strong>
          {characters.map((character) => (
            <div className="character" key={character.id}>
              <input
                disabled={this.props.duel.progress}
                id={'checkbox_' + character.id}
                checked={character.selected}
                onChange={(event) => this.handleChange(event, character)}
                type="checkbox"
              />
              <label htmlFor={ 'checkbox_' + character.id }>
                <strong>{ character.name }</strong> - <span>{ character.speciality }</span>
              </label>
            </div>
          ))}
        </Row>
        {characters.length > 1 && (
          <Row>
            <Button onClick={() => this.startDuel()} disabled={!allowBtn}>Start duel</Button>
          </Row>
        )}
      </Fragment>
    );
  }
}

StartDuel.propTypes = {
  characters: PropTypes.array,
  duel: PropTypes.object,
  startDuel: PropTypes.func,
  updateCharacter: PropTypes.func,
};

const mapStateToProps = (state) => {
  return {
    characters: state.characters,
    duel: state.duel,
  };
};

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({
    startDuel: startDuel,
    updateCharacter: updateCharacter,
  }, dispatch);
};

export default connect(mapStateToProps, matchDispatchToProps)(StartDuel);
