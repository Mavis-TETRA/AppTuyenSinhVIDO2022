/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Dimensions, SafeAreaView, ImageBackground, Image, StatusBar, Animated } from 'react-native';
import React, { Component } from 'react';
import { useState, useEffect, useRef } from 'react';

const widthWindow = Dimensions.get('window').width;
const heightWindow = Dimensions.get('window').height;

function SplashscreenLogin({navigation}) {
 
    const LeftMotion = useRef(new Animated.Value(-1000)).current;
    const TopMotion = useRef(new Animated.Value(0.2* heightWindow)).current;
    const SizeMotionLogo = useRef(new Animated.Value(100)).current;
    const FontWeight = useRef(new Animated.Value(100)).current;

    useEffect(() => {
        Animated.sequence([
            Animated.parallel([
                Animated.timing(
                    LeftMotion,
                    {
                        toValue: 200,
                        duration: 1500,
                        useNativeDriver: false,
                    }),

                    Animated.timing(
                        SizeMotionLogo,
                        {
                            toValue: 150,
                            duration: 1500,
                            useNativeDriver: false,
                        }),
                    
            ]),
            
            Animated.parallel([
                Animated.timing(
                    FontWeight,
                    {
                        toValue: 30,
                        duration: 1500,
                        useNativeDriver: false,
                    }),
                Animated.timing(
                    LeftMotion,
                    {
                        toValue: 50,
                        duration: 1500,
                        useNativeDriver: false,
                    }),
                    
                    Animated.timing(
                        SizeMotionLogo,
                        {
                            toValue: 120,
                            duration: 1500,
                            useNativeDriver: false,
                        }),
            ]),

            Animated.parallel([
               
                Animated.timing(
                    TopMotion,
                    {
                        toValue: -500,
                        duration: 1000,
                        useNativeDriver: false,
                    }),
                    
                    
            ])

        ]).start();
        
    }, [LeftMotion,FontWeight, SizeMotionLogo, TopMotion])
    setTimeout(() => {
        navigation.navigate('ControlTab');
    }, 4000);
    
    return (
        <ImageBackground style={{width:'100%', height:'100%'}} source={require('../../drawble/Image/background_orange.jpg')}>
           
               <StatusBar
                hidden={true}
               />
                <Animated.View style={{width: widthWindow, height: heightWindow, marginTop: TopMotion }}>
                    <View style={{width:'100%', alignItems:'center'}}>
                        <Animated.Image style={{ width:SizeMotionLogo, height: SizeMotionLogo,  }} source={require('../../drawble/drawblev24/MaskGroup5.png')}/>
                    </View>
                    <Animated.View style={{marginLeft: LeftMotion, width:'500%'}}>
                        <Animated.Text style={{fontSize:FontWeight, fontWeight: 'bold', color: 'white', marginTop: 20}}>
                            CAO ĐẲNG VIỄN ĐÔNG
                        </Animated.Text>
                    </Animated.View>
                    {/* <View style={{flexDirection:'row', width:'80%', marginTop:10, justifyContent:'center', alignItems:'center'}}>
                        <Text style={{fontSize:10, fontStyle:'italic', backgroundColor:'#FF261F', color:'white', padding: 5}}>
                            CÓ VIỆC LÀM ĐÚNG NGÀNH - GIÀNH ĐẠI HỌC TOP TRÊN
                        </Text>
                        <Text style={{fontSize:10, fontStyle:'italic', backgroundColor:'#FFF000', color:'black', padding: 5}}>
                            TPHCM
                        </Text>
                    </View> */}
                </Animated.View>
       </ImageBackground>
    );
}

export default SplashscreenLogin