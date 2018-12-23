import React from 'react'
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
