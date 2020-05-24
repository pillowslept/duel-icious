import React, { Component } from 'react';
import AddSpeciality from '../components/AddSpeciality';
import SpecialityList from '../components/SpecialityList';

export class Specialities extends Component {
  render() {
    return (
      <div>
        <AddSpeciality />
        <hr />
        <SpecialityList />
      </div>
    );
  }
}

export default Specialities;
