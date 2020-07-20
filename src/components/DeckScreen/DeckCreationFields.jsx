import React, { Component } from 'react';
import { View } from 'react-native';
import Input from '../Input';

import CreateDeckButton from './CreateDeckButton';

class EnterDeck extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  _create = () => {
    this.props.create(this.state.text);
  };

  render() {
    return (
      <View>
        <Input
          onEntry={this.props.create}
          onChange={(text) => {
            this.setState({ text });
          }}
        />
        <CreateDeckButton onPress={this._create} />
      </View>
    );
  }
}

export default EnterDeck;
