import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { addDeck } from "../actions";
import { saveDeckTitle } from "../utils/api"
import { connect } from "react-redux";
import { blue, white } from "../utils/colors"
class NewDeck extends Component {

  state = {
    deckTitleInput: ''
  }

  handleChangeText = (value) => {
    this.setState({ deckTitleInput: value })
  }
  handleSubmitButton = () => {
    const { dispatch } = this.props;
    const { navigation } = this.props;
    const { deckTitleInput } = this.state;
    saveDeckTitle(deckTitleInput).then(() => {
      dispatch(addDeck(deckTitleInput));
    })

    navigation.navigate("Deck", { title: deckTitleInput });
  }
  render() {
    const { deckTitleInput } = this.state;
    return (
      <View style={styles.container}>

        <Text style={styles.title}>What is the title of your new deck?</Text>
        <TextInput style={styles.input}
          onChangeText={this.handleChangeText}
          value={deckTitleInput}
          placeholder={'Your card deck title'}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={this.handleSubmitButton}
        >
          <Text style={styles.buttonText}>Create Deck</Text>
        </TouchableOpacity>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  input: {
    borderWidth: 1,
    flexDirection: "row",
    padding: 10,
    width: 300,
    textAlign: "center",
    borderRadius: 3,
    borderColor: "#757575",
    marginVertical: 10
  },
  title: {
    fontSize: 24
  },
  button: {
    backgroundColor: blue,
    borderRadius: 3,
  
    padding: 10
  },
  buttonText:{
    color: white,
  }

});

export default connect()(NewDeck);