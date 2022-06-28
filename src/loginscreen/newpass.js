/* eslint-disable prettier/prettier */
import {
    View,
    TouchableOpacity,
    Dimensions,
    SafeAreaView,
    Image,
    ScrollView,
    Text,
    Animated,
    StatusBar
  } 
    from 'react-native';
  import React, { Component } from 'react'
  
  const widthWindow = Dimensions.get('window').width;
  const heightWindow = Dimensions.get('window').height;
  
  function NewPass({navigation}) {
    return(
      <SafeAreaView>
        <StatusBar
          hidden={true}
        />
        <View>
          <Text>
            halo
          </Text>
        </View>
      </SafeAreaView>
    )
  }
  
  // const style = StyleSheet.create({
  //     dotActive:{
  //         margin:3,
  //         color:'black'
  //     },
  //     dot:{
  //         margin:3,
  //         color:'white'
  //     }
  // });
  
  export default NewPass
  
  