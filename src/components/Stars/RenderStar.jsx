import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


export default function RenderStar({ vote }) {
  console.log(vote)
  return (
    <View style={styles.container}>
      {vote >= 1 && <Icon name={'star'} style={[styles.myStarStyle]} />}
      {vote >= 2 && <Icon name={'star'} style={[styles.myStarStyle]} />}
      {vote >= 3 && <Icon name={'star'} style={[styles.myStarStyle]} />}
      {vote >= 4 && <Icon name={'star'} style={[styles.myStarStyle]} />}
      {vote >= 5 && <Icon name={'star'} style={[styles.myStarStyle]} />}
      {(vote *2) % 2 == 1 && <Icon name={'star-half'} style={[styles.myStarStyle]} />}
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row"
  },
  myStarStyle: {
    color: 'orange',
    backgroundColor: 'transparent',
    textShadowColor: 'black',
    // textShadowOffset: { width: 10, height: 10 },
    textShadowRadius: 2,
    fontSize: 15,
  },
  myEmptyStarStyle: {
    color: 'white',
  },
})
