import React, { Component } from 'react';
import { Button, StyleSheet } from 'react-native';

export default class MyButton extends Component {
  render() {
    const { title, onPress } = this.props;
    return (
      <Button style={styles.base}
        title={title}
        onPress={onPress} />
    );
  }
}

const styles = StyleSheet.create({
  base: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
