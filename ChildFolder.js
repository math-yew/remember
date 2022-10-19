import React from 'react';
import { View, Text, Button, TextInput, StyleSheet, Dimensions } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ChildFolder = (props) => {
    let children = null;
    let width = Dimensions.get('window').width;
    const id = props.id;
    let visualData = {...props.visualData};
    let parentData = {...visualData[1]};
//    let childrenString = "" + JSON.stringify(parentData.children);
//    let childrenArr = childrenString.slice(1, -1).split(",");
//    let data = childrenArr[0];

    if (props.isParent){
       let parentData = {...visualData[1]};
        let childrenString = "" + JSON.stringify(parentData.children);
        let childrenArr = childrenString.slice(1, -1).split(",");
        children = childrenArr.map((e,key)=>{
            return(
                <View style={height="10%"}>
                    <Folder id={e} key={key} visualData={visualData[e]} isParent={false} />
                </View>
//                    <Text>hi</Text>
            )
        });
    }

    let parentStatus = props.isParent ? "true" : "false";
    styles.main.width = width;

  return (
    <View style={styles.main}>
        <View style={styles.inner}>
            <Text>Folder {id}</Text>
            <Text>Now it's time to test </Text>
            <Text>Parent: {parentStatus}</Text>
            {children}
            <Button
              title="Potato"
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