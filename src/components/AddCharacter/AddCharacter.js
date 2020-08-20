import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addCharacter, incrementCharacterId } from '../../actions';
import {
  FlexContainer,
} from 'components/Styled/Container.css';

class AddCharacter extends Component {

  constructor() {
    super();
    this.state = {
      name: '',
      speciality: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, field) {
    this.setState({ [field]: event.target.value });
  }

  add() {
    this.props.addCharacter({ ...this.state, id: this.props.incremental.character });
    this.setState({ name: '', speciality: '' });
    this.props.incrementCharacterId();
  }

  render() {
    const specialities = this.props.specialities || [];

    return (
      <FlexContainer
        align="center"
        column
        justifyContent="center"
      >
        <div>
          <label><strong>Name: </strong></label>
          <input
            type="text"
            value={this.state.name}
            onChange={(event) => this.handleChange(event, 'name')}
          />
        </div>
        <div>
          <label><strong>Speciality: </strong></label>
          <select value={this.state.speciality} onChange={(event) => this.handleChange(event, 'speciality')}>
            <option
              value={''}
            >
              Select an option
            </option>
            {specialities.map((speciality, index) => (
              <option
                key={index}
                value={speciality.name}
              >
                { speciality.name } (V{speciality.velocity}) (P{speciality.power}) (R{speciality.resistance})
              </option>
            ))}
          </select>
        </div>
        <button
          disabled={!this.state.name || !this.state.speciality}
          onClick={() => this.add()}
          type="button"
        >
          Add
        </button>
      </FlexContainer>
    );
  }
}

AddCharacter.propTypes = {
  specialities: PropTypes.array,
  incremental: PropTypes.object,
  addCharacter: PropTypes.func,
  incrementCharacterId: PropTypes.func,
};

const mapStateToProps = (state) => {
  return {
    specialities: state.specialities,
    incremental: state.incremental,
  };
};

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addCharacter: addCharacter,
    incrementCharacterId: incrementCharacterId,
  }, dispatch);
};

export default connect(mapStateToProps, matchDispatchToProps)(AddCharacter);
