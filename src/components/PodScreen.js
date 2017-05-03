import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

class PodScreen extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: 'Pod Screen',
    headerRight: <TouchableOpacity onPress={() => navigation.navigate('DrawerOpen')}><Text><FontAwesome name="navicon" size={32} color="black" /> </Text></TouchableOpacity>
  });

  render() {
    return (
      <View><Text>Pod Screen</Text></View>
    );
  }

}

export default PodScreen;
