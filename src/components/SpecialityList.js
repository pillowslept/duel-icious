import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export class SpecialityList extends Component {
  render() {
    const specialities = this.props.specialities || [];

    return (
      <div className="list">
        <strong>Available specialities:</strong>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Velocity</th>
              <th>Power</th>
              <th>Resistance</th>
            </tr>
          </thead>
          <tbody>
            {specialities.map((speciality, index) => (
              <tr key={index}>
                <td>{ speciality.name }</td>
                <td>{ speciality.velocity }</td>
                <td>{ speciality.power }</td>
                <td>{ speciality.resistance }</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

SpecialityList.propTypes = {
  specialities: PropTypes.array,
};

const mapStateToProps = (state) => {
  return {
    specialities: state.specialities,
  };
};

export default connect(mapStateToProps)(SpecialityList);
