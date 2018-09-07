import React, { Component } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { colors } from '../../styles';

export default class MyButton extends Component {
  render() {
    const { title, onPress } = this.props;
    return (
      <TouchableOpacity style={styles.base} onPress={onPress} >
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  base: {
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.SECONDARY,
    width: '50%',
    borderRadius: 100
  },
  text: {
    margin: 10,
    color: colors.WHITE
  }
});
