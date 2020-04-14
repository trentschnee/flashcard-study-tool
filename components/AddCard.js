import React, { Component } from 'react'
import { StyleSheet, Text, View,TextInput,TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { addCard } from "../actions";
import {saveDeckCard} from "../utils/api"
import {connect} from 'react-redux'
import {white,green,blue} from "../utils/colors"
class AddCard extends Component {
    state = {
      cardQuestion:'',
      cardAnswer: ''
    }
    handleAddCardSubmit = () =>{
      // TODO: set if condition (if cardQuestion or cardAnswer is empty, give error)
  const {dispatch,navigation,route} = this.props;
  const { title } = route.params;
      const {cardQuestion, cardAnswer } = this.state;
      const card = {cardQuestion, cardAnswer}
      saveDeckCard(title,card).then(()=>{
        dispatch(addCard(title,card))
       
      });
      this.setState({ cardQuestion: '',cardAnswer:''});
      navigation.goBack()
   
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
          <View >
            <Text>What is your question?</Text>
            <TextInput
            onChangeText={this.changeQuestionHandler}
          value={cardQuestion}
          placeholder={'Your Question'}
        />
          
            <Text>What is your answer??</Text>
            <TextInput
            onChangeText={this.changeAnswerHandler}
          value={cardAnswer}
          placeholder={'Your Answer'}
        />
        
          <TouchableOpacity
          style={styles.addBtn}
          onPress={this.handleAddCardSubmit}
        ><Text style={{color:white}}>Add Card</Text>
        </TouchableOpacity>
        </View>
        </View>
      );
      }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems:"center"
  },
  
  submitBtnText:{
    color:white,
  },
  addBtn:{
    backgroundColor:green,
    padding:16,
    margin:10,
    borderRadius:3
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

export default connect()(AddCard);