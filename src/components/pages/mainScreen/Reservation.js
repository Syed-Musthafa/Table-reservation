import React from 'react'
import { View, Text , Image , StyleSheet, StatusBar} from 'react-native'
import { useIsFocused } from '@react-navigation/native';


import { COLORS, FONTS, SIZES, icons, images } from '../../exports'


const Reservation = () => {

    const isFocused = useIsFocused();
    

  return (


    <View style={styles.container}>
      { isFocused && <StatusBar backgroundColor={COLORS.primary} barStyle="light-content" /> }
      <View style={{flex:1, justifyContent:'center', alignItems:'center', }}>
        <Image
         source={images.reservation}
         resizeMode="stretch"
         style={{
           width:300,
           height:300
           
         }}
        />
      </View>
    </View>
  )
}

export default Reservation

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:COLORS.white
  }
})
