import React from 'react'

import {
  StyleSheet,
  Text,
  View,
  Animated,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
  Dimensions
} from 'react-native'

// import {

//   TouchableRipple,
//   Switch
// } from 'react-native-paper';

import { Picker } from '@react-native-community/picker';


import ToggleSwitch from 'toggle-switch-react-native'


import { COLORS, FONTS, SIZES, icons, images, data, reviews } from '../../exports'



const Setting = ({navigation}) => {

  const screenHeight = Dimensions.get('window').height

  const [state, setState] = React.useState({
    gender: '',
    isOnBlueToggleSwitch: false
  })


  function renderHeader() {
    return (
      <View style={{ width: '100%', }}>
        <View style={{ padding: SIZES.padding2, marginTop: 50 }}>
          <Animated.View
            style={[{ flexDirection: 'row', justifyContent: 'space-between', }]}>
            <TouchableOpacity
              onPress={() => { navigation.openDrawer() }}
            >
              <Image
                source={icons.sidebar}
                resizeMode="contain"
                style={{ width: 40, height: 40, tintColor: '#ffffff' }}

              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={icons.settings}
                resizeMode="contain"
                style={{ width: 30, height: 30, tintColor: '#ffffff' }}

              />
            </TouchableOpacity>
          </Animated.View>
          <View style={{ width: '50%', marginTop: 30 }}>
            <Text style={{ color: '#ffffff', fontSize: 45, fontWeight: 'bold' }}>Settings</Text>

          </View>
        </View>
      </View>
    )
  }

  function renderModule() {
    return (
      <View style={{ padding: 10 }}>

        <View style={{ width: '100%', backgroundColor: "#fff", borderTopLeftRadius: 20, borderTopRightRadius: 20, ...styles.shadow }}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ padding: 20 }}
          >
            <View style={{ Height: "auto", maxHeight: screenHeight }}>

              {/* 1 */}
              <View style={{ flexDirection: 'row', width: '100%', borderBottomWidth: 1 }}>
                <Image
                  source={icons.profile}
                  resizeMode="contain"
                  style={{ width: 20, height: 20, marginTop: 15, marginLeft: 10, tintColor: '#333' }}
                />
                <TextInput
                  placeholder="Enter your Username"
                  placeholderTextColor='#333'
                  style={[styles.textInput, { color: '#333', marginLeft: 20 }]}
                  autoCapitalize="none"

                />
                <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'flex-end' }}>
                  <Image
                    source={icons.pencil}
                    resizeMode="contain"
                    style={{ width: 20, height: 20, marginTop: 15, marginLeft: 10, tintColor: '#333' }}
                  />
                </View>
              </View>

              {/* 2 */}
              <View style={{ flexDirection: 'row', width: '100%', borderBottomWidth: 1, marginTop: 10 }}>
                <Image
                  source={icons.email}
                  resizeMode="contain"
                  style={{ width: 20, height: 20, marginTop: 15, marginLeft: 10, tintColor: '#333' }}
                />
                <TextInput
                  placeholder="Enter Email"
                  placeholderTextColor='#333'
                  style={[styles.textInput, { color: '#333', marginLeft: 20 }]}
                  autoCapitalize="none"

                />

              </View>

              {/* 3 */}
              <View style={{ flexDirection: 'row', width: '100%', borderBottomWidth: 1, marginTop: 10 }}>
                <Image
                  source={icons.phone1}
                  resizeMode="contain"
                  style={{ width: 20, height: 20, marginTop: 15, marginLeft: 10, tintColor: '#333' }}
                />
                <TextInput
                  placeholder="Enter your Phone Number"
                  placeholderTextColor='#333'
                  style={[styles.textInput, { color: '#333', marginLeft: 20 }]}
                  autoCapitalize="none"

                />

              </View>

              {/* 4 */}
              <View style={{ flexDirection: 'row', width: '100%', borderBottomWidth: 1, marginTop: 10 }}>
                <Image
                  source={icons.location1}
                  resizeMode="contain"
                  style={{ width: 20, height: 20, marginTop: 15, marginLeft: 10, tintColor: '#333' }}
                />
                <TextInput
                  placeholder="Location"
                  placeholderTextColor='#333'
                  style={[styles.textInput, { color: '#333', marginLeft: 20 }]}
                  autoCapitalize="none"

                />

              </View>

              {/* 5 */}
              <View style={{ flexDirection: 'row', width: '100%', borderBottomWidth: 1, marginTop: 10 }}>
                <Image
                  source={icons.language}
                  resizeMode="contain"
                  style={{ width: 20, height: 20, marginTop: 15, marginLeft: 10, tintColor: '#333' }}
                />
                <TextInput
                  placeholder="Language"
                  placeholderTextColor='#333'
                  style={[styles.textInput, { color: '#333', marginLeft: 20 }]}
                  autoCapitalize="none"

                />

              </View>

              {/* 6 */}
              <View style={{ flexDirection: 'row', width: '100%', borderBottomWidth: 1, marginTop: 10 }}>
                <Image
                  source={icons.gender}
                  resizeMode="contain"
                  style={{ width: 20, height: 20, marginTop: 15, marginLeft: 10, tintColor: '#333' }}
                />
                <Picker
                  selectedValue={state.gender}
                  style={styles.picker}
                  onValueChange={(itemValue, itemIndex) =>
                    setState({ ...state, gender: itemValue })
                  }>
                  <Picker.Item label='Select Gender' value="1" />
                  <Picker.Item label='Male' value="2" />
                  <Picker.Item label='Female' value="3" />

                </Picker>

              </View>


              {/* 7 */}
              <View style={{ flexDirection: 'row', width: '100%', borderBottomWidth: 1, marginTop: 10 }}>
                <Image
                  source={icons.bell}
                  resizeMode="contain"
                  style={{ width: 20, height: 20, marginTop: 15, marginLeft: 10, tintColor: '#333' }}
                />
                <TextInput
                  placeholder="Notification"
                  placeholderTextColor='#333'
                  style={[styles.textInput, { color: '#333', marginLeft: 20 }]}
                  autoCapitalize="none"

                />
                <View style={{ flex: 1, padding:10, justifyContent: 'flex-start', alignItems: 'flex-end' }}>
                  <ToggleSwitch
                    
                    onColor="#2196F3"
                    isOn={state.isOnBlueToggleSwitch}
                    onToggle={isOnBlueToggleSwitch => {
                      setState({ isOnBlueToggleSwitch });
                     
                    }}
                  />
                </View>
              </View>


              {/* 8 */}
              <View style={{ flexDirection: 'row', width: '100%', borderBottomWidth: 1, marginTop: 10 }}>
                <Image
                  source={icons.lock}
                  resizeMode="contain"
                  style={{ width: 20, height: 20, marginTop: 15, marginLeft: 10, tintColor: '#333' }}
                />
                <TextInput
                  placeholder="Enter your Password"
                  placeholderTextColor='#333'
                  style={[styles.textInput, { color: '#333', marginLeft: 20 }]}
                  autoCapitalize="none"

                />

              </View>


              {/* 9 */}
              <View style={{ flexDirection: 'row', width: '100%', borderBottomWidth: 1, marginTop: 10 }}>
                <Image
                  source={icons.tracking}
                  resizeMode="contain"
                  style={{ width: 30, height: 30, marginTop: 15, marginLeft: 10, tintColor: '#333' }}
                />
                <TextInput
                  placeholder="Location traking"
                  placeholderTextColor='#333'
                  style={[styles.textInput, { color: '#333', marginLeft: 10 }]}
                  autoCapitalize="none"

                />
                <View style={{ flex: 1, padding:10, justifyContent: 'flex-start', alignItems: 'flex-end' }}>
                <ToggleSwitch
                    
                    onColor="#2196F3"
                    isOn={state.isOnBlueToggleSwitch}
                    onToggle={isOnBlueToggleSwitch => {
                      setState({ isOnBlueToggleSwitch });
                     
                    }}
                  />
                </View>
              </View>
            </View>
          </ScrollView>
        </View>

      </View>
    )
  }



  return (
    <View style={styles.container}>
      <View style={{ flex: 1.2, backgroundColor: COLORS.primary, borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }}>
        {renderHeader()}
      </View>
      <View style={{ flex: 2, marginTop: -70, }}>

        {renderModule()}

      </View>

    </View>
  )
}

export default Setting

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",

    backgroundColor: "#fff"
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 1,
  },
  picker: {
    backgroundColor: COLORS.white,
    width: '100%',
    height: 45,
    marginLeft: 15,
  },
})
