import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

//Pages
import LoginScreen from './pages/login/index';
import MainScreen from './pages/main/index';

const MainNavigator = createStackNavigator({
  Home: {screen: LoginScreen},
  Main: {screen: MainScreen},
});

const App = createAppContainer(MainNavigator);

export default App;

