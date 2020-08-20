import React from 'react';
import AddSpeciality from 'components/AddSpeciality';
import SpecialityList from 'components/SpecialityList';

const Specialities = () => {
  return (
    <div>
      <AddSpeciality />
      <hr />
      <SpecialityList />
    </div>
  );
};

export default Specialities;
