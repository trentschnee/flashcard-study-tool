import React, { Component } from 'react'
import { StyleSheet, Text, View,TouchableOpacity,Modal } from 'react-native';
import DeckCard from './DeckCard';
import AddCard from './AddCard';

class Deck extends Component {
  state = {
    modalVisible: false
  }

  handleAddCard = () =>{
    this.setState({modalVisible:true})
  }
  handleStartQuiz = () =>{
    console.log('start quiz')
  }
  handleDeleteDeck = () =>{
    console.log('delete deck')
  }
  handleCloseModal = () =>{
    this.setState({modalVisible:false})
  }

    render() {
      const { navigation, route } = this.props;
      const { title } = route.params;
    const {modalVisible} = this.state;
      return <View>
        <DeckCard title={title}/>
        <Modal
            animationType="slide"
            transparent={false}
            visible={modalVisible}
            
            presentationStyle="fullScreen"
          >
            <AddCard closeModal = {this.handleCloseModal}/>
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
                onPress={this.handleDeleteDeck}
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
export default Deck;