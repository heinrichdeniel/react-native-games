import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import Video from 'react-native-video';

import HwayVideo from '../../assets/videos/Hway.mp4';
import Button from '../../components/Button';

export default class Home extends Component {
  goToScreen = (screen) => {
    this.props.navigation.navigate(screen);
  }

  render() {
    console.log(HwayVideo)
    return (
      <View style={styles.base}>
      
      <Video source={HwayVideo}
        rate={1.0}
        volume={1.0}
        muted={false}
        resizeMode={"cover"}
        repeat
        style={styles.video}
      />
      
        <Button
          title="Start"
          onPress={() => this.goToScreen('SecondScreen')} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  base: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  linearGradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
},
  video: {
   height: '100%',
   width: '100%',
   opacity: 0.8,
  },
});
