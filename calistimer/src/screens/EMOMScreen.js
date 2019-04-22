import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const EMOMScreen = props => {
  return (
    <View style={Styles.container}>
      <Text>EMOM Screen</Text>
    </View>
  )
}
EMOMScreen.navigationOptions = {
  header: null
}
const Styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#D6304A'
  }
})

export default EMOMScreen