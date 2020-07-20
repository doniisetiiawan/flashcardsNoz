import React, { Component } from 'react';
import { View } from 'react-native';

import HeadingText from '../HeadingText';
import mkAnswerButtons from './ReviewButtons';
import mkContinueQuitButtons from './MkContinueQuitButtons';

class ViewCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showingAnswer: false,
      wasCorrect: false,
    };
  }

  _continue = () => {
    this.setState({
      showingAnswer: false,
      wasCorrect: false,
    });
    this.props.continue();
  };

  _selectAnswer = (correct) => {
    this.props.onReview(correct);
    this.setState({
      showingAnswer: true,
      wasCorrect: correct,
    });
  };

  render() {
    return (
      <View>
        <HeadingText>{this.props.prompt}</HeadingText>
        {mkAnswerButtons(
          this.props.answers,
          this.props.correctAnswer,
          this.state.showingAnswer,
          this.state.wasCorrect,
          this._selectAnswer,
        )}
        {mkContinueQuitButtons(
          this.state.showingAnswer,
          this.state.wasCorrect,
          this._continue,
          this.props.quit,
        )}
      </View>
    );
  }
}

export default ViewCard;
