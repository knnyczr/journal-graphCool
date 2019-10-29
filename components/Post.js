import React, { Component } from 'react';
import { Text, View } from 'react-native';
import navStyles from '../styles/navigationStyles'

export default class componentName extends Component {
static navigationOptions ={
    title: "Posts", 
    ...navStyles
}

  render() {
    return (
    <View> 
        <Text>New Page! 😱</Text>
    </View>
    );
  }
}
