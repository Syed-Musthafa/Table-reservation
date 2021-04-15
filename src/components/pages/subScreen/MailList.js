


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

const MailList = ({navigation}) => {

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
              <View style={{  marginTop: 30 }}>
                <Text style={{ color: '#ffffff', fontSize: 45, fontWeight: 'bold' }}>MailList</Text>
                <Text style={{ color: '#ffffff', fontSize: 20, fontWeight: 'bold' }}>Let Invite Your Friends</Text>
              </View>
            </View>
          </View>
        )
      }

      function renderModule() {
        const renderItem = ({ item, index }) => {
            return(
                <View style={{ width:'100%', justifyContent:'center', alignItems:'center',  padding:5, marginTop:10}}>
                   <View style={{
                         width:"95%",
                         flexDirection:'row',
                         backgroundColor:'#fff',
                         padding:10, 
                         borderBottomWidth:1,
                         borderBottomColor:COLORS.gray1,
                         
                         }}>
                         <View style={{ width:'75%',flexDirection:'row',}}>
                        <Image
                        source={item.profile}
                        resizeMode="contain"
                        style={{width:60, height:60, borderRadius:20}}
                         />
                         <View style={{ padding:10, marginLeft:5}}>
                         <Text style={{fontSize:18}}>{item.name}</Text>
                         <Text style={{fontSize:12, color:COLORS.gray}}>Frinds Group</Text>
                         </View>
                         </View>
                         <TouchableOpacity 
                         onPress={() => {navigation.navigate("inviteMail")}}
                         style={{flex:1, borderWidth:1, borderColor:COLORS.primary, justifyContent:'center', alignItems:'center', height:40, borderRadius:10}}>
                         <View style={{ justifyContent:'center', alignItems:'flex-end'}} >
                             <Text style={{color:COLORS.primary}}>Invite</Text>
                         </View>
                         </TouchableOpacity>
                   </View>
                </View>
            )
        }

          return(
            <SafeAreaView>
            
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

                <FlatList
                    data={reviews}
                    keyExtractor={item => `${item.id}`}
                    horizontal={false}
                    
                    // contentContainerStyle= {{ }}
                    renderItem={renderItem}
                />
                
            </SafeAreaView>
    

          )
      }



    return (
        <View style={styles.container}>
      <View style={{ flex: 1, backgroundColor: COLORS.primary, borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }}>
        {renderHeader()}
      </View>
      <View style={{ flex: 2, marginTop: -70, }}>

        {renderModule()}

      </View>

    </View>
    )
}

export default MailList

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

