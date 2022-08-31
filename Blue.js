import * as React from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Blue = ({ navigation }) => {

  const obj = {taco:"soup"};
  const [text, onChangeText] = React.useState("hi");

const storeData = async (value) => {
  try {
    let object = {taco:"soup"}
    const jsonValue = JSON.stringify(object)
    await AsyncStorage.setItem('all', jsonValue)
  } catch (e) {
    // saving error
  }
}

    const saveInput = () => {
     obj.greet = text;
     storeData(obj);
    }

  return (
    <View>
        <Text>Blue</Text>
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
          onPress={() => saveInput}
        />

    </View>
  );
};

export default Blue;