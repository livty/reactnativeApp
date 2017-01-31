//code for android

import Exponent from 'exponent';
//import a library to create a Component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

//create a Component
const App = () => (
  <View>
  <Header headerText={'Albums'} />
  <AlbumList />
  </View>
  );


//render it to teh device
AppRegistry.registerComponent('albums', () => App);
Exponent.registerRootComponent(App);
