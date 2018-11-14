import { createStackNavigator } from 'react-navigation';
import Login from './Login';
import Register from './Register';
import Secured from './Secured';
import CameraExample from './CameraExample';
import TabNavigator from './TabNavigator';

const AppNavigator = createStackNavigator({
  Login: { screen: Login , title:'Login'},
  Register: { screen: Register},
  Camera: { screen: CameraExample},
  Tab: { screen: TabNavigator },
});

export default AppNavigator;