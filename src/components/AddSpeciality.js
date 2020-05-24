import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addSpeciality as add } from '../actions';

export class AddSpeciality extends Component {

  constructor() {
    super();
    this.state = {
      name: '',
      power: 0,
      velocity: 0,
      resistance: 0,
      id: 1,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, field) {
    this.setState({ [field]: event.target.value });
  }

  add() {
    this.props.add({ ...this.state });
    this.setState({ name: '', power: 0, velocity: 0, resistance: 0, counter: this.state.id + 1 });
  }

  isValidForm() {
    return !!this.state.name && !!this.state.power && !!this.state.velocity && !!this.state.resistance;
  }

  render() {
    return (
      <div className="container">
        <div>
          <label><strong>Name: </strong></label>
          <input
            type="text"
            value={this.state.name}
            onChange={(event) => this.handleChange(event, 'name')}
          />
        </div>
        <div>
          <label><strong>Velocity: </strong></label>
            <input
              type="number"
              min="1"
              max="100"
              value={this.state.velocity}
              onChange={(event) => this.handleChange(event, 'velocity')}
            />
        </div>
        <div>
          <label><strong>Power: </strong></label>
            <input
              type="number"
              min="1"
              max="100"
              value={this.state.power}
              onChange={(event) => this.handleChange(event, 'power')}
            />
        </div>
        <div>
          <label><strong>Resistance: </strong></label>
            <input
              type="number"
              min="1"
              max="100"
              value={this.state.resistance}
              onChange={(event) => this.handleChange(event, 'resistance')}
            />
        </div>
        <button
          disabled={!this.isValidForm()}
          onClick={() => this.add()}
          type="button"
        >
          Add
        </button>
      </div>
    );
  }
}

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({
    add: add,
  }, dispatch)
}

export default connect(null, matchDispatchToProps)(AddSpeciality);
