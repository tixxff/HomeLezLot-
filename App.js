import {createStackNavigator,createAppContainer} from 'react-navigation';
import Login2 from './Login2'



const App = createStackNavigator({
  Login2: {
    screen: Login2
  }
});

export default createAppContainer(App);