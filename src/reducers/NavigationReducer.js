import { NavigationActions } from 'react-navigation';
import { AppNavigator } from '../navigators/AppNavigator';

import {
  LOGIN_USER_SUCCESS,
  LOAD_POD_SCREEN
} from '../actions/types';

const INITIAL_STATE = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('Login'));

export default (state = INITIAL_STATE, action) => {
  let nextState;
  switch (action.type) {
    case LOGIN_USER_SUCCESS:
      const loginSuccessAction = NavigationActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({ key: 'Main', routeName: 'Main' })
        ]
      });
      nextState = AppNavigator.router.getStateForAction(loginSuccessAction, state);
      break;
    case LOAD_POD_SCREEN:
      nextState = AppNavigator.router.getStateForAction(NavigationActions.navigate({ routeName: 'PodNavigator' }), state);
      break;
    default:
      nextState = AppNavigator.router.getStateForAction(action, state);
      break;
  }

  return nextState || state;
};
