import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const Select = props => {
  return (
    <View style={{ flex: 1}}>
      <Text style={ styleSelect.label }> Label </Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around'}}>
      <TouchableOpacity style={[ styleSelect.opt, styleSelect.optSelected ]}>
        <Text style={ styleSelect.opt }>Option 01</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[ styleSelect.opt ]}>
        <Text style={ styleSelect.opt }>Option 01</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[ styleSelect.opt ]}>
        <Text style={ styleSelect.opt }>Option 01</Text>
      </TouchableOpacity>
      </View>
    </View>
  )
}

const styleSelect = StyleSheet.create({
  label: {
    textAlign: 'center',
    color: 'white',
    fontFamily: 'Ubuntu-Regular',
    fontSize: 24
  }, 
  opt: {
    padding: 8
  },
  optSelected: {
    backgroundColor: 'rgba(255,255,255,0.6)'
  },
  opt: {
    color: 'white',
    fontFamily: 'Ubuntu-Regular',
    fontSize: 24
  }
})

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