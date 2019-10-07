import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { StatusBar, AsyncStorage,View, Text } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';

import api from '../../services/api';

export default class MainScreen extends Component 
{
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <Button
        title="Go to Jane's profile"
        onPress={() => navigate('Profile', {name: 'Jane'})}
      />
    );
  }
}