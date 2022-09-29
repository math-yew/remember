// In App.js in a new project

import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './HomeScreen.js'
import Folders from './Folders.js'
import Blue from './Blue.js'
import Upload from './Upload.js'
import DetailsScreen from './DetailsScreen.js'

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Folders" component={Folders} initialParams={{ id: 1 }}/>
        <Stack.Screen name="Details" component={DetailsScreen }
         initialParams={{ name: "sue" }}
         />
        <Stack.Screen name="Blue" component={Blue} />
        <Stack.Screen name="Upload" component={Upload} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;