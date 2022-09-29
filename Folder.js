import React from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Folder = (props) => {
    let children = null;
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
    let backgroundColor = props.isParent ? "#ff00ff" : "#00ff00";
//    let height = props.isParent ? "95%" : "20%";
    let localStyle = styles.main;
    localStyle.backgroundColor = backgroundColor;
  return (
    <View>
        <View style={localStyle}>
            <Text>Folder {id}</Text>
            <Text>Parent: {parentStatus}</Text>
            {children}

        </View>
    </View>

  );
};

const styles = StyleSheet.create({
  main: {
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#ff0000",
    height:'75%'
  },
  modalView: {
    margin: 5,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 100,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
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