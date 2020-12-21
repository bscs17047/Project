
import FileUpload from './Screens/FileUpload';
import About from './Screens/About';
import Citation from './Screens/Citation';
import Temp from './Screens/temp';

import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import FilePickerManager from 'react-native-file-picker';

function HomeScreen() {
  return <FileUpload />;
}

function AboutScreen() {
  return <About />;
}

function CitationScreen() {
  return <Citation />;
}
/*
function TempScreen() {
  return <Temp />;
}
*/
const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Tab.Navigator
        initialRouteName="Home"
        activeColor="white"
        style={{ backgroundColor: 'tomato' }}
      >
      <Tab.Screen
          name="Way it Work"
          component={CitationScreen}
          options={{
            tabBarLabel: 'How It\'s Work',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="clipboard-flow" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="About"
          component={AboutScreen}
          options={{
            tabBarLabel: 'About Us',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="information-variant" color={color} size={26} />
              //  information" ,"information-outline", "information-variant"
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}