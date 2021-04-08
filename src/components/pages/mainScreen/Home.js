import React from 'react'
import {
    ImageBackground,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    ScrollView,
    TouchableOpacity,
    SafeAreaView,
    FlatList,
    Modal
} from 'react-native'

import { COLORS, FONTS, SIZES, icons, images, data } from '../../exports'

import Animated from 'react-native-reanimated';




const Home = ({ navigation, style }) => {

    const categoryData = [
        {
            id: 1,
            name: "All",

        },
        {
            id: 2,
            name: "Popular",

        },
        {
            id: 3,
            name: "Near by",

        },
        {
            id: 4,
            name: "Recents",

        },
        {
            id: 5,
            name: "Main",

        },


    ]


    const [defaultRading, setDefaultRading] = React.useState(2)
    const [maxRading, setMaxRading] = React.useState([1, 2, 3, 4, 5])

    const [model, setModel] = React.useState(false)

    function renderHeader() {
        return (
            <View style={{ padding: SIZES.padding2, marginTop: 50 }}>
                <Animated.View
                    style={[{ flexDirection: 'row', justifyContent: 'space-between', }, style]}>
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
                            source={icons.homebar}
                            resizeMode="contain"
                            style={{ width: 30, height: 30, tintColor: '#ffffff' }}

                        />
                    </TouchableOpacity>
                </Animated.View>
                <View style={{ width: '50%', marginTop: 20 }}>
                    <Text style={{ color: '#ffffff', fontSize: 45, fontWeight: 'bold' }}>Home</Text>
                    <Text style={{ color: '#ffffff', fontSize: 15, fontWeight: 'bold' }}>Where would you like to reserve your table ?</Text>
                </View>
            </View>
        )
    }

    function renderRestaurant() {
        return (
            <View>
                <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                    backgroundColor: "#FFF",

                    borderRadius: 12,
                    marginHorizontal: 20,
                    marginTop: -20,
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
                <ScrollView horizontal
                    contentContainerStyle={{ padding: SIZES.padding, marginLeft: SIZES.padding, }}
                >
                    {categoryData.map((item, index) => {
                        return (
                            <TouchableOpacity
                                key={index}
                                style={{
                                    width: 80,
                                    height: 30,
                                    marginTop: 20,

                                    backgroundColor: COLORS.white,
                                    borderRadius: SIZES.radius,
                                    alignItems: "center",
                                    justifyContent: "center",
                                    marginRight: SIZES.padding,
                                    ...styles.shadow

                                }}

                            >
                                <View
                                    style={{

                                        borderRadius: 25,
                                        alignItems: "center",
                                        justifyContent: "center",
                                        backgroundColor: COLORS.white
                                    }}
                                >
                                    <Text
                                        style={{

                                            color: COLORS.black,
                                            ...FONTS.body5
                                        }}
                                    >
                                        {item.name}
                                    </Text>
                                </View>




                            </TouchableOpacity>

                        )
                    })}
                </ScrollView>
            </View>
        )
    }

    function renderCategoriesList() {


        const CustomRatingBar = () => {
            return (
                <View style={{ flexDirection: 'row' }} >
                    {maxRading.map((item, key) => {
                        return (
                            <TouchableOpacity
                                activeOpacity={0.7}
                                key={item}
                                onPress={() => setDefaultRading(item)}>
                                <Image
                                    source={item <= defaultRading ? icons.star : icons.Unstar}
                                    style={{ width: 10, height: 10, resizeMode: 'contain' }}
                                />
                            </TouchableOpacity>
                        )
                    })}
                </View>
            )
        }

        const renderItem = ({ item, index }) => {
            return (
                <View
                    style={{ padding: SIZES.padding, }}>
                    <TouchableOpacity 
                    onPress={()=> { navigation.navigate("HotelDetails" , { item })}}
                    style={{
                        backgroundColor: '#fff',
                        width: 160,
                        height: 170,
                        borderRadius: 10,
                        ...styles.shadow
                    }}>
                        <Image
                            source={item.photo}
                            resizeMode="stretch"
                            style={{ width: 160, height: 90, borderRadius: 10 }}
                        />
                        <View style={{ width: "100%", flexDirection: 'row' }}>
                            <View style={{ padding: 5, width: '50%' }}>
                                <Text style={{ fontSize: 15, fontWeight: 'bold' }}>{item.name}</Text>
                                <View style={{ flexDirection: 'row', padding: 1 }}>
                                    <Image
                                        source={icons.pin}
                                        resizeMode="contain"
                                        style={{ width: 10, height: 10, }}
                                    />
                                    <Text style={{ fontSize: 10, marginTop: -5, padding: 2 }}>{item.location}</Text>
                                </View>
                            </View>
                            <View style={{ padding: 5, width: '50%', }}>
                                <View style={{ flexDirection: 'row', marginTop: 10 }}>
                                    <CustomRatingBar />
                                    <Text style={{ fontSize: 10, marginLeft: 6, marginTop: -2 }}>{defaultRading + '/' + maxRading.length}</Text>
                                </View>
                                <View style={{ flexDirection: 'row', marginTop: 10 }}>
                                    <Image
                                        source={icons.bookmark}
                                        resizeMode="contain"
                                        style={{ width: 15, height: 15, marginTop: 2 }}
                                    />
                                    <TouchableOpacity
                                        onPress={() => { setModel(true) }}
                                        style={{ backgroundColor: '-', justifyContent: 'center', alignItems: 'center', borderRadius: 5, width: 55, height: 20 }}>
                                        <Text style={{ fontSize: 8, color: '#fff', marginLeft: 1 }}>Book the Table</Text>
                                        <Modal
                                            transparent={true}
                                            visible={model}
                                        >
                                            <View style={{ backgroundColor: "#3333331A", flex: 1, justifyContent: 'center' }}>
                                                <View style={{ backgroundColor: "#fff", margin: 20, padding: 40, borderRadius: 10, height: 300 }}>
                                                    <View style={{
                                                        position: 'absolute',
                                                        right: 0,
                                                        top: 0,
                                                        padding: 10,
                                                        marginTop: -25
                                                    }}>
                                                        <TouchableOpacity
                                                            onPress={() => { setModel(false) }}
                                                            style={{
                                                                backgroundColor: '#333333E6',
                                                                width: 35,
                                                                height: 35,
                                                                justifyContent: 'center',
                                                                alignItems: 'center',
                                                                borderRadius: 10
                                                            }}>
                                                            <Image
                                                                source={icons.close}
                                                                resizeMode="cover"
                                                                style={{ width: 17, height: 17, tintColor: '#fff' }}
                                                            />
                                                        </TouchableOpacity>
                                                    </View>
                                                </View>
                                            </View>

                                        </Modal>
                                    </TouchableOpacity>
                                </View>

                            </View>

                        </View>

                    </TouchableOpacity>
                   
                </View>
                

            )
        }


        return (
            <SafeAreaView style={{ flex:1}}>
                <FlatList
                    data={data}
                    keyExtractor={item => `${item.id}`}
                    horizontal={false}
                    numColumns={2}
                    // contentContainerStyle= {{ }}
                    renderItem={renderItem}
                />
                
            </SafeAreaView>
        )

    }

    return (
        <View style={styles.container}>
            <ImageBackground
                source={images.homepage}
                imageStyle={{ borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }}
                style={{ flex: 1.2, width: '100%' }}>
                {renderHeader()}
            </ImageBackground>
            <View style={{ flex: 2, backgroundColor: '#fff', width: '100%' }}>
                {renderRestaurant()}
                {renderCategoriesList()}
            </View>

        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        height: "100%",
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',


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
    }
})
