import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addSpeciality as add } from '../../actions';
import {
  FlexContainer,
} from 'components/Styled/Container.css';
import {
  Legend,
  Button,
} from 'components/Styled/Common.css';

class AddSpeciality extends Component {

  constructor() {
    super();
    this.state = {
      name: '',
      power: 0,
      velocity: 0,
      resistance: 0,
      id: 1,
      min: 1,
      max: 100,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, field, type = 'number') {
    let value = event.target.value;
    if (type === 'number') {
      value = Number(value);
    }
    this.setState({ [field]: value });
  }

  add() {
    this.props.add({ ...this.state });
    this.setState({ name: '', power: 0, velocity: 0, resistance: 0, counter: this.state.id + 1 });
  }

  validateMinMax(property) {
    return !!property && property <= this.state.max && property >= this.state.min;
  }

  isValidForm() {
    return !!this.state.name
      && this.validateMinMax(this.state.power)
      && this.validateMinMax(this.state.velocity)
      && this.validateMinMax(this.state.resistance);
  }

  render() {
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
            onChange={(event) => this.handleChange(event, 'name', 'string')}
          />
        </div>
        <div>
          <label><strong>Velocity*: </strong></label>
          <input
            type="number"
            min={this.state.min}
            max={this.state.max}
            value={this.state.velocity}
            onChange={(event) => this.handleChange(event, 'velocity')}
          />
        </div>
        <div>
          <label><strong>Power*: </strong></label>
          <input
            type="number"
            min={this.state.min}
            max={this.state.max}
            value={this.state.power}
            onChange={(event) => this.handleChange(event, 'power')}
          />
        </div>
        <div>
          <label><strong>Resistance*: </strong></label>
          <input
            type="number"
            min={this.state.min}
            max={this.state.max}
            value={this.state.resistance}
            onChange={(event) => this.handleChange(event, 'resistance')}
          />
        </div>
        <Button
          disabled={!this.isValidForm()}
          onClick={() => this.add()}
          type="button"
        >
          Add
        </Button>
        <Legend>
          * Min: { this.state.min } - Max: { this.state.max }
        </Legend>
      </FlexContainer>
    );
  }
}

AddSpeciality.propTypes = {
  add: PropTypes.func,
};

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({
    add: add,
  }, dispatch);
};

export default connect(null, matchDispatchToProps)(AddSpeciality);
