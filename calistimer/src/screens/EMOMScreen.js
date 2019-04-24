import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

class Select extends Component {
  render(){
    const options = ['Opt1', 'Opt2', 'Opt3' ]
    const current = 'Opt2'
    return (
      <View style={{ flex: 1}}>
        <Text style={ styleSelect.label }> Label </Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around'}}>
        { options.map( opt => {
          return(
            <TouchableOpacity key={opt} style={[ styleSelect.opt, opt === current ? styleSelect.optSelected : null]}>
              <Text style={ styleSelect.opt }>{opt}</Text>
            </TouchableOpacity>
          )
        })}
        </View>
      </View>
    )
  }
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