import React, { Component } from 'react';
import { View, Button } from 'react-native';
import { connect } from 'react-redux';
// import { Actions } from 'react-native-router-flux';
import { loginUserSuccess } from '../actions/NavActions.js';

class LoginScreen extends Component {

  render() {
    return (
      <View><Button title="Login" onPress={this.props.loginUserSuccess}/></View>
    );
  }
}

export default connect(null, { loginUserSuccess })(LoginScreen);
