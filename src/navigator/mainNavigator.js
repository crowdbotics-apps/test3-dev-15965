import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen015162Navigator from '../features/BlankScreen015162/navigator';
import BlankScreen115161Navigator from '../features/BlankScreen115161/navigator';
import BlankScreen015158Navigator from '../features/BlankScreen015158/navigator';
import BlankScreen115157Navigator from '../features/BlankScreen115157/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen015162: { screen: BlankScreen015162Navigator },
BlankScreen115161: { screen: BlankScreen115161Navigator },
BlankScreen015158: { screen: BlankScreen015158Navigator },
BlankScreen115157: { screen: BlankScreen115157Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
