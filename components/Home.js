import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import AddCard from './AddCard'
import Quiz from './Quiz'
import Deck from './Deck'
import DeckList from './DeckList'
const Stacks = createStackNavigator();
class Home extends Component {

    render() {
      return (
        <Stacks.Navigator initialRouteName="Home">
        <Stacks.Screen name="Home" component={DeckList} options={{ headerShown: false }}  />
        <Stacks.Screen name="Deck" component={Deck} options={{ headerShown: false }}  />
        <Stacks.Screen name="Quiz" component={Quiz} options={{ headerShown: false }} />
        </Stacks.Navigator>
      );
    }
  }

export default Home;