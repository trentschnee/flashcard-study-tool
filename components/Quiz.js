import React, { Component } from 'react'
import { StyleSheet, Text, View, TextButton, TouchableOpacity } from 'react-native';
import { connect } from "react-redux";
import { blue, red, green, orange, white } from "../utils/colors"
import DeckCard from './DeckCard';
class Quiz extends Component {
  state = {
    qNumber: 0,
    showQ: false,
    correctA: 0,
    incA: 0
  }
  showA = () => {
    const { showQ } = this.state;
    // if the state of showQ is false..
    !showQ ? this.setState({
      showQ: true
    }
    ) : this.setState({
      showQ: false
    }
    )
  }
  handleSubmitA = (a) => {
    const qNumber = this.state;
    const { deck, numberOfQuestions } = this.props;
    (a === true)
      ?
      this.setState({ correctA: this.state.correctA + 1 })
      : this.setState({ incA: this.state.incA + 1 })
    // increment the question number
    this.setState({ qNumber: this.state.qNumber + 1 })

    // logic for last question
  }
  render() {
    const { route, numberOfQuestions, questions, navigation, deck } = this.props;
    const { title } = route.params;
    const { showQ, qNumber } = this.state;
    const number = qNumber + 1;
    if(numberOfQuestions===0){
return(<View>
  <Text>Sorry, you cannot take a quiz because there are no cards in the deck.</Text>
</View>)
    }
    else if(qNumber === numberOfQuestions){
      const {incA,correctA} = this.state;
      return(<View>
      <Text>You got {correctA} correct answers and {incA} incorrect answers.</Text>
      <TouchableOpacity 
          style={styles.button}
        >
          <Text >Restart Quiz</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.button}
        >
          <Text >Back to Deck</Text>
        </TouchableOpacity>
      </View>)
    }
    return (<View style={styles.container} >
      <View style={styles.card}>
        <Text style={styles.numberOfQuestions} >{number}/{numberOfQuestions}</Text>
        {
          !showQ ? <View><Text style={styles.mainQuestion} >{deck.questions[qNumber].cardQuestion}</Text><TouchableOpacity onPress={this.showA} >
            <Text style={styles.saText} >Show Answer</Text>
          </TouchableOpacity></View> : <View><Text style={styles.mainQuestion} >{deck.questions[qNumber].cardAnswer}</Text><TouchableOpacity onPress={this.showA} >
            <Text style={styles.saText} >Show Question</Text>
          </TouchableOpacity></View>
        }
        <TouchableOpacity onPress={()=>this.handleSubmitA(true)}
          style={styles.button}
        >
          <Text >Correct</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress= {()=>this.handleSubmitA(false)}
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
    alignItems: "center"
  },
  card: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: blue,
    alignSelf: "stretch",
    shadowColor: 'rgba(0,0,0,0.34)',
    shadowOffset: {
      width: 0,
      height: 3,
    }
  },
  numberOfQuestions: {
    fontSize: 16,
    color: white,
    marginTop: 24,
    textAlign: "center"
  },
  question: {
    top: 0
  }
});
function mapStateToProps(decks, { route }) {
  const { title } = route.params;
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