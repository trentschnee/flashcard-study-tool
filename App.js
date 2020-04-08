import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator  } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
// import Home from './components/Home'
import Quiz from './components/Quiz'
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import Deck from './components/Deck';
import DeckList from './components/DeckList';
import NewDeck from './components/NewDeck';
import reducer from "./reducers";
import middleware from "./middleware";
function HomeScreen({navigation,route}){
  const Tabs = createBottomTabNavigator();
  return(
    <Tabs.Navigator
       screenOptions={({ route }) => ({
 
    })}
tabBarOptions={{
    activeTintColor: 'tomato',
    inactiveTintColor: 'gray',
    }}>
       <Tabs.Screen name="Home" component={AllStacks} />
    <Tabs.Screen name="Add Deck" component={NewDeck}  />
      </Tabs.Navigator>
  );
}
function AllStacks ( {navigation,route} ) {
  navigation.setOptions({ tabBarVisible: route.state ? route.state.index > 0 ? false : true : null });
  const Stacks = createStackNavigator();
    return (
      
      <Stacks.Navigator >
          <Stacks.Screen name="Home" component={DeckList} options={{ headerShown: false }}  />
      <Stacks.Screen name="Deck" component={Deck} options={({ route }) => ({ title: route.params.title })}/>
      <Stacks.Screen name="Quiz" component={Quiz} options={{ headerShown: false }} />
      </Stacks.Navigator>
    );
}

export default function App() {
  return (
  
  <Provider store={createStore(reducer,middleware)}>
      <NavigationContainer>

<HomeScreen/>
      </NavigationContainer>
      </Provider>
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
