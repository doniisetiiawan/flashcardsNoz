import React, { Component } from 'react';

import EnterDeck from './DeckCreationFields';
import CreateDeckButton from './CreateDeckButton';

class DeckCreation extends Component {
  constructor(props) {
    super(props);
    this.state = { showingNameField: false };
  }

  _newDeck = (name) => {
    this.setState({ showingNameField: false });
    this.props.create(name);
  };

  _showField = () => {
    this.setState({ showingNameField: true });
  };

  render() {
    return this.state.showingNameField
      ? <EnterDeck create={this._newDeck} />
      : <CreateDeckButton onPress={this._showField} />;
  }
}

export default DeckCreation;
