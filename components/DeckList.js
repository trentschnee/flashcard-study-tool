import React, { Component } from 'react'
import { StyleSheet, Text, View,FlatList } from 'react-native';
import { connect } from "react-redux";
import {getDecks} from "../utils/api"
import { getAllDecks } from "../actions";
import { TouchableOpacity } from 'react-native-gesture-handler';
import DeckCard from './DeckCard';
class DeckList extends Component {

  componentDidMount(){
const {dispatch} = this.props;
getDecks().then((decks)=>{
  dispatch(getAllDecks(decks))
}) 
 
  }
  handleClickCard = (value) =>{
    const { navigation, route } = this.props;
    navigation.navigate("Deck", {title:value});
  }  
    render() {
      const {deckTitles}= this.props
      return <View>
        <FlatList
  data={deckTitles}
  renderItem={({item}) => <TouchableOpacity
  value={item}
  style={styles.button}
  onPress={()=>this.handleClickCard(item)}
><DeckCard title={item}/>
</TouchableOpacity>}
  keyExtractor={(item,index)=>index.toString()}
 
/>
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
function mapStateToProps(decks){
  console.log(JSON.stringify(decks),"<-thisisit")
  const deckTitles = Object.keys(decks);
  return{
    deckTitles
  }

}
export default connect(mapStateToProps)(DeckList);