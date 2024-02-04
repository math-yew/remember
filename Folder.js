import React, { useState, useEffect } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ChildFolder from './ChildFolder.js'

const Folder = (props) => {
    let children = null;
    const id = props.id;
    let visualData = {...props.visualData};
    let parentData = {...visualData[id]};
    let childrenLength = null;
    let arr = [];
    const [test2, setTest2] = useState(0);

    const popChildren = () => {
        let parentData = {...visualData[id]};
        let childrenString = "" + JSON.stringify(parentData.children);
        let childrenArr = childrenString.slice(1, -1).split(",");
        childrenLength = childrenArr.length;
        children = null;
        let arrPrep = childrenArr.filter((e)=>e!="ndefine");
        arr = arrPrep;
        children = arrPrep.map((e,key)=>{
            return(
                <View style={height="10%"}>
                    <ChildFolder toPage={props.toPage} id={e} key={key} visualData={visualData[e]} isParent={false} />
                </View>
            )
        });
    }

//    useEffect(()=>{
//        if(test2 < 3){
//            popChildren();
//            setTest2(test2+1);
//        }
//    },[props.id]);
    popChildren();



    let parentStatus = props.isParent ? "true" : "false";
    let backgroundColor = props.isParent ? "#ff00ff" : "#00ff00";
//    let height = props.isParent ? "95%" : "20%";
    let localStyle = styles.main;
    localStyle.backgroundColor = backgroundColor;
  return (
    <View>
        <View style={localStyle}>
            <Text>Folder {id}</Text>
            <Text>{test2}</Text>
            <Text>Length: {childrenLength}{arr}</Text>
            <Text>Visual: {JSON.stringify(visualData)}</Text>
            <Text>Parent: {JSON.stringify(parentData)}</Text>
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