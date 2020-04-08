import React, { Component } from 'react'
import { StyleSheet, Text, View,TouchableOpacity,Modal } from 'react-native';
import DeckCard from './DeckCard';
import AddCard from './AddCard';
import {deleteDeckTitle} from "../utils/api"
import { connect } from "react-redux";
import { deleteDeck } from "../actions";
class Deck extends Component {
  state = {
    modalVisible: false
  }

  handleAddCard = () =>{
    this.setState({modalVisible:true})
  }
  handleStartQuiz = () =>{
  }
  handleDeleteDeck = (deck) =>{
    const {dispatch,navigation} = this.props;
    deleteDeckTitle(deck).then(()=>{
      dispatch(deleteDeck(deck))
      navigation.navigate("Home")
    })

    //navigat
  }
  handleCloseModal = () =>{
    this.setState({modalVisible:false})
  }

    render() {
      const { title } = this.props;
    const {modalVisible} = this.state;
      return <View>
        <DeckCard title={title}/>
        <Modal
            animationType="slide"
            transparent={false}
            visible={modalVisible}
            
            presentationStyle="fullScreen"
          >
            <AddCard title={title} closeModal = {this.handleCloseModal}/>
          </Modal>
        <TouchableOpacity
                style={styles.button}
                onPress={this.handleAddCard}
              ><Text>Add Card</Text>
              </TouchableOpacity>
        <TouchableOpacity
                style={styles.button}
                onPress={this.handleStartQuiz}
              ><Text>Start Quiz</Text>
              </TouchableOpacity>
        <TouchableOpacity
                style={styles.button}
                onPress={()=>this.handleDeleteDeck(title)}
              ><Text>Delete Deck</Text>
              </TouchableOpacity>
      </View>;
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
    return {
      title
    };
  }
  export default connect(mapStateToProps)(Deck)