import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
  const friends = [
    // { name: 'Friend #1', key: '1' },

    { name: 'Friend #1', age: '22' },
    { name: 'Friend #2', age: '31' },
    { name: 'Friend #3', age: '57' },
    { name: 'Friend #4', age: '36' },
    { name: 'Friend #5', age: '2' },
    { name: 'Friend #6', age: '78' },
    { name: 'Friend #7', age: '14' }
  ];
  return (
    <FlatList
      // horizontal
      //makes list horizontal - remove for vertical

      // showsHorizontalScrollIndicator={false}
      //will not show scroll bar - also has a vertical one

      keyExtractor={(friend) => friend.name}
      data={friends}
      renderItem={({ item }) => {
        // element === { item: name: 'Friend #1' }, index: 0 }
        // item === { name: 'Friend #1 }
        // easier to destructure item off of element
        return (
          <Text style={styles.textStyle}>
            {item.name} - Age {item.age}
          </Text>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50
    //adds vertical margin
    // marginHorizontal: 20
  }
});

export default ListScreen;

//Flatlist:
//FlatList primitive react element makes lists in React
//turns an array into a list of elements
//we are required to pass in a 'prop' of 'data' - the array of data that we are going to creat a bunch of elements out of
//also required to pass in a 'renderItem' prop - function that will turn each individual item into an element
//basically React Natives version of 'mapping' from React, has optimizations built in to render lists on mobile in a very performant fashion

//What is a key:
//ties the meaning of an object to a list element
//necessary - otherwise React will rebuild the entire list every time we make a change
//we want it to only detect the item deleted and shift the remaning items up
//keys allow react native to track objects, and when one is deleted react can see exact one and delete the same one from it's list. then it only has to rerender the remainder of the list, not the whole thing.

//Implement key property, 2 ways
//1. add a key to the original objects
//2. (better imo) add key to keyExtractor in FlatList element
