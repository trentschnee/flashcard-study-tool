import React, { Component } from 'react'
import { StyleSheet, Text, View,TextButton,TouchableOpacity } from 'react-native';
import { connect } from "react-redux";
import {blue,red,green,orange,white} from "../utils/colors"
import DeckCard from './DeckCard';
class Quiz extends Component {
  state = {
    qNumber: 0,
    showQ: false
  }
    render() {
      const { route, numberOfQuestions, questions, navigation,deck } = this.props;
      const { title } = route.params;
      const {showQ,qNumber} = this.state;
      const number = qNumber + 1;
      return (  <View style={styles.container} >
          <View style={styles.card}>
          <Text style={styles.numberOfQuestions} >{number}/{numberOfQuestions}</Text>
          {
!showQ ? <Text style={styles.mainQuestion} >{deck.questions[qNumber].cardQuestion}</Text>: <Text style={styles.mainQuestion} >{deck.questions[qNumber].cardAnswer}</Text>
          }
            
            
          {/* {showAnswer ? card.answer : card.question} */}
     
        <TouchableOpacity >
			<Text style={styles.saText} >Show Answer</Text>
		</TouchableOpacity>

        {/* Tooggling ShowAnswer button implementation */}
      

        <TouchableOpacity
          style={styles.button}
        >
          <Text >Correct</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
        >
          <Text>Incorrect</Text>
        </TouchableOpacity>
          </View>
      </View>);
    }
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems:"center"
    },
    card:{
      flex:1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor:blue,
      alignSelf:"stretch",
      shadowColor: 'rgba(0,0,0,0.34)',
      shadowOffset: {
        width: 0,
        height: 3,
      }
    },
  });
  function mapStateToProps(decks, { route }) {
    const {title} = route.params;
    const deck = decks[title];
    // get current deck
    const numberOfQuestions = deck.questions.length;
    // get decks number of questions
    return {
      deck,
      numberOfQuestions,
      questions: deck.questions
    };
  }
  export default connect(mapStateToProps)(Quiz);