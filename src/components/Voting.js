import React, { Component } from 'react';
import Winner from './Winner';
import Vote from './Vote';
import { connect } from 'react-redux';
import * as actionCreators from '../action_creators';

export default class Voting extends Component {
  render() {
    const { winner } = this.props;
    return (
      <div className="voting">
        {winner ? <Winner winner={winner} /> : <Vote {...this.props} />}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    pair: state.getIn(['vote', 'pair']),
    hasVoted: state.get('hasVoted'),
    winner: state.get('winner')
  };
}

export const VotingContainer = connect(mapStateToProps, actionCreators)(Voting);
