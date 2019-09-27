import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { StatusBar, AsyncStorage,View, Text } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';

import api from '../../services/api';

export default class Main extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
      </View>
    );
  }
}