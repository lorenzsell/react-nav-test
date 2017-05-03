import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Platform } from 'react-native';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';
import LoginScreen from '../components/LoginScreen';
import MainNavigator from '../navigators/MainNavigator';

export const AppNavigator = StackNavigator({
  Main: { screen: MainNavigator },
  Login: { screen: LoginScreen },
}, {
  headerMode: 'none',
  mode: Platform.OS === 'ios' ? 'modal' : 'card'
  }
);

const AppWithNavigationState = ({ dispatch, navReducer }) => {
  return (
    <AppNavigator navigation={addNavigationHelpers({ dispatch, state: navReducer })} />
  );
};

AppWithNavigationState.propTypes = {
  dispatch: PropTypes.func.isRequired,
  navReducer: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
  return { navReducer: state.navReducer };
};

export default connect(mapStateToProps)(AppWithNavigationState);
