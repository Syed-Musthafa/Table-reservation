import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";

import Tabs from "./../navigations/Tabs";



import {
  LoginScreen,
  SignUpScreen
   } from "./../pages/authScreen"

 

const Stack = createStackNavigator();





const Routes = () => {
  return(
    <Stack.Navigator
    screenOptions={{
      headerShown: false
    }}
    initialRouteName={"Login"}
   >
     <Stack.Screen name="Login"  component={LoginScreen} />
     <Stack.Screen name="SignUp"  component={SignUpScreen}/>
     <Stack.Screen name="Tabs"  component={Tabs}/>
   
   </Stack.Navigator>
  )
}





export default Routes