console.disableYellowBox = true;

import React from 'react';
//navigation
import HomeScreen from './components/pickerScreen.component';
import ResultScreen from './components/resultScreen.component';
import BookmarksScreen from './components/bookmarksScreen.component';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
//icons
import { Icon } from 'react-native-elements';
// import { AntDesign } from '@expo/vector-icons';


var BottomNav = createBottomTabNavigator({
    Home:HomeScreen,
    Results:ResultScreen,
    Bookmarks:BookmarksScreen,
  }, {
    defaultNavigationOptions:({navigation}) => ({
      tabBarIcon:({tintColor}) => {
        var iconName;
        if (navigation.state.routeName ==='Home') {
          iconName = 'ios-home'
        } else if (navigation.state.routeName ==='Result') {
          iconName = 'ios-clipboard'
        } else if (navigation.state.routeName ==='Bookmarks') {
          iconName = 'ios-radio'
        } 
        return <Icon type='ionicon' name={iconName} size={24} color={tintColor} />;
      }, 
      tabBarOptions: {
        activeTintColor: '#FF8367',
        inactiveTintColor:'#2A2B2A',
        tabStyle:{backgroundColor: '#ffffff'},
      }
    })
  })
  
  const Navigation = createAppContainer(BottomNav)
  
  export default function App() {
    return (
        <Navigation />
    );
  }
  