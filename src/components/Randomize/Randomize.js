import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  addSpeciality,
  addCharacter,
} from '../../actions';
import { FlexContainer } from 'components/Styled/Container.css';
import { Separator } from './Randomize.css';
import { Button } from 'components/Styled/Common.css';

const specialities = [
  { name: 'Warrior', characters: [{ name: 'Kelv' }] },
  { name: 'Paladin', characters: [{ name: 'Aldar' }] },
  { name: 'Mage', characters: [{ name: 'Ello' }] },
  { name: 'Hunter', characters: [{ name: 'Tyrathan' }, { name: 'Vidar' }] },
];
const generateNumber = () => Math.floor(Math.random() * 100);

class Randomize extends Component {

  randomize() {
    for (const speciality of specialities) {
      this.props.addSpeciality({
        name: speciality.name,
        velocity: generateNumber(),
        power: generateNumber(),
        resistance: generateNumber(),
      });

      for (const character of speciality.characters) {
        this.props.addCharacter({
          name: character.name,
          speciality: speciality.name,
        });
      }
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
          <Button
            onClick={() => this.randomize()}
            type="button"
          >
            Randomize
          </Button>
        </div>
      </FlexContainer>
    );
  }
}

Randomize.propTypes = {
  addSpeciality: PropTypes.func,
  addCharacter: PropTypes.func,
  specialities: PropTypes.array,
};

const mapStateToProps = (state) => {
  return {
    specialities: state.specialities,
  };
};

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addSpeciality: addSpeciality,
    addCharacter: addCharacter,
  }, dispatch);
};

export default connect(mapStateToProps, matchDispatchToProps)(Randomize);
