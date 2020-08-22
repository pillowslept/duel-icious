import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  CardContainer,
  Card,
  Character,
  Title,
  DescriptionContainer,
} from './DuelHistory.css';

class DuelHistory extends Component {
  render() {
    const characters = this.props.duelHistory || [];

    return (
      <>
        <Title>Duels history:</Title>
        <CardContainer>
          {characters.map((character, index) => (
            <Card
              key={index}
            >
              <DescriptionContainer>
                <Character>
                  <Title>{ character.leftCharacter.name }</Title>
                  <span>{ character.leftCharacter.speciality }</span>
                </Character>
                <span>VS</span>
                <Character>
                  <Title>{ character.rightCharacter.name }</Title>
                  <span>{ character.rightCharacter.speciality }</span>
                </Character>
              </DescriptionContainer>
              <div>
                <hr />
                <Title>Winner: </Title> { character.winner }
              </div>
            </Card>
          ))}
        </CardContainer>
      </>
    );
  }
}

DuelHistory.propTypes = {
  duelHistory: PropTypes.array,
};

const mapStateToProps = (state) => {
  return {
    duelHistory: state.duelHistory,
  };
};

export default connect(mapStateToProps)(DuelHistory);
