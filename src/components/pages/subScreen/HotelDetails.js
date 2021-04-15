import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    Animated,
    TouchableOpacity,
    Image,
    TextInput,
    ScrollView,
    FlatList,
    LogBox,
    SafeAreaView
} from 'react-native'

import MapView, { Marker } from 'react-native-maps';


import { COLORS, FONTS, SIZES, icons, images, data, reviews } from '../../exports'

const HotelDetails = ({ route, navigation }) => {



    const [restaurant, setRestaurant] = React.useState("");

    const [viewMode, setViewMode] = React.useState("overView")

    const [defaultRading, setDefaultRading] = React.useState(2)
    const [maxRading, setMaxRading] = React.useState([1, 2, 3, 4, 5])

    React.useEffect(() => {

        LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
        let { item } = route.params;

        setRestaurant(item)

    })

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
                                style={{ width: 25, height: 25, resizeMode: 'contain', }}
                            />
                        </TouchableOpacity>
                    )
                })}
            </View>
        )
    }



    function renderHeader() {




        return (
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
                            source={icons.bookmark_full}
                            resizeMode="contain"
                            style={{ width: 30, height: 30, tintColor: '#ffffff' }}

                        />
                    </TouchableOpacity>
                </Animated.View>

                <View style={{ flexDirection: 'row', width: '100%' }}>
                    <View style={{ width: '50%', marginTop: 20 }}>
                        <Text style={{ color: '#ffffff', fontSize: 35, fontWeight: 'bold' }}>{restaurant.name}</Text>

                        <View style={{ flexDirection: 'row', padding: 1 }}>
                            <Image
                                source={icons.pin}
                                resizeMode="contain"
                                style={{ width: 20, height: 20, tintColor: '#fff' }}
                            />
                            <Text style={{ fontSize: 15, marginTop: -5, padding: 2, color: '#ffffff', }}>{restaurant.location}</Text>
                        </View>
                    </View>
                    <View style={{ width: '50%', marginTop: 20, alignItems: 'flex-end' }}>
                        <CustomRatingBar />
                        <View style={{ justifyContent: 'flex-end', }}>
                            <Text style={{ fontSize: 20, marginLeft: 6, marginTop: -2, color: '#fff', }}>{defaultRading + '/' + maxRading.length}</Text>
                        </View>
                    </View>
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

                {/* scrolldetails */}

                <ScrollView horizontal
                    contentContainerStyle={{ padding: SIZES.padding, marginLeft: SIZES.padding, }}
                >
                    <TouchableOpacity
                        onPress={() => setViewMode("overView")}
                        style={{
                            width: 80,
                            height: 30,
                            marginTop: 20,

                            backgroundColor: viewMode == "overView" ? COLORS.primary : COLORS.white,
                            borderRadius: SIZES.radius,
                            alignItems: "center",
                            justifyContent: "center",
                            marginRight: SIZES.padding,
                            ...styles.shadow

                        }}>
                        <View style={{ borderRadius: 25, alignItems: "center", justifyContent: "center",  }} >
                            <Text style={{ color: viewMode == "overView" ? COLORS.white : COLORS.black, ...FONTS.body5 }}>overView</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity

                        onPress={() => setViewMode("galary")}
                        style={{
                            width: 80,
                            height: 30,
                            marginTop: 20,

                            backgroundColor: viewMode == "galary" ? COLORS.primary : COLORS.white,
                            borderRadius: SIZES.radius,
                            alignItems: "center",
                            justifyContent: "center",
                            marginRight: SIZES.padding,
                            ...styles.shadow

                        }}>
                        <View style={{ borderRadius: 25, alignItems: "center", justifyContent: "center", }} >
                            <Text style={{ color: viewMode == "galary" ? COLORS.white : COLORS.black, ...FONTS.body5 }}>galary</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => setViewMode("menu")}
                        style={{
                            width: 80,
                            height: 30,
                            marginTop: 20,

                            backgroundColor: viewMode == "menu" ? COLORS.primary : COLORS.white,
                            borderRadius: SIZES.radius,
                            alignItems: "center",
                            justifyContent: "center",
                            marginRight: SIZES.padding,
                            ...styles.shadow

                        }}>
                        <View style={{ borderRadius: 25, alignItems: "center", justifyContent: "center", }} >
                            <Text style={{ color: viewMode == "menu" ? COLORS.white : COLORS.black, ...FONTS.body5 }}>menu</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity

                        onPress={() => setViewMode("reservation")}
                        style={{
                            width: 80,
                            height: 30,
                            marginTop: 20,

                            backgroundColor: viewMode == "reservation" ? COLORS.primary : COLORS.white,
                            borderRadius: SIZES.radius,
                            alignItems: "center",
                            justifyContent: "center",
                            marginRight: SIZES.padding,
                            ...styles.shadow

                        }}>
                        <View style={{ borderRadius: 25, alignItems: "center", justifyContent: "center", }} >
                            <Text style={{ color: viewMode == "reservation" ? COLORS.white : COLORS.black, ...FONTS.body5 }}>reservation</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => setViewMode("reviews")}
                        style={{
                            width: 80,
                            height: 30,
                            marginTop: 20,

                            backgroundColor: viewMode == "reviews" ? COLORS.primary : COLORS.white,
                            borderRadius: SIZES.radius,
                            alignItems: "center",
                            justifyContent: "center",
                            marginRight: SIZES.padding,
                            ...styles.shadow

                        }}>
                        <View style={{ borderRadius: 25, alignItems: "center", justifyContent: "center", }} >
                            <Text style={{ color: viewMode == "reviews" ? COLORS.white : COLORS.black, ...FONTS.body5 }}>reviews</Text>
                        </View>
                    </TouchableOpacity>



                </ScrollView>


            </View>
        )
    }

    // overView
    function renderOverViewList() {
        return (
            <View>
                <View style={{ padding: 30, marginTop:-20}}>
                    <Text style={{ fontSize: 24, color: COLORS.primary }}>Overview</Text>
                    <Text style={{ marginTop: 10 }}>Restaurant companies are essentially retailers of prepared foods,
                    and their operating performance is influenced by many of the same factors that affect traditional retail stores.
                    </Text>
                    <Text style={{ marginTop: 10 }}>it is relatively easy to forgo prepared foods, altogether, in favor of home cooking, which is usually a less expensive option.
                    </Text>
                    <View style={{ height: 300 , marginTop:10}}>
                        <MapView style={{ height: 200, borderRadius:50,   }}
                            initialRegion={{
                                latitude: 37.78825,
                                longitude: -122.4324,
                                latitudeDelta: 0.0922,
                                longitudeDelta: 0.0421,
                            }}
                        ></MapView>
                    </View>
                </View>
            </View>
        )
    }

    // galary
    function renderGalaryList() {

        const renderItem = ({ item, index }) => {
            return (
                <View style={{ marginTop: 1, padding: SIZES.padding, }} >
                    <Image
                        source={item.photo}
                        resizeMode="cover"
                        style={{
                            width: 150,
                            height: 110,
                            borderRadius: 5
                        }}
                    />
                </View>
            )

        }
        return (
            <View >
                <View style={{ justifyContent: 'center', alignItems: 'center' }} >
                    <FlatList
                        data={data}
                        keyExtractor={item => `${item.id}`}
                        horizontal={false}
                        numColumns={2}

                        renderItem={renderItem}
                    />
                </View>
            </View>
        )
    }


    // menu

    function renderMenuList() {
        return (
            <View style={{ padding: 20 }}>
                <View style={{ padding: 10, marginTop: 10, }}>
                    <Image
                        source={icons.logout}
                        resizeMode="contain"
                        style={{ width: 25, height: 25, tintColor: "#6200ea" }}
                    />
                    <Text style={{ textDecorationLine: 'underline', color: COLORS.primary, marginTop: 10 }}>Please View this menu then book the table</Text>
                </View>
            </View>
        )
    }

    //reservation

    function renderReservation() {
        return (
            <View style={{ flex: 1, marginTop: 50, marginLeft: 50 }}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
                    <Image
                        source={images.reservation}
                        resizeMode="stretch"
                        style={{
                            width: 300,
                            height: 300

                        }}
                    />
                </View>
            </View>
        )
    }

    // Reviews

    function renderReviewsList() {

        const renderItem = ({ item, index }) => {
            return (
                <View style={{ justifyContent: 'center', alignItems: 'center', padding: 10 }}>
                    <View style={{
                        width: "95%",
                        //  height:100,
                        backgroundColor: '#fff',
                        padding: 10,
                        borderRadius: 10,
                        ...styles.shadow
                    }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Image
                                source={item.profile}
                                resizeMode="contain"
                                style={{ width: 50, height: 50, borderRadius: 25 }}
                            />
                            <View style={{ marginLeft: 10 }}>
                                <Text style={{ fontSize: 25 }}>{item.name}</Text>
                                <Text style={{ fontSize: 10 }}>{item.table}</Text>
                                <Text style={{ fontSize: 10 }}>{item.location}</Text>
                            </View>
                        </View>
                        <View style={{ padding: 10 }}>
                            <CustomRatingBar />

                        </View>
                        <Text style={{ padding: 10, fontSize: 13 }}>{item.reviews}</Text>
                    </View>
                </View>
            )
        }


        return (
            <SafeAreaView>
                <FlatList
                    data={reviews}
                    keyExtractor={item => `${item.id}`}
                    horizontal={false}
                    renderItem={renderItem}
                />
            </SafeAreaView>
        )
    }



    return (
        <View style={styles.container}>
            <ImageBackground
                source={restaurant.photo}
                imageStyle={{ borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }}
                style={{ flex: 1, width: '100%' }}>
                {renderHeader()}
            </ImageBackground>
            <View style={{ flex: 2, width: '100%' }}>
                {renderRestaurant()}
                <ScrollView

                    contentContainerStyle={{ paddingBottom: 40, }}>
                    {
                        viewMode == "overView" &&
                        <View >
                            {renderOverViewList()}

                        </View>
                    }
                    {
                        viewMode == "galary" &&
                        <View >
                            {renderGalaryList()}
                        </View>
                    }
                    {
                        viewMode == "menu" &&
                        <View >
                            {renderMenuList()}
                        </View>
                    }
                    {
                        viewMode == "reservation" &&
                        <View >
                            {renderReservation()}
                        </View>
                    }
                    {
                        viewMode == "reviews" &&
                        <View >
                            {renderReviewsList()}

                        </View>
                    }
                </ScrollView>

            </View>



        </View>
    )
}

export default HotelDetails

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
        elevation: 5

        ,
    }
})
