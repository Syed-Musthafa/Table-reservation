


import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    Animated,
    TouchableOpacity,
    Image,
    SafeAreaView,
    FlatList,
    ScrollView,
    TextInput,
    Dimensions
} from 'react-native'

import { COLORS, FONTS, SIZES, icons, images, data, reviews } from '../../exports'

const inviteMail = ({ navigation }) => {

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

                    </Animated.View>
                    <View style={{ marginTop: 30 }}>
                        <Text style={{ color: '#ffffff', fontSize: 45, fontWeight: 'bold' }}>Mail List</Text>
                        <Text style={{ color: '#ffffff', fontSize: 20, fontWeight: 'bold' }}>Let Invite Your Friends</Text>
                    </View>
                </View>
            </View>
        )
    }

    function renderModule() {
        return (
            <View>
                <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                    backgroundColor: "#FFF",

                    borderRadius: 12,
                    marginHorizontal: 20,
                    marginTop: 50,
                    ...styles.shadow
                }}>
                    <View style={{ marginLeft: 10 }}>
                        <Image
                            source={icons.search}
                            style={{ height: 20, width: 20 }}
                        />
                    </View>
                    <TextInput
                        placeholder="Search Restaurant!"
                        placeholderTextColor="#345c74"
                        style={{

                            fontSize: 12,
                            width: 280,
                            paddingHorizontal: 12
                        }}
                    />
                    <View style={{ marginLeft: -30 }}>
                        <Image
                            source={icons.ballbar}
                            style={{ height: 20, width: 20 }}
                        />
                    </View>
                </View>

                <View style={{ padding: 15 }}>
                    <View style={{ width: '100%',  backgroundColor: "#fff", borderRadius: 10, ...styles.shadow, padding: 20 }}>
                        <View style={{ flexDirection:'row', borderWidth: 1, padding: 10, borderRadius: 10, borderColor: COLORS.gray1, height:50 }}>
                            <Text>To:</Text>
                            <TextInput
                                // placeholder="Description!"
                                placeholderTextColor='#333'
                                style={{ color: '#333', marginTop:-8, padding:5 }}
                                autoCapitalize="none"

                            />
                        </View>

                        <View style={{ flexDirection:'row', borderWidth: 1, padding: 10, borderRadius: 10, borderColor: COLORS.gray1 , height:50,marginTop:10, justifyContent:'flex-start' }}>
                            <Text>Cc/Bcc:</Text>
                            <View style={{justifyContent:'center', alignItems:'center'}}>
                            <TextInput
                                // placeholder="Description!"
                                placeholderTextColor='#333'
                                style={{ color: '#333', marginTop:-8, padding:5 , }}
                                autoCapitalize="none"

                            />
                            </View>
                        </View>

                        <View style={{ flexDirection:'row', borderWidth: 1, padding: 10, borderRadius: 10, borderColor: COLORS.gray1,height:50, marginTop:10  }}>
                            <Text>Subject:</Text>
                            <TextInput
                                // placeholder="Description!"
                                placeholderTextColor='#333'
                                style={{ color: '#333', marginTop:-8, padding:5  }}
                                autoCapitalize="none"

                            />
                        </View>

                        <View style={{ height:150, borderWidth: 1, padding: 10, borderRadius: 10, borderColor: COLORS.gray1, marginTop:20 }}>
                            
                            <TextInput
                                placeholder="Description!"
                                placeholderTextColor='#333'
                                style={{ color: '#333', marginTop:-15 }}
                                autoCapitalize="none"

                            />
                        </View>

                    </View>
                </View>
                <View style={{flex:1,  justifyContent:'center', alignItems:'flex-end', padding:20, marginTop:30,}}>
                    <TouchableOpacity style={{borderColor:COLORS.primary, borderWidth:1, width:100, height:40, justifyContent:'center', alignItems:'center',borderRadius:10}}>
                        <Text style={{ color:COLORS.primary,}}>send</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }


    return (
        <View style={styles.container}>
            <View style={{ flex: 0.8, backgroundColor: COLORS.primary, borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }}>
                {renderHeader()}
            </View>
            <View style={{ flex: 2, marginTop: -70, }}>

                {renderModule()}

            </View>

        </View>
    )
}

export default inviteMail

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
        elevation: 5,
    },
})
