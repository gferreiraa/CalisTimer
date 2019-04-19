import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

const HomeScreen = props => {
  return (
    <View style={{ flex: 1, backgroundColor: '#D6304A'}}>
    <Text style={{ fontFamily: 'Ubuntu-Bold', fontSize: 48, textAlign: 'center', color: 'white', marginTop: 111}}>CalisTimer</Text>
      <TouchableOpacity onPress={ () => props.navigation.navigate('EMOM')}>
        <Text style={{ color: 'white', fontSize:24, textAlign: 'center', fontFamily: 'Ubuntu-Regular'}}>EMOM</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={ () => props.navigation.navigate('EMOM')}>
        <Text>AMRAP</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={ () => props.navigation.navigate('EMOM')}>
      <Text>ISOMETRIA</Text>
    </TouchableOpacity>
    </View>
  )
}
HomeScreen.navigationOptions = {
  header: null
}
export default HomeScreen