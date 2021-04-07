import React from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";

import { createDrawerNavigator } from '@react-navigation/drawer';

import Tabs from "./Tabs";

import { DrawerContent } from "./Drawer";



import {
  LoginScreen,
  SignUpScreen
} from "./../pages/authScreen"
import Animated from 'react-native-reanimated';
// import { styles } from 'expo-ui-kit';



const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();



const Screens = ({navigation , style}) => {
  return (
    <Animated.View style={[{flex: 1, overflow:'hidden'}, style]}>
    <Stack.Navigator
      // screenOptions={{
      //   headerShown: false
      // }}
      // initialRouteName={"Login"}
      headerMode="none"
    >
      {/* <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} /> */}
      <Stack.Screen name="Tabs" component={Tabs} />

    </Stack.Navigator>
    </Animated.View>
  )
}







export default Routes = () => {


  const [progress, setProgress] = React.useState(new Animated.Value(0))

  const scale = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0.8],
  });

  const borderRadius = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [1, 10],
  })
  


  const screensStyles = { borderRadius, transform: [{scale}] };

  return (
    <Drawer.Navigator headerMode="none"
    drawerType="slide"
    overlayColor="tranparent"
    drawerStyle={{ width:'55%', backgroundColor:"transparent"}}
    contentContainerStyle={{ flex:1}}
    drawerContentOptions={{
      activeBackgroundColor:"tranparent",
      activeTintColor:"green",
      inactiveTintColor:"green"
    }}
    sceneContainerStyle={{backgroundColor:"transparent"}}
    // initialRouteName=""
     drawerContent={(props) => {
     setProgress(props.progress);

     return <DrawerContent {...props} />
     }} 
     >
            <Drawer.Screen name="Screens"  >
            {props => <Screens {...props} style={screensStyles} />}
            </Drawer.Screen>
           
   </Drawer.Navigator>
  )
}


const styles = StyleSheet.create({})



