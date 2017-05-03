import { DrawerNavigator } from 'react-navigation';

import PodScreen from '../components/PodScreen';
import PodNav from '../components/PodNav';

const PodNavigator = DrawerNavigator({
  Pod: { screen: PodScreen }
}, {
  contentComponent: PodNav,
  drawerPosition: 'right',
  }
);

export default PodNavigator;
