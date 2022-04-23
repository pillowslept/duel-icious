import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addDuelWinner, clearDuel } from '../../actions';
import {
  Container,
  Description,
  Result,
  Versus,
} from './Duel.css';
import {
  Button,
  Row,
} from 'components/Styled/Common.css';

class Duel extends Component {

  showResults() {
    const { leftCharacter, rightCharacter } = this.props.duel;
    const winner = Math.round(Math.random()) === 1 ? leftCharacter.name : rightCharacter.name;
    this.props.addDuelWinner({ winner, ...this.props.duel });
    this.props.clearDuel();
  }

  render() {
    const { leftCharacter = {}, rightCharacter = {}, progress } = this.props.duel || {};

    return (
      <>
        <strong>Duel in progress:</strong>
        <Container>
          <Description>
            <strong>{ leftCharacter.name || 'Not selected' }</strong>
            <span>{ leftCharacter.speciality }</span>
          </Description>
          <Versus>--- VS ---</Versus>
          <Description>
            <strong>{ rightCharacter.name || 'Not selected' }</strong>
            <span>{ rightCharacter.speciality }</span>
          </Description>
        </Container>
        {progress &&
          <Result>
            <Row><strong>And the winner is ...</strong></Row>
            {(leftCharacter.id && rightCharacter.id) && (
              <Row>
                <Button onClick={() => this.showResults()}>Show results</Button>
                <Button
                  isCancel
                  onClick={() => this.props.clearDuel()}
                >
                  Cancel
                </Button>
              </Row>
            )}
          </Result>
        }
      </>
    );
  }
}

Duel.propTypes = {
  duel: PropTypes.object,
  addDuelWinner: PropTypes.func,
  clearDuel: PropTypes.func,
};

const mapStateToProps = (state) => {
  return {
    duel: state.duel,
  };
};

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addDuelWinner: addDuelWinner,
    clearDuel: clearDuel,
  }, dispatch);
};

export default connect(mapStateToProps, matchDispatchToProps)(Duel);
