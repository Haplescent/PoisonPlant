/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {RNCamera} from 'react-native-camera';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <RNCamera
          style={{flex: 1, alignItems: 'center'}}
          ref={(ref) => {
            this.camera = ref;
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
});

export default App;
