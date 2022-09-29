import * as React from 'react';
import { View, Text, Button, TextInput } from 'react-native';

import Blue from './Blue.js'
import Upload from './Upload.js'
import DetailsScreen from './DetailsScreen.js'

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button title="Go to Details" onPress={() => navigation.navigate('Details')} />
      <Button title="Blue" onPress={() => navigation.navigate('Blue')} />
      <Button title="Folders" onPress={() => navigation.navigate('Folders', {id:1})} />
      <Button title="Upload" onPress={() => navigation.navigate('Upload')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default HomeScreen;