/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Dimensions, SafeAreaView, ImageBackground, Image, StatusBar } from 'react-native';
import React, { Component } from 'react'

const widthWindow = Dimensions.get('window').width;
const heightWindow = Dimensions.get('window').height;

function SplashscreenLogin({navigation}) {
 
    setTimeout(() => {
        navigation.navigate('ControlTab');
    }, 2000);
    
    return (
       <ImageBackground style={{width:'100%', height:'100%'}} source={require('../../drawble/Image/background_orange.jpg')}>
           
               <StatusBar
                hidden={true}
               />
                <View style={{alignItems:'center', width: widthWindow, height: heightWindow, marginTop: 0.2* heightWindow }}>
                    <Image style={{  }} source={require('../../drawble/Image/logonofill.png')}/>
                    <Text style={{fontSize:35, fontWeight: 'bold', color: 'white', marginTop: 10}}>
                        CAO ĐẲNG VIỄN ĐÔNG
                    </Text>
                    <View style={{flexDirection:'row', width:'80%', marginTop:10, justifyContent:'center', alignItems:'center'}}>
                        <Text style={{fontSize:10, fontStyle:'italic', backgroundColor:'#FF261F', color:'white', padding: 5}}>
                            CÓ VIỆC LÀM ĐÚNG NGÀNH - GIÀNH ĐẠI HỌC TOP TRÊN
                        </Text>
                        <Text style={{fontSize:10, fontStyle:'italic', backgroundColor:'#FFF000', color:'black', padding: 5}}>
                            TPHCM
                        </Text>
                    </View>
                </View>
          
       </ImageBackground>
    );
}

export default SplashscreenLogin