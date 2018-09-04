import { AppRegistry } from 'react-native';
import Home from './src/modules/Home';
import Navigator from './src/navigator';

AppRegistry.registerComponent('reactnativegames', () => Home);

new Navigator();