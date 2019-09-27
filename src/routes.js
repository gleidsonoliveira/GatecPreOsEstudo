import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

//Pages
import Login from './pages/login/index';
import Main from './pages/main/index';

const AppNavigator = createStackNavigator({
  Login: {
    screen: Login,
  },
  View: {
    screen: Main,
    navigationOptions: {
      title: 'View User',
      headerStyle: { backgroundColor: '#f05555' },
      headerTintColor: '#ffffff',
    },
  }
});

export default createAppContainer(AppNavigator);
