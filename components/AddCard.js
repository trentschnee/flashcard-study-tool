import React, { Component } from 'react'
import { StyleSheet, Text, View,TextInput,TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
class AddCard extends Component {
    state = {
      cardQuestion:'',
      cardAnswer: ''
    }
    handleAddCardSubmit = () =>{
      // TODO: set if condition (if cardQuestion or cardAnswer is empty, give error)
      // TODO: dispatch addNewCard
      // TODO: save to DB
      console.log(this.props)
      this.setState({ cardQuestion: '',cardAnswer:'',modalVisible:false});
      this.props.closeModal();
    }
    changeQuestionHandler = (value) => {
      const {cardQuestion, cardAnswer } = this.state;
      // This will get the current state and merge it in with either the question
      this.setState(prevState => ({
        ...prevState,
        cardQuestion:value
      }))
    }
    changeAnswerHandler = (value) => {
      const {cardQuestion, cardAnswer } = this.state;
      // This will get the current state and merge it in with either the answer
      this.setState(prevState => ({
        ...prevState,
        cardAnswer:value
      }))
    }
    render() {
      const {cardQuestion,cardAnswer} = this.state;
      return (
        <View style={styles.container}>
          <View style={styles.countContainer}>
            <Text>What is your question?</Text>
            <TextInput
            onChangeText={this.changeQuestionHandler}
          value={cardQuestion}
          placeholder={'Your Question'}
        />
          </View>
          <View style={styles.countContainer}>
            <Text>What is your answer??</Text>
            <TextInput
            onChangeText={this.changeAnswerHandler}
          value={cardAnswer}
          placeholder={'Your Answer'}
        />
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={this.handleAddCardSubmit}
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

export default AddCard;