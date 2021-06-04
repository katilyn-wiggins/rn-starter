import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
//1. import new component
import ComponentsScreen from './src/screens/ComponentsScreen';
import ListScreen from './src/screens/ListScreen';

//what is the app navigator? its a tool from a library called React Navigation, shows different screens of content to the user
const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    //2. add to stack navigator
    Components: ComponentsScreen,
    List: ListScreen
  },
  {
    //first component that should be displayed
    initialRouteName: 'Home',
    //updated to show newly added component with exact name
    defaultNavigationOptions: {
      title: 'App'
    }
  }
);

export default createAppContainer(navigator);
