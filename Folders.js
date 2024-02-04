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
  const [initial, setInitial] = useState(false);
  const [test, setTest] = useState("false");


  function gatherRecords() {
    let data = {start:"at least this worked"};
    let primary = Service.obj[id];
    console.log("Primary");
    if (!!primary){
        data[id] = primary;
        let childrenArr = primary.children;
        if(!!childrenArr){
            childrenArr.map((i,key)=>{data[i]=Service.obj[i]});
        }
    //    data.test=childrenArr.toString();
    }
    setVisualData(data);
    setAllData(Service.obj);
  }

  const toPage = (newId) => {
    setId(newId);
//    navigation.navigate('Folders', { id: newId });
  }

  useEffect(()=>{
    Service.getItems()
      .then((data)=>data)
      .then((res)=>{
        setItemObj(res);
        setReady(Service.obj.ready);
        gatherRecords();
        setInitial(true);
        });
  },[record]);

    useEffect(()=>{
        if(initial){
            gatherRecords();
            setTest("true");
        }
    },[id]);

  return (
    <View>
        <View style={styles.modalSection}>
            <ItemInput record={record} itemObj={itemObj} setRecord={setRecord} parentId={id} />
        </View>
        <View style={styles.infoSection}>
            <Text>ID: {id}{ready?"ready":"not"}{route.params.id}</Text>
            <Text>ID: {test}</Text>
            <Text>VD: {JSON.stringify(visualData)}</Text>
            <Text>obj: {JSON.stringify(itemObj)}</Text>
        </View>
        <View style={styles.mainSection}>
            <Folder toPage={toPage} visualData={visualData} allData={allData} id={id} isParent={true}/>
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
    height:'10%'
   },
  mainSection: {
    height:'80%',
    backgroundColor: "#ff0000"
   }
});

export default Folders;