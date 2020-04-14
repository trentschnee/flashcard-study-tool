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
    this.setState({ qNumber: this.state.qNumber + 1,showQ:false })

    // logic for last question
  }
  handleBackToDeck = ()=>{
    const {navigation,route} = this.props;
    const { title } = route.params;
    navigation.navigate("Deck", { title });
  }
  handleRestartQ = ()=>{
    const {navigation,route,deck} = this.props;
    const { title } = route.params;
    this.setState({   qNumber: 0,
      showQ: false,
      correctA: 0,
      incA: 0})
  }
  render() {
    const { route, numberOfQuestions, questions, navigation, deck } = this.props;
    const { title } = route.params;
    const { showQ, qNumber } = this.state;
    const number = qNumber + 1;
    if (numberOfQuestions === 0) {
      return (<View style={styles.container}>
        <View style={styles.card}>
          <Text>Sorry, you cannot take a quiz because there are no cards in the deck.</Text>
        </View>
      </View>)
    }
    else if (qNumber === numberOfQuestions) {
      const { incA, correctA } = this.state;
      return (<View style={styles.container}>
        <View style={styles.card}>
          <Text>You got {correctA} correct answers and {incA} incorrect answers.</Text>
          <TouchableOpacity onPress={this.handleRestartQ}
            style={styles.greenButton}
          >
            <Text style={{color:white}} >Restart Quiz</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.handleBackToDeck}
            style={styles.orangeButton}
          >
            <Text style={{color:white}} >Back to Deck</Text>
          </TouchableOpacity>
        </View>
      </View>)
    }
    return (<View style={styles.container} >
      <Text style={styles.numberOfQuestions} >Progress: {number}/{numberOfQuestions}</Text>
      <View style={styles.card}>

        {
          !showQ ? <View><Text style={styles.mainQuestion} >Question: "{deck.questions[qNumber].cardQuestion}"</Text><TouchableOpacity onPress={this.showA} >
            <Text style={{ color: orange}} >Show Answer</Text>
          </TouchableOpacity></View> : <View><Text style={styles.mainQuestion} >Answer: "{deck.questions[qNumber].cardAnswer}"</Text><TouchableOpacity onPress={this.showA} >
            <Text style={{ color: green}} >Show Question</Text>
          </TouchableOpacity></View>
        }
        <View style={styles.buttons}>
        <TouchableOpacity onPress={() => this.handleSubmitA(true)}
          style={styles.greenButton}
        >
          <Text style={{color:white}} >Correct</Text>
        </TouchableOpacity>
       
        <TouchableOpacity onPress={() => this.handleSubmitA(false)}
          style={styles.redButton}
        >
          <Text style={{color:white}}>Incorrect</Text>
        </TouchableOpacity>
        </View>
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
    justifyContent: "space-evenly",
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
    color: "black",
    margin: 3,
  },
  buttons:{
    alignItems: "flex-start",
 
  },
  greenButton:{
    backgroundColor:green,
    padding:16,
    margin:10,
    borderRadius:3
  },
  redButton:{
    backgroundColor:red,
    padding:16,
    margin:10,
    borderRadius:3
  },
  orangeButton:{
    backgroundColor:orange,
    padding:16,
    margin:10,
    borderRadius:3
  },
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