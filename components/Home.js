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
        <Stacks.Navigator>
        <Stacks.Screen name="Home" component={DeckList}  />
        <Stacks.Screen name="Deck" component={Deck} />
        <Stacks.Screen name="Quiz" component={Quiz} />
        <Stacks.Screen name="addCard" component={AddCard} />
        </Stacks.Navigator>
      );
    }
  }

export default Home;