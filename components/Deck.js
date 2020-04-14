import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Modal } from 'react-native';
import DeckCard from './DeckCard';
import AddCard from './AddCard';
import { deleteDeckTitle } from "../utils/api"
import { connect } from "react-redux";
import { deleteDeck } from "../actions";
import {blue,red,green,orange,white} from "../utils/colors"
class Deck extends Component {
 

  handleAddCard = () => {
    const { navigation, title } = this.props;
    navigation.navigate('addCard', { title })
  }
  handleStartQuiz = (deck) => {
    const { navigation, title } = this.props;
    navigation.navigate("Quiz", { title });
  }
  handleDeleteDeck = (deck) => {
    const { dispatch, navigation } = this.props;
    deleteDeckTitle(deck).then(() => {
      dispatch(deleteDeck(deck))
      navigation.navigate("Home")
    })

    //navigat
  }

  render() {
    const { title,navigation } = this.props;
    return <View style={styles.container}>
      <View style={styles.card}>
      <DeckCard title={title} />
  
        <TouchableOpacity
          style={styles.addBtn}
          onPress={()=> this.handleAddCard(title)}
        ><Text style={{color:white}}>Add Card</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.startBtn}
          onPress={() => this.handleStartQuiz(title)}
        ><Text style={{color:white}}>Start Quiz</Text>
        </TouchableOpacity>
        <TouchableOpacity
           style={styles.deleteButton}
          onPress={() => this.handleDeleteDeck(title)}
        ><Text style={{color:white}}>Delete Deck</Text>
        </TouchableOpacity>
      </View>
    </View>;
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
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
  addBtn:{
    backgroundColor:orange,
    padding:16,
    margin:10,
    borderRadius:3
  },
  startBtn:{
    backgroundColor:green,
    padding:16,
    margin:10,
    borderRadius:3
  },
  deleteButton:{
    backgroundColor:red,
    padding:16,
    margin:10,
    borderRadius:3
  },
 
  cardBtn: {
    flex: 1,
    justifyContent: "center",
  }


})

function mapStateToProps(decks, { route }) {
  const { title } = route.params;
  return {
    title
  };
}
export default connect(mapStateToProps)(Deck)