/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import { Scene, Router, Stack } from 'react-native-router-flux';

import HomeView from './HomeView';
import LoginView from './LoginView';
import ArtistDetailView from './ArtistDetailView';

export default class App extends Component<{}> {

  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="login" component={LoginView} hideNavBar />
          <Scene key="home" component={HomeView} hideNavBar />
          <Scene key="artistDetail" component={ArtistDetailView} />
        </Scene>
      </Router>
    );
  }
}
