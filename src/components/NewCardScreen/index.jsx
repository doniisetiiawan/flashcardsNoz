import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';

import Button from '../Button';
import LabeledInput from '../LabeledInput';
import NormalText from '../NormalText';
import colors from '../../styles/colors';
import { addCard } from '../../actions/creators';

const styles = StyleSheet.create({
  createButton: { backgroundColor: colors.green },
  secondaryButton: { backgroundColor: colors.blue },
  buttonRow: { flexDirection: 'row' },
});

class NewCard extends Component {
  constructor(props) {
    super(props);
    this.state = { front: '', back: '' };
  }

  _deckID = () => this.props.route.params.deckID;

  _handleFront = (text) => {
    this.setState({ front: text });
  };

  _handleBack = (text) => {
    this.setState({ back: text });
  };

  _createCard = () => {
    this.props.createCard(
      this.state.front,
      this.state.back,
      this._deckID(),
    );
    this.props.navigation.navigate('CardCreation', {
      deckID: this._deckID(),
    });
  };

  _reviewDeck = () => {
    this.props.navigation.navigate('Review');
  };

  _doneCreating = () => {
    this.props.navigation.navigate('Home');
  };

  render() {
    return (
      <View>
        <LabeledInput
          label="Front"
          value={this.state.front}
          clearOnSubmit={false}
          onEntry={this._handleFront}
          onChange={this._handleFront}
        />
        <LabeledInput
          label="Back"
          value={this.state.back}
          clearOnSubmit={false}
          onEntry={this._handleBack}
          onChange={this._handleBack}
        />

        <Button
          style={styles.createButton}
          onPress={this._createCard}
        >
          <NormalText>Create Card</NormalText>
        </Button>

        <Button
          style={styles.secondaryButton}
          onPress={this._doneCreating}
        >
          <NormalText>Done</NormalText>
        </Button>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({ decks: state.decks });

const mapDispatchToProps = (dispatch) => ({
  createCard: (front, back, deckID) => {
    dispatch(addCard(front, back, deckID));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewCard);
