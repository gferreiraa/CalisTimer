import React from 'react'
import { View, Text } from 'react-native'

import Button from '../components/Button'


const HomeScreen = props => {
  return (
    <View style={{ flex: 1, backgroundColor: '#D6304A'}}>
      <Text style={{ fontFamily: 'Ubuntu-Bold', fontSize: 48, textAlign: 'center', color: 'white', marginTop: 111}}>CalisTimer</Text>
        <Button onPress={() => props.navigation.navigate('EMOM')}>EMOM</Button>
        <Button onPress={() => props.navigation.navigate('EMOM')}>EMOM2</Button>
        <Button onPress={() => props.navigation.navigate('EMOM')}>EMOM3</Button>
        <Button onPress={() => props.navigation.navigate('EMOM')}>EMOM4</Button>
    </View>
  )
}
HomeScreen.navigationOptions = {
  header: null
}
export default HomeScreen