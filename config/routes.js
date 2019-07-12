import { createStackNavigator } from 'react-navigation'

import Home from '../screens/Home'
import PhotoWithEmote from '../screens/PhotoWithEmote'

export default createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: () => null
    }
  },
  PhotoWithEmote: {
    screen: PhotoWithEmote
  }
})
