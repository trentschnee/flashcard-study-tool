import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator  } from '@react-navigation/bottom-tabs';
import Home from './components/Home'
import NewDeck from './components/NewDeck'
const Tabs = createBottomTabNavigator();

export default function App() {
  return (
  
  
      <NavigationContainer>
<Tabs.Navigator initialRouteName="Home">
<Tabs.Screen name="Home" component={Home} />
<Tabs.Screen name="Add Deck" component={NewDeck} options={{tabBarVisible :false}}  />
</Tabs.Navigator>
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
