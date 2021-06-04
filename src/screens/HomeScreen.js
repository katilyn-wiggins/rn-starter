import React from 'react';
import { Text, StyleSheet } from 'react-native';

const HomeScreen = () => {
  return <Text style={styles.text}>Hello World!</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;

//on startup should always load homescreen first
//homescreen should always have navigation buttons

//one for component screen
//one for list screen

//Buttons! 2 types
//1. button - primitive element, very simple button component, very little customization, something a user can tap and detects tap
//2. touchable opacity - highly customizable component that can detect a press on just about any kind of element
