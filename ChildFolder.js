import React from 'react';
import { View, Text, Button, TextInput, StyleSheet, Dimensions } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ChildFolder = (props) => {
    let children = null;
    let width = Dimensions.get('window').width;
    const id = props.id;
    let visualData = {...props.visualData};
    let parentData = {...visualData[1]};


    let parentStatus = props.isParent ? "true" : "false";
    styles.main.width = width;

  return (
    <View style={styles.main}>
        <View style={styles.inner}>
            <Text>Folder {id}</Text>
            <Text>Parent: {parentStatus}</Text>
            {children}
            <Button
              title="Select"
              onPress={() =>props.toPage(id)}
            />

        </View>
    </View>

  );
};

const styles = StyleSheet.create({
  main: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
    height:100,
    padding: 5

  },
  inner: {
    backgroundColor: "#00ff00",
    alignSelf: 'stretch',
    padding: 15,
    borderRadius:15

  }
});

export default ChildFolder;