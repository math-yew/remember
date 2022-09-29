import React, { useState, useEffect } from "react";
import { View, Text, Button, TextInput, Checkbox, Alert, Modal, StyleSheet, Pressable } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CheckBox from '@react-native-community/checkbox';
import Folder from './Folder.js'
import Service from './Service.js'

const ItemInput = ( props ) => {

  const [modalVisible, setModalVisible] = useState(false);
  const [item, setItem] = useState(null);
  const [id, setId] = useState(null);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [parent, setParent] = useState(props.parentId);
  const [count, setCount] = useState(null);
  const [freq, setFreq] = useState(null);
  const [cat, setCat] = useState(false);
  const [color, setColor] = useState(null);
  const [children, setChildren] = useState(null);
  const [obj, setObj] = useState("defaulttt");
  const [savePressed, setSavePressed] = useState(false);


  const saveItem = () => {
    setItem({
        title: title,
        desc: desc,
        parent: parent
    });
    setSavePressed(true);
    setModalVisible(false);
  }
    useEffect(()=>{
        if(Service.obj.ready && savePressed){
            if(id > -1){
                Service.addItem(id,item);
                setSavePressed(false);
                props.setRecord(item);
            }
        }
    },[item]);


  return (
        <View style={styles.main}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              setModalVisible(!modalVisible);
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>{title}</Text>
                <Text>Hey{obj}</Text>
                <Text>Parent ID: {parent}</Text>
                <TextInput style={styles.textInput} value={id} onChangeText={setId} placeholder="ID" />
                <TextInput style={styles.textInput} value={title} onChangeText={setTitle} placeholder="Title" />
                <TextInput value={desc} onChangeText={setDesc} placeholder="Description" />
                <TextInput value={freq} onChangeText={setFreq} placeholder="Frequency" />
                <CheckBox
                    disabled={false}
                    value={cat}
                    onValueChange={(newValue) => setCat(newValue)}
                  />
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Text style={styles.textStyle}>Cancel</Text>
                </Pressable>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => saveItem()}
                >
                  <Text style={styles.textStyle}>Add</Text>
                </Pressable>
              </View>
            </View>
          </Modal>
          <View style={styles.buttonView}>
              <Pressable
                style={[styles.button, styles.buttonOpen]}
                onPress={() => setModalVisible(true)}
              >
                <Text style={styles.textStyle}>+</Text>
              </Pressable>
          </View>
        </View>
  );
};

const buttonSize = 40;
const styles = StyleSheet.create({
  main:{
    height: '10%',
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
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
    color: "white",
    padding: 0,
    height: buttonSize,
    width: buttonSize,
    borderRadius: buttonSize,
    justifyContent: "center",
    alignItems: "center"
  },
   buttonView: {
      justifyContent: "flex-end",
      flexDirection: "row",
      alignItems: "flex-start",
      margin: 5
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

export default ItemInput;