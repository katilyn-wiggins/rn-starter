import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Hello World!</Text>
      <Button
        title="Go to Components Demo"
        onPress={() => navigation.navigate('Components')}
      />
      <Button
        title="Go to List Demo"
        onPress={() => navigation.navigate('List')}
      />
      {/* <TouchableOpacity onPress={() => props.navigation.navigate('List')}>
        <Text>Go to List Demo</Text>
      </TouchableOpacity> */}
    </View>
  );
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

//by default button has nice styling
//touchable opacity has slight fade effect, will work with anything you put inside of element

//touchable opacity allows us to put any kind of element inside of it and is highly customizable
//button is simple and comes pre-styled.
