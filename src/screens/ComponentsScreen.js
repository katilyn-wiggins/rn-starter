//1. import libraries
import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
//view position or nest multiple elements within each other - like html

//2. create component and after, import style
const ComponentsScreen = () => {
  const myName = 'Katie';
  return (
    <View>
      <Text style={styles.textStyle}>Getting started with React Native</Text>
      <Text style={styles.nameTag}>My name is {myName}</Text>
    </View>
    //jsx looks a lot like html and tells the browser what we want to see on the screen, not technically valid javascript, uses Babel to compile and convert into plain javascript
    //<Text> is a primitive react element, used to show some basic text to a user
    //other primitive elements (View, Image, Button)
  );
};

//3. create a stylesheet (change fontsize of text element)
//styles - StyleSheet.create will automatically validate styles that we want to appear -basically shows us an error message immediately when we do something wrong
const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45
  },
  nameTag: {
    fontSize: 20
  }
});

//4. export component
export default ComponentsScreen;

//create react component
//every component we have will have the same 4 parts
//1. import libraries we need to create a component
//2. create a component, a functon that returns some 'JSX'
//3. create a stylesheet to style our component
//4. export the component so we can use it elsewhere in our project

//component files create and export exactly one component

//Rules of JSX
//1. We can assemble different JSX elements like normal HTML
//2. We configure different JSX elements using props
//3. We can refer to JS variables inside of a JSX block by using curly braces
//4. We can assign JSX elements to a variable, then show that variable inside of a JSX block
//5. must use a () after return or put first element on the same line as the return statement
