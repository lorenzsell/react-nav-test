import { StackNavigator } from 'react-navigation';

import MainScreen from '../components/MainScreen';
import PodNavigator from '../navigators/PodNavigator';

const PodListNavigator = StackNavigator({
  PodList: { screen: MainScreen },
  PodNavigator: { screen: PodNavigator },
});

export default PodListNavigator;
