import * as React from 'react';
import { View, Text, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

function DetailsScreen({ navigation, route }) {
  const name = route.params.name;
  const [text, onChangeText] = React.useState("bud");

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('all')
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch(e) {
      // error reading value
    }
  }

    const saveInput = () => {

        getData()
        .then(data=>data)
        .then((res)=>{
            console.log(JSON.stringify(res));
            onChangeText(JSON.stringify(res));
        })
        .catch((e)=>console.log(e));
    }


  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Person {name} </Text>
        <Text>Yo {text} </Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button title="Storage" onPress={() => saveInput()} />
    </View>
  );
}

export default DetailsScreen;