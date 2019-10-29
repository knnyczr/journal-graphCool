import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import navStyles from './styles/navigationStyles'


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu',
});

import Post from './components/Post'

class App extends Component {
  static navigationOptions ={
    title: "Home", 
    ...navStyles,
    headerStyle: {
      backgroundColor: "#003300"
  },
  }

  goToPost = () => { this.props.navigation.navigate("Post") }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Hello Native! 😊😵 </Text>
        <Button onPress={this.goToPost} title="Go To post page" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

const AppNavigator = createStackNavigator({
  Home: {
    screen: App,
  },
  Post: {
    screen: Post,
  },
});

export default createAppContainer(AppNavigator);