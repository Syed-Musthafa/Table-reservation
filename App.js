import React, { Component } from 'react';
import { Text, View , StatusBar} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";

import { COLORS, icons, images, SIZES } from './src/components/exports'

import Routes from './src/components/navigations/routes'

// import Drawer from "./src/components/navigations/Drawer";





const App = () => {
  return (
      
    <NavigationContainer>
      {/* <StatusBar backgroundColor="#50B282" barStyle="light-content" /> */}
      <StatusBar translucent backgroundColor={COLORS.tranparent} />
    <Routes />
    {/* <Drawer /> */}
    </NavigationContainer>
  )
} 

   
 

export default App;
