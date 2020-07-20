/* eslint-disable react/no-access-state-in-setstate */
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';

import ViewCard from './ViewCard';
import mkReviewSummary from './ReviewSummary';
import colors from '../../styles/colors';
import {
  nextReview,
  stopReview,
} from '../../actions/creators';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blue,
    flex: 1,
    paddingTop: 24,
  },
});

class ReviewScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      numReviewed: 0,
      numCorrect: 0,
    };
  }

  onReview = (correct) => {
    if (correct) {
      this.setState({
        numCorrect: this.state.numCorrect + 1,
      });
    }
    this.setState({
      numReviewed: this.state.numReviewed + 1,
    });
  };

  _nextReview = () => {
    this.props.nextReview();
  };

  _quitReviewing = () => {
    this.props.stopReview();
    this.props.navigation.goBack();
  };

  _contents() {
    if (
      !this.props.reviews
      || this.props.reviews.length === 0
    ) {
      return null;
    }

    if (
      this.props.currentReview < this.props.reviews.length
    ) {
      return (
        <ViewCard
          onReview={this.onReview}
          continue={this._nextReview}
          quit={this._quitReviewing}
          {...this.props.reviews[this.props.currentReview]}
        />
      );
    }
    const percent = this.state.numCorrect / this.state.numReviewed;
    return mkReviewSummary(percent, this._quitReviewing);
  }

  render() {
    return (
      <View style={styles.container}>
        {this._contents()}
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  nextReview: () => {
    dispatch(nextReview());
  },
  stopReview: () => {
    dispatch(stopReview());
  },
});

const mapStateToProps = (state) => ({
  reviews: state.currentReview.questions,
  currentReview: state.currentReview.currentQuestionIndex,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ReviewScreen);
