import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import {connect} from 'react-redux'
function DeckCard(props){
    const {deckCard} = props;
    return(<View>
        <Text>{deckCard.title}</Text>
        <Text>{deckCard.questions.length} cards</Text>
        </View>);
}
function mapStateToProps(decks, {title}){
    // {title} is the param passed from parent component. We just need to match that within the decks list
  
    return{
        deckCard:decks[title]?decks[title]:({title:title,questions:[]})
    }

}
export default connect(mapStateToProps)(DeckCard);