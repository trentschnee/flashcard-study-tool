import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native';
function DeckCard(props){
    const {title} = props;
    return(<View>
        <Text>{title}</Text><Text>Cards: </Text></View>);
}
export default DeckCard;