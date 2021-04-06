import React from 'react'
import {
    ImageBackground,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    StatusBar
} from 'react-native'

import { COLORS, icons, images, SIZES } from '../../exports'

const LoginScreen = ({navigation}) => {

    function renderHeader() {
        return(
            <View style={{ height:130, justifyContent: 'flex-end', alignItems: 'flex-start',padding:SIZES.padding }} >
                <Text style={{ fontSize: 40, color:COLORS.white, fontWeight:'bold'}}> Sign In</Text>
            </View> 
        )
    }


    function renderCard() {
        return (

            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            
                <View style={styles.card}>
                    <View style={{ width: '100%', }}>
                        <Image
                            source={images.plate}
                            resizeMode="cover"
                            style={{ height: 170, width: '100%', borderTopLeftRadius: 20, borderTopRightRadius: 20 }}
                        />
                    </View>

                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: SIZES.h1, color:'#ab47bc' }}>Welcome Back</Text>
                        <Text style={{ color:'#ab47bc'}}>we love to see you again</Text>
                    </View>

                    <View style={styles.inputContainer}>
                        <View style={{ flexDirection: 'row', backgroundColor: "#ddd", borderRadius: 10, }}>
                            <Image
                                source={icons.profile}
                                resizeMode="contain"
                                style={{ width: 20, height: 20, marginTop: 15, marginLeft: 10,tintColor:'#ab47bc' }}
                            />
                            <TextInput
                                placeholder="enter your Username"
                                placeholderTextColor='#ab47bc'
                                style={[styles.textInput, { color: '#333', }]}
                                autoCapitalize="none"

                            />
                        </View>

                        <View style={{ flexDirection: 'row', backgroundColor: "#ddd", borderRadius: 10, marginTop: 15 }}>
                            <Image
                                source={icons.lock}
                                resizeMode="contain"
                                style={{ width: 20, height: 20, marginTop: 15, marginLeft: 10 , tintColor:'#ab47bc'}}
                            />
                            <TextInput
                                placeholder="Enter the password"
                                placeholderTextColor='#ab47bc'
                                secureTextEntry={true}
                                style={[styles.textInput, { color: '#333', }]}
                                autoCapitalize="none"

                            />
                        </View>


                    </View>

                    <View style={{ justifyContent: "center", alignItems: 'center', marginTop: 10 }}>
                        <View style={{ justifyContent: "center", alignItems: 'center', backgroundColor: '#ab47bc', width: "40%", height: 45, borderRadius: 10 }}>
                            <Image
                                source={icons.arrow}
                                resizeMode="contain"
                                style={{ width: 30, height: 30, tintColor: COLORS.white }}
                            />
                        </View>
                        <Text style={{ fontSize: 13, padding: 10, color: '#ab47bc' }}>Forget your password</Text>
                    </View>
                </View>
            </View>


        )
    }


    function renderButton() {
        return (
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center',  width:'100%' ,}}>
                <TouchableOpacity style={[styles.button, {backgroundColor: '#ab47bc', }]} >
                    <Text style={{color:COLORS.white, fontWeight:'bold'}}>Sign In</Text>
                </TouchableOpacity>
                <TouchableOpacity
                 onPress={ () => {navigation.navigate("SignUp")}}
                 style={[styles.button, {backgroundColor: '#ffffff',}]} >
                    <Text style={{ color:'#00c853', fontWeight:'bold'}} >Sign Up</Text>
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

export default LoginScreen

const styles = StyleSheet.create({


    card: {

        height: 470,
        width: 320,
        borderTopRightRadius: 20,
        borderRadius: 20,
        backgroundColor: '#F7F7F7',
        marginTop:-150,


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
        marginLeft:10 ,
        marginTop:-150
    }
})



