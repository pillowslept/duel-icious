import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addCharacter } from '../../actions';
import { FlexContainer } from 'components/Styled/Container.css';
import {
  Button,
  Input,
  Label,
  Row,
} from 'components/Styled/Common.css';

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
  }

  render() {
    const specialities = this.props.specialities || [];

    return (
      <FlexContainer
        align="center"
        column
        justifyContent="center"
      >
        <Row>
          <Label>Name:</Label>
          <Input
            type="text"
            value={this.state.name}
            onChange={(event) => this.handleChange(event, 'name')}
          />
        </Row>
        <Row>
          <Label>Speciality:</Label>
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
        </Row>
        <Row>
          <Button
            disabled={!this.state.name || !this.state.speciality}
            onClick={() => this.add()}
            type="button"
          >
            Add
          </Button>
        </Row>
      </FlexContainer>
    );
  }
}

AddCharacter.propTypes = {
  specialities: PropTypes.array,
  incremental: PropTypes.object,
  addCharacter: PropTypes.func,
};

const mapStateToProps = (state) => {
  return {
    incremental: state.incremental,
    specialities: state.specialities,
  };
};

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addCharacter: addCharacter,
  }, dispatch);
};

export default connect(mapStateToProps, matchDispatchToProps)(AddCharacter);
