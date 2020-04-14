import React, { Component } from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { connect } from "react-redux";
import { getDecks } from "../utils/api"
import { getAllDecks } from "../actions";
import { TouchableOpacity } from 'react-native-gesture-handler';
import {blue} from "../utils/colors"
import DeckCard from './DeckCard';
class DeckList extends Component {

  componentDidMount() {
    const { dispatch } = this.props;
    getDecks().then((decks) => {
      dispatch(getAllDecks(decks))
    })

  }
  handleClickCard = (value) => {
    const { navigation, route } = this.props;
    navigation.navigate("Deck", { title: value });
  }
  render() {
    const { deckTitles } = this.props
    if (deckTitles.length === 0){
      return(<View style={styles.container}>
<Text>No decks are available! Please add a deck by going to "Add Deck" in the navigation menu below. </Text>
      </View>)
    }
    return <View style={styles.container}>
      <FlatList 
        data={deckTitles}
        renderItem={({ item }) => <TouchableOpacity
          value={item}
          style={styles.card}
          onPress={() => this.handleClickCard(item)}
        ><DeckCard style={styles.text}  title={item} />
        </TouchableOpacity>}
        keyExtractor={(item, index) => index.toString()}

      />
    </View>;
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: "stretch",
    justifyContent:"center",
    padding:30
  },
  card:{
    flex:1,
    alignItems: "center",
    margin:10,
    padding:10,
    backgroundColor:blue,
    borderRadius:10,
    shadowColor: 'rgba(0,0,0,0.34)',
    shadowOffset: {
      width: 0,
      height: 3,
    }
  },
 
});
function mapStateToProps(decks) {
  const deckTitles = Object.keys(decks);
  return {
    deckTitles
  }

}
export default connect(mapStateToProps)(DeckList);