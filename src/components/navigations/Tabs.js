import React from 'react'
import { View, Text, Image } from 'react-native'

import { AnimatedTabBarNavigator } from 'react-native-animated-nav-tab-bar';


import { Home, Setting, Reservation, Profile } from "./../pages/mainScreen";

import Icon from 'react-native-vector-icons/dist/FontAwesome';

import { COLORS, icons } from "../exports"

const Tab = AnimatedTabBarNavigator();

const Tabs = () => {

   

    return (
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: '#ffffff',
                inactiveTintColor: '#606060',
            }}>
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <Image
                            source={icons.home}
                            resizeMode="contain"
                            style={{
                                width: 20,
                                height: 20,
                                tintColor: focused ? COLORS.white : COLORS.secondary
                            }}
                        />
                    ),
                }}
            />

            <Tab.Screen
                name="Reservation"
                component={Reservation}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <Image
                            source={icons.table}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? COLORS.white : COLORS.secondary
                            }}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Setting"
                component={Setting}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <Image
                            source={icons.bell}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? COLORS.white : COLORS.secondary
                            }}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <Image
                            source={icons.profile}
                            resizeMode="contain"
                            style={{
                                width: 20,
                                height: 20,
                                tintColor: focused ? COLORS.white : COLORS.secondary
                            }}
                        />
                    ),
                }}
            />

        </Tab.Navigator>

    )
}

export default Tabs
