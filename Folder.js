import React, { useEffect } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ChildFolder from './ChildFolder.js'

const Folder = (props) => {
    let children = null;
    const id = props.id;
    let visualData = {...props.visualData};
    let parentData = {...visualData[1]};

    if (props.isParent){
       let parentData = {...visualData[1]};
        let childrenString = "" + JSON.stringify(parentData.children);
        let childrenArr = childrenString.slice(1, -1).split(",");
        children = childrenArr.map((e,key)=>{
            return(
                <View style={height="10%"}>
                    <ChildFolder toPage={props.toPage} id={e} key={key} visualData={visualData[e]} isParent={false} />
                </View>
//                    <Text>hi</Text>
            )
        });
    }

    let parentStatus = props.isParent ? "true" : "false";
    let backgroundColor = props.isParent ? "#ff00ff" : "#00ff00";
//    let height = props.isParent ? "95%" : "20%";
    let localStyle = styles.main;
    localStyle.backgroundColor = backgroundColor;
  return (
    <View>
        <View style={localStyle}>
            <Text>Folder {id}</Text>
            <Text>Parent: {parentStatus}</Text>
            <Text>props: {JSON.stringify(props)}</Text>
            <Button
              title="Tacos"
              onPress={() =>props.toPage()}
            />
            {children}

        </View>
    </View>

  );
};

const styles = StyleSheet.create({
  main: {
    justifyContent: "flex-start",
    alignItems: "center",
    borderColor: "#ff0000",
    height:'99%'
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#00e500",
    padding: 35,
    color: "white"
  },
  buttonClose: {
    backgroundColor: "#2196F3"
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  textInput: {
    borderColor: "#555555",
    backgroundColor: "#eeeeee",
    margin: 5,
    padding: 5
  }
});

export default Folder;