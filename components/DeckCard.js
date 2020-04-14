import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux'
import {white} from "../utils/colors"
function DeckCard(props) {
    const { deckCard } = props;
    return (<View style={styles.text}>
        <Text style={styles.title}>{deckCard.title}</Text>
        <Text style={styles.subTitle}>{deckCard.questions.length} cards</Text>
    </View>);
}

const styles = StyleSheet.create({
    
      title: {
        fontSize: 24,
    },
    subTitle: {
        fontSize: 16,
    },
});
function mapStateToProps(decks, { title }) {
    // {title} is the param passed from parent component. We just need to match that within the decks list

    return {
        deckCard: decks[title] ? decks[title] : ({ title: title, questions: [] })
    }

}
export default connect(mapStateToProps)(DeckCard);