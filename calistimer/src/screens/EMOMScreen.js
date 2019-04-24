import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Select = props => {
  return (
    <View style={{ flex: 1}}>
      <Text style={{ textAlign: 'center'}}> Label </Text>
      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around'}}>
        <Text style={{ color: 'white'}}>Option 01</Text>
        <Text style={{ color: 'white'}}>Option 01</Text>
        <Text style={{ color: 'white'}}>Option 01</Text>
      </View>
    </View>
  )
}

const EMOMScreen = props => {
  return (
    <View style={Styles.container}>
      <Text>EMOM Screen</Text>
      <Select></Select>
    </View>
  )
}
EMOMScreen.navigationOptions = {
  header: null
}
const Styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#D6304A',
    paddingTop: 200
  }
})

export default EMOMScreen