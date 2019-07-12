import React, { Component } from 'react'
import { StyleSheet, Text, Button, View } from 'react-native'

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Facial Emotion Recoginition</Text>
        <Button
          title='Take Photo'
          onPress={() => this.props.navigation.navigate('PhotoWithEmote')}
        />
        <Button
          title='Upload Photo'
          onPress={() => console.log('button pressed')}
        />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
})
