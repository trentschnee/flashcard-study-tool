import React, { Component } from 'react'
import { StyleSheet, Text, View,TouchableOpacity,TextInput } from 'react-native';
class NewDeck extends Component {
    state = {
        deckInput: ''
    }
    onChangeText = (value) =>{
       this.setState({value})
    }
    render() {
        const {deckTitleInput} = this.state;
        return (
            <View style={styles.container}>
              <View style={styles.countContainer}>
                <Text>What is the title of your new deck?</Text>
                <TextInput
                onChangeText={this.onChangeText}
              value={deckTitleInput}
              placeholder={'Your card deck title'}
            />
              </View>
              <TouchableOpacity
                style={styles.button}
                onPress={this.onPress}
              >
                <Text>Create Deck</Text>
              </TouchableOpacity>
            </View>
          );
    }
  }

  
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      paddingHorizontal: 10
    },
    button: {
      alignItems: "center",
      backgroundColor: "#DDDDDD",
      padding: 10
    },
    countContainer: {
      alignItems: "center",
      padding: 10
    }
  });
export default NewDeck;