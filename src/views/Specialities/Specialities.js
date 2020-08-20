import React from 'react';
import AddSpeciality from 'components/AddSpeciality/AddSpeciality';
import SpecialityList from 'components/SpecialityList/SpecialityList';

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
