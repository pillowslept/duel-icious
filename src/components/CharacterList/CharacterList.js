import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Table,
} from 'components/Styled/Table.css';

class CharacterList extends Component {
  render() {
    const characters = this.props.characters || [];

    return (
      <div className="list">
        <strong>Actual characters:</strong>
        <Table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Speciality</th>
            </tr>
          </thead>
          <tbody>
            {characters.map((speciality, index) => (
              <tr
                key={index}
              >
                <td>{ speciality.name }</td>
                <td>{ speciality.speciality }</td>
              </tr>
            ))}
          </tbody>
        </Table>
        { characters.length &&
          <i className="small">Total: { characters.length }</i>
        }
      </div>
    );
  }
}

CharacterList.propTypes = {
  characters: PropTypes.array,
};

const mapStateToProps = (state) => {
  return {
    characters: state.characters,
  };
};

export default connect(mapStateToProps)(CharacterList);
