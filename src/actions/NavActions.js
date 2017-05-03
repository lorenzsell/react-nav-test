import {
  LOAD_POD_SCREEN,
  LOGIN_USER_SUCCESS
} from './types';

export const loginUserSuccess = () => {
  return {
    type: LOGIN_USER_SUCCESS
  };
};

export const loadPodScreen = () => {
  return {
    type: LOAD_POD_SCREEN
  };
};
