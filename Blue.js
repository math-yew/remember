import * as React from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Blue = ({ navigation }) => {

  const obj = {taco:"soup"};
  const [text, onChangeText] = React.useState("hi");
  const [text2, onChangeText2] = React.useState("start");

const storeData = async (value) => {
  try {
    onChangeText2("try");
    let object = {taco:"soup"}
    object.blue = text;
    const jsonValue = JSON.stringify(object)
    await AsyncStorage.setItem('all', jsonValue)
  } catch (e) {
    onChangeText2("catch: "+e);
    // saving error
  }
}

    const saveInput = () => {
     obj.greet = text;
     storeData(obj)
     .then((e)=>onChangeText2("done"+e));
    }

  return (
    <View>
        <Text>Blue</Text>
        <Text>{text2}</Text>
       <Button
          title="Potato"
          onPress={() =>
            navigation.navigate('Details', { name: 'chips' })
          }
        />
        <TextInput
        onChangeText={onChangeText}
        value={text}
        />
        <Button
          title="Save"
          onPress={() => saveInput()}
        />

        <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default Blue;