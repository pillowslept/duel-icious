import React, { Component } from 'react';
import { connect } from 'react-redux';

export class CharacterList extends Component {
  render() {
    const characters = this.props.characters || [];

    return (
      <div className="list">
        <strong>Actual characters:</strong>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Speciality</th>
            </tr>
          </thead>
          <tbody>
            {characters.map((speciality, index) => (
              <tr key={index}>
                <td>{ speciality.name }</td>
                <td>{ speciality.speciality }</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    characters: state.characters,
  }
}

export default connect(mapStateToProps)(CharacterList);
