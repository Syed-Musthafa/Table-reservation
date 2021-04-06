import React from 'react'
import {
    ImageBackground,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
} from 'react-native'

import { COLORS, icons, images, SIZES } from '../../exports'

const SignUpScreen = ({ navigation }) => {

    function renderHeader() {
        return (
            <View style={{ height: 130, justifyContent: 'flex-end', alignItems: 'flex-start', padding:SIZES.padding }} >
                <Text style={{ fontSize: 40, color: COLORS.white, fontWeight: 'bold' }}> Sign Up</Text>
            </View>
        )
    }


    function renderCard() {
        return (

            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

                <View style={styles.card}>
                    

                    <View style={{ justifyContent: 'center', alignItems: 'center', height: 150, marginTop:15,  borderTopLeftRadius: 20, borderTopRightRadius: 20 }}>
                        <Text style={{ fontSize: SIZES.h1, color: '#00c652', fontWeight:'bold' }}>Lets Join Us</Text>
                        <Text style={{ color: '#00c652', fontSize: 13, }}>we would love you to join us</Text>
                        <View style={{ flexDirection:'row', width:'100%', justifyContent:'space-evenly',marginTop:15}}>
                            <Image
                                source={icons.insta}
                                resizeMode="contain"
                                style={{ height: 40, width: 40, tintColor:'#ab47bc'}}
                            />
                            <Image
                                source={icons.facebook}
                                resizeMode="contain"
                                style={{ height: 40, width: 40, tintColor:'#03a9f4'}}
                            />
                        </View>
                        <Text style={{ fontSize: 10, padding: 10, color: '#ab47bc' ,marginTop:10}}>we have multiple options for to you join us</Text>
                    </View>

                    <View style={styles.inputContainer}>
                        <View style={{ flexDirection: 'row', backgroundColor: "#ddd", borderRadius: 10, }}>
                            <Image
                                source={icons.profile}
                                resizeMode="contain"
                                style={{ width: 20, height: 20, marginTop: 15, marginLeft: 10, tintColor: '#00c652' }}
                            />
                            <TextInput
                                placeholder="enter your Username"
                                placeholderTextColor='#00c652'
                                style={[styles.textInput, { color: '#333', }]}
                                autoCapitalize="none"

                            />
                        </View>

                        <View style={{ flexDirection: 'row', backgroundColor: "#ddd", borderRadius: 10, marginTop: 15 }}>
                            <Image
                                source={icons.profile}
                                resizeMode="contain"
                                style={{ width: 20, height: 20, marginTop: 15, marginLeft: 10, tintColor: '#00c652' }}
                            />
                            <TextInput
                                placeholder="enter your Email"
                                placeholderTextColor='#00c652'
                                style={[styles.textInput, { color: '#333', }]}
                                autoCapitalize="none"

                            />
                        </View>

                        <View style={{ flexDirection: 'row', backgroundColor: "#ddd", borderRadius: 10, marginTop: 15 }}>
                            <Image
                                source={icons.lock}
                                resizeMode="contain"
                                style={{ width: 20, height: 20, marginTop: 15, marginLeft: 10, tintColor: '#00c652' }}
                            />
                            <TextInput
                                placeholder="Enter the password"
                                placeholderTextColor='#00c652'
                                secureTextEntry={true}
                                style={[styles.textInput, { color: '#333', }]}
                                autoCapitalize="none"

                            />
                        </View>


                    </View>

                    <View style={{ justifyContent: "center", alignItems: 'center', marginTop: 10 }}>
                        <View style={{ justifyContent: "center", alignItems: 'center', backgroundColor: '#00c652', width: "40%", height: 45, borderRadius: 10 }}>
                            <Image
                                source={icons.arrow}
                                resizeMode="contain"
                                style={{ width: 30, height: 30, tintColor: COLORS.white }}
                            />
                        </View>

                    </View>
                </View>
            </View>


        )
    }


    function renderButton() {
        return (
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: '100%', }}>
                <TouchableOpacity
                 onPress={() => {navigation.navigate("Login")}}
                 style={[styles.button, { backgroundColor: '#ffffff', }]} >
                    <Text style={{ color: '#ab47bc', fontWeight: 'bold' }}>Sign In</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => { navigation.navigate("Tabs") }}
                    style={[styles.button, { backgroundColor: '#00c652', }]} >
                    <Text style={{ color: '#ffffff', fontWeight: 'bold' }} >Sign Up</Text>
                </TouchableOpacity>
            </View>
        )
    }


    return (
        <ImageBackground
            source={images.bgImg}

            style={{ flex: 1, width: '100%', height: '100%' }}
        >
            {renderHeader()}
            {renderCard()}
            {renderButton()}
        </ImageBackground>
    )
}

export default SignUpScreen

const styles = StyleSheet.create({


    card: {

        height: 470,
        width: 320,
        borderTopRightRadius: 20,
        borderRadius: 20,
        backgroundColor: '#F7F7F7',
        marginTop: -150,


        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.47,
        shadowRadius: 12,

        elevation: 2,
    },
    inputContainer: {

        justifyContent: 'center',
        alignItems: 'center',
        padding: SIZES.padding,
        marginTop:20,


    },
    textInput: {
        width: '80%',
        marginTop: Platform.OS === 'ios' ? 0 : 12,
        padding: SIZES.padding,

        marginTop: 1,
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',

        width: 150,
        height: 60,
        borderRadius: 10,
        marginLeft: 10,
        marginTop: -150
    }
})



