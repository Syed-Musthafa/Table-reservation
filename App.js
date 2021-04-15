import React, { Component, useEffect } from 'react';
import { Text, View , StatusBar, BackHandler} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";

import { COLORS, icons, images, SIZES } from './src/components/exports'

import Routes from './src/components/navigations/routes'

// import TouchID from 'react-native-touch-id';







const App = () => {

  // const [isAuth, setIsAuth] = React.useState(false)

  // const optionalConfigObject = {
  //   title: 'Authentication Required', // Android
  //   imageColor: '#ddd', // Android
    
  //   imageErrorColor: '#ff0000', // Android
  //   sensorDescription: '', // Android
  //   sensorErrorDescription: 'Failed', // Android
  //   cancelText: 'Cancel', // Android
  //   fallbackLabel: 'Show Passcode', // iOS (if empty, then label is hidden)
  //   unifiedErrors: false, // use unified error messages (default false)
  //   passcodeFallback: false, // iOS - allows the device to fall back to using the passcode, if faceid/touch is not available. this does not mean that if touchid/faceid fails the first few times it will revert to passcode, rather that if the former are not enrolled, then it will use the passcode.
  // };

  // useEffect(() => {
    
  //   handleBiometric();
    
  // }, )


  // const handleBiometric = () => {
  //   TouchID.isSupported(optionalConfigObject).then((biometryType) => {
  //     if (biometryType === 'FaceID') {
  //       console.log('FaceID is supported.');
  //       TouchID.authenticate('', optionalConfigObject).then((success) => {
  //         console.log('Success', success);
  //         setIsAuth(success);
  //       })
  //       .catch(err => {
  //         BackHandler.exitApp();
          
  //       })
  //     } else {
  //       console.log('TouchID is supported.');
  //       if (isAuth) {
  //         return null
  //       }
  //       TouchID.authenticate('', optionalConfigObject).then((success) => {
  //         console.log('Success', success);
  //         setIsAuth(success);
          
  //       })
  //       .catch(err => {
  //         BackHandler.exitApp();
          
  //       })
  //     }
  //   })
  // }


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
