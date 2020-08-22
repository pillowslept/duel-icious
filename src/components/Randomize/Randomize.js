import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addSpeciality } from '../../actions';
import {
  FlexContainer,
} from 'components/Styled/Container.css';
import {
  Separator,
} from './Randomize.css';

const specialities = ['Warrior', 'Paladin', 'Mage', 'Hunter'];
const generateNumber = () => Math.floor(Math.random() * 100);

class AddCharacter extends Component {

  randomize() {
    for (const name of specialities) {
      this.props.addSpeciality({
        name,
        velocity: generateNumber(),
        power: generateNumber(),
        resistance: generateNumber(),
      });
    }
  }

  render() {
    if (this.props.specialities.length) {
      return null;
    }

    return (
      <FlexContainer
        column
      >
        <Separator />
        <strong>Psssssss!!!</strong>
        <span>Wanna try randomized data?</span>
        <div>
          <button
            onClick={() => this.randomize()}
            type="button"
          >
            Randomize
          </button>
        </div>
      </FlexContainer>
    );
  }
}

AddCharacter.propTypes = {
  specialities: PropTypes.array,
  addSpeciality: PropTypes.func,
};

const mapStateToProps = (state) => {
  return {
    specialities: state.specialities,
  };
};

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addSpeciality: addSpeciality,
  }, dispatch);
};

export default connect(mapStateToProps, matchDispatchToProps)(AddCharacter);
