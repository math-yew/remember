import React, { useState, useEffect } from "react";
import { View, Text, Button, TextInput, Alert, Modal, StyleSheet, Pressable } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Folder from './Folder.js'
import ItemInput from './ItemInput.js'
import Service from './Service.js'

const Folders = ({ navigation, route }) => {

//  const [modalVisible, setModalVisible] = useState(false);
  const [record, setRecord] = useState({});
  const [itemObj, setItemObj] = useState("itemObj");
  const [ready, setReady] = useState(false);
  const [id, setId] = useState(route.params.id);
  const [visualData, setVisualData] = useState({pre:"not changed"});
  const [allData, setAllData] = useState();

  function gatherRecords() {
    let data = {start:"at least this worked"};
    let primary = Service.obj[id];
    data[id] = primary;
    let childrenArr = primary.children;
    childrenArr.map((i,key)=>{data[i]=Service.obj[i]});
    data.test=childrenArr.toString();
    setVisualData(data);
    setAllData(Service.obj);
  }

  useEffect(()=>{
    Service.getItems()
      .then((data)=>data)
      .then((res)=>{
        setItemObj(res);
        setReady(Service.obj.ready);
        gatherRecords();
        });
  },[record]);


  return (
    <View>
        <View style={styles.modalSection}>
            <ItemInput record={record} itemObj={itemObj} setRecord={setRecord} parentId={id} />
        </View>
        <View style={styles.infoSection}>
            <Text>ID: {id}{ready?"ready":"not"}</Text>
            <Text>obj: {JSON.stringify(itemObj)}</Text>
            <Text>VD: {JSON.stringify(visualData)}</Text>
        </View>
        <View style={styles.mainSection}>
            <Folder visualData={visualData} allData={allData} id={id} isParent={true}/>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    justifyContent: "center",
    alignItems: "center",
    margin: 22,
    borderColor: "#ff0000",
    backgroundColor: "#0000ff",
  },
  modalSection: {
    height:'10%'
   },
  infoSection: {
    height:'25%'
   },
  mainSection: {
    height:'65%',
    backgroundColor: "#ff0000"
   }
});

export default Folders;