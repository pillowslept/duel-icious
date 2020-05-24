import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addCharacter } from '../actions';

export class AddCharacter extends Component {

  constructor() {
    super();
    this.state = {
      name: '',
      speciality: '',
      id: 1,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, field) {
    this.setState({ [field]: event.target.value });
  }

  add() {
    this.props.addCharacter({ ...this.state });
    this.setState({ name: '', speciality: '', id: this.state.id + 1 });
  }

  render() {
    const specialities = this.props.specialities || [];

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
                { speciality.name } (P{speciality.power}) (V{speciality.velocity}) (R{speciality.resistance})
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
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    specialities: state.specialities,
  }
}

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addCharacter: addCharacter,
  }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(AddCharacter);
