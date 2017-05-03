import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, ListView, TouchableOpacity, Button } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { loadPodScreen } from '../actions/NavActions';

class MainScreen extends Component {

  static navigationOptions = ({ navigation, screenProps }) => {
    const { leftButtonStyle } = styles;
    return {
      title: 'Main screen',
      headerLeft: <TouchableOpacity onPress={() => { navigation.navigate('DrawerOpen'); }}><Text style={leftButtonStyle}><FontAwesome name="navicon" size={32} color="black" /></Text></TouchableOpacity>
    };
  };

  render() {
    return (
      <View>
        <Text>Main Screen</Text>
        <Button title="Load pod screen" onPress={this.props.loadPodScreen} />
      </View>
    );
  }
}

const styles = {
  leftButtonStyle: {
    paddingLeft: 10
  }
};

export default connect(null, { loadPodScreen })(MainScreen);
