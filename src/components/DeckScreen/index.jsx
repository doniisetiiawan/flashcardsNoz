import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import Deck from './Deck';
import DeckCreation from './DeckCreation';
import { addDeck, reviewDeck } from '../../actions/creators';

class DecksScreen extends Component {
  _createDeck = (name) => {
    const createDeckAction = addDeck(name);
    this.props.createDeck(createDeckAction);
    this.props.navigation.navigate('CardCreation', {
      deckID: createDeckAction.data.id,
    });
  };

  _addCards = (deckID) => {
    this.props.navigation.navigate('CardCreation', {
      deckID,
    });
  };

  _review = (deckID) => {
    this.props.reviewDeck(deckID);
    this.props.navigation.navigate('Review');
  };

  _mkDeckViews() {
    if (!this.props.decks) {
      return null;
    }

    return this.props.decks.map((deck) => (
      <Deck
        deck={deck}
        count={this.props.counts[deck.id]}
        key={deck.id}
        add={() => {
          this._addCards(deck.id);
        }}
        review={() => {
          this._review(deck.id);
        }}
      />
    ));
  }

  render() {
    return (
      <View>
        {this._mkDeckViews()}
        <DeckCreation create={this._createDeck} />
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  createDeck: (deckAction) => {
    dispatch(deckAction);
  },
  reviewDeck: (deckID) => {
    dispatch(reviewDeck(deckID));
  },
});

const mapStateToProps = (state) => ({
  decks: state.decks,
  counts: state.decks.reduce((sum, deck) => {
    sum[deck.id] = deck.cards.length;
    return sum;
  }, {}),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DecksScreen);
