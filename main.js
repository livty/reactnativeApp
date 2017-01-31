//code for android

import Exponent from 'exponent';
//import a library to create a Component
import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';

//create a Component
const App = () => (

  <Header headerText={'Albums'} />
  );


//render it to teh device
AppRegistry.registerComponent('albums', () => App);
Exponent.registerRootComponent(App);
