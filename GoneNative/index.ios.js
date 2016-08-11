import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, NavigatorIOS } from 'react-native';

class GoneNative extends Component {
  render() {
    return (
      <View>
        <Text style={styles.redStyle}>{"\n"}Hello world!</Text>
        <Text style={[styles.redStyle, styles.large]}>This is larger!</Text>
        <Text style={styles.redStyle}>Hi</Text>
        <Text style={styles.redStyle}>Bye</Text>
      </View>
    );
  }

}


  const styles = StyleSheet.create({
    redStyle: {
      color: 'red',
      fontWeight: 'bold',
      fontSize: 30,
    },
    large: {
      fontSize: 50,
    },
  });

AppRegistry.registerComponent('GoneNative', () => GoneNative);
