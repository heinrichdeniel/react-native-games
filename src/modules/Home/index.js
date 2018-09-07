import React, { Component } from 'react';
import { StyleSheet, Image, Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Button from '../../components/Button';
import { colors } from '../../styles';

export default class Home extends Component {
  constructor(props) {
    super(props)
    const window = Dimensions.get('window');
    
    const imgSize = window.width < window.height ? window.width / 2 : window.height / 2;
    this.state = { imgSize };
  }
  
  goToScreen = (screen) => {
    this.props.navigation.navigate(screen);
  }

  render() {
    const { imgSize } = this.state;

    return (
      <LinearGradient 
     colors={[colors.PRIMARY, colors.PRIMARY]}
     style={styles.base}>
        <Image
          style={ {width: imgSize, height: imgSize} }
          resizeMod="cover"
          source={require('../../assets/img/logo.png')} />
        <Button
          title="One Player"
          onPress={() => this.goToScreen('SecondScreen')} />
        <Button
          title="Two Players"
          onPress={() => this.goToScreen('SecondScreen')} />
      </LinearGradient>

    );
  }
}

const styles = StyleSheet.create({
  base: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});
