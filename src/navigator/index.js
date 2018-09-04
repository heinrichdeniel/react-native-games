import { Navigation } from 'react-native-navigation'
import Home from '../modules/Home'


export default class Navigator {
  constructor() {
    this.configureScreens();
  }

  configureScreens = () => {
    const screens = {
      Home
    }

    Object.keys(screens).map(key => {
      Navigation.registerComponent(key, () => screens[key])
    })
    
    Navigation.events().registerAppLaunchedListener(() => {
      Navigation.setRoot({
        root: {
          component: {
            name: 'Home'
          }
        }
      });
    });
  }
}


  