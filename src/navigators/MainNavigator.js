import { DrawerNavigator } from 'react-navigation';

import PodListNavigator from '../navigators/PodListNavigator';
import MainDrawer from '../components/MainDrawer';

const MainNavigator = DrawerNavigator({
  PodListNav: { screen: PodListNavigator }
}, {
  contentComponent: MainDrawer,
  }
);

export default MainNavigator;
