import React from 'react'
<<<<<<< HEAD
import { StyleSheet, Text, View } from 'react-native'

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen-- and this works....</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue'
  }
})
=======
import { createStackNavigator, createAppContainer } from 'react-navigation'
import Home from './screens/Home'

/* const RootStack = createStackNavigator(
  {
    Home: Home,
    PhotoWithEmote: PhotoWithEmote
  },
  {
    initialRouteName: 'Home'
  }
)

const AppContainer = createAppContainer(RootStack) */

export default class App extends React.Component {
  render() {
    return <Home />
  }
}
>>>>>>> 7255a4a8356e14c15007f2af32623936b2d0e1b4
