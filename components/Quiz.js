import React, { Component } from 'react'
import { StyleSheet, Text, View,TextButton } from 'react-native';
import { connect } from "react-redux";
import DeckCard from './DeckCard';
class Quiz extends Component {
  state = {
    qIndex: 0,
    correctQ: 0,
    incorrectQ:0,
    showAnswer: false,
  }
    render() {
      const { route, numberOfQuestions, questions, navigation } = this.props;
      const { title } = route.params;
      const { qIndex, correctQ } = this.state;
      return (  <View >
        <DeckCard title={title} />
        <View>
          <View >
            <Text >
              {qIndex + 1}/{numberOfQuestions}
            </Text>
        <Text >
          {/* {showAnswer ? card.answer : card.question} */}
        </Text>
        {/* Tooggling ShowAnswer button implementation */}
        <TextButton
          onPress={flip}
        >
          {showAnswer ? "Show Question" : "Show Answer"}
        </TextButton>

        <TouchableOpacity
          style={styles.button}
          onPress={() => mark("correct")}
        >
          <Text >Correct</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => mark("incorrect")}
        >
          <Text>Incorrect</Text>
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
  function mapStateToProps(decks, { route }) {
    const {title} = route.params;
    const deck = decks[title];
    console.log(deck, '<-THis is ssit')
    const numberOfQuestions = deck.questions.length;
    return {
      deck,
      numberOfQuestions,
      questions: deck.questions
    };
  }
  export default connect(mapStateToProps)(Quiz);