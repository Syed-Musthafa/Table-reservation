import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {
    DrawerContentScrollView,
    DrawerItem

} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { SIZES } from '../exports';




export function DrawerContent(props) {
    // console.log("progress", props.progress);
    return (
        <DrawerContentScrollView {...props} contentContainerStyle={{ flex:1}}>
        <View>
        <View style={{ flex:1, padding:SIZES.padding2, alignItems:"center", justifyContent:'center'}}>
            <Text style={{ fontSize:40, fontWeight:'bold'}}>
                Menu
            </Text>
        </View>
            <DrawerItem
                icon={({color, size}) => (
                  <Icon name="home" color={color} size={size} style={{marginTop:20}} />
                )}
                label="Home"
                labelStyle={{marginLeft: -16, marginTop:20}}
                onPress={() => {
                  props.navigation.navigate('Home');
                }}
              />
              <DrawerItem
                icon={({color, size}) => (
                  <Icon name="read" color={color} size={size} />
                )}
                label="Reservation"
                labelStyle={{marginLeft: -16}}
                onPress={() => {
                  props.navigation.navigate('Reservation');
                }}
              />
              <DrawerItem
                icon={({color, size}) => (
                  <Icon name="bell" color={color} size={size} />
                )}
                label="Setting"
                labelStyle={{marginLeft: -16}}
                onPress={() => {
                  props.navigation.navigate('Setting');
                }}
              />
              <DrawerItem
                icon={({color, size}) => (
                  <Icon name="account" color={color} size={size} />
                )}
                label="Profile"
                labelStyle={{marginLeft: -16}}
                onPress={() => {
                  props.navigation.navigate('Profile');
                }}
              />
            </View>  
            <View style={{ flex:1 , justifyContent:'flex-end', marginBottom:20}}>
            <DrawerItem
                icon={({color, size}) => (
                  <Icon name="logout" color={color} size={size} />
                )}
                label="Logout"
                labelStyle={{marginLeft: -16}}
                onPress={() => {
                  alert("Are you sure to logout ? ");
                }}
              />
            </View>
        </DrawerContentScrollView>
    )
}


const styles = StyleSheet.create({})
