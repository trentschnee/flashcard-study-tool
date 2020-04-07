import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator  } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
// import Home from './components/Home'
import Quiz from './components/Quiz'
import Deck from './components/Deck'
import DeckList from './components/DeckList'
import NewDeck from './components/NewDeck'
function HomeScreen({navigation,route}){
  const Tabs = createBottomTabNavigator();
  return(
    <Tabs.Navigator initialRouteName="Home">
    <Tabs.Screen name="Home" component={DeckList} />
    <Tabs.Screen name="Add Deck" component={NewDeck} />
    </Tabs.Navigator>);
}
function AllStacks ({navigation}) {
  const Stacks = createStackNavigator();
    return (
      <Stacks.Navigator initialRouteName="HomeScreen">
      <Stacks.Screen name="HomeScreen" component={HomeScreen} options={{title:''}} />
      <Stacks.Screen name="Deck" component={Deck}  options={({ route }) => ({ title: route.params.title })}/>
      <Stacks.Screen name="Quiz" component={Quiz} options={{ headerShown: false }} />
      </Stacks.Navigator>
    );
}

export default function App() {
  return (
  
  
      <NavigationContainer>

<AllStacks/>
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
