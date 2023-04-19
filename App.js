import React from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Gujarat from './screens/Gujarat';
import Maharashtra from './screens/Maharashtra';
import Rajasthan from './screens/Rajasthan';
import WestBengal from './screens/WestBengal';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import Home from './screens/Home';

export default class App extends React.Component{
  render(){
    return(
      <SafeAreaProvider>
      <AppConatainer />
      </SafeAreaProvider>
    )
  }
}

var appNavigator = createSwitchNavigator({
  Home:Home,
  Gujarat:Gujarat,
  Rajasthan:Rajasthan,
  WestBengal:WestBengal,
  Maharashtra:Maharashtra,
});

const AppConatainer = createAppContainer(appNavigator);

// export default withNavigation(ChartStatePenetrationItem);

