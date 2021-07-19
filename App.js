import { StatusBar } from 'expo-status-bar';
import React from 'react';
import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import loginScreen from './screens/loginScreen';
import RegisterScreen from './screens/RegisterScreen';
import HomeScreen from './screens/HomeScreen';
import AddChatScreen from './screens/AddChatScreen';
import ChatScreen from './screens/ChatScreen';
import ProfileScreen from './screens/ProfileScreen';
import { createStackNavigator } from '@react-navigation/stack';




const Stack = createStackNavigator();

const globalScreenOptions = {
  headerStyle:{backgroundColor: "#2C6BED"},
  headerTitleStyle:{color:"white"},
  headerTintColor: "white"
};

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={globalScreenOptions}>
    <Stack.Screen name='Login' component={loginScreen}/>
    <Stack.Screen name='Register' component={RegisterScreen}/>
    <Stack.Screen name='Home' component={HomeScreen}/>
    <Stack.Screen name='AddChat' component={AddChatScreen}/>
    <Stack.Screen name='Chat' component={ChatScreen}/>
    <Stack.Screen name='Profile' component={ProfileScreen}/>
    </Stack.Navigator>
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
