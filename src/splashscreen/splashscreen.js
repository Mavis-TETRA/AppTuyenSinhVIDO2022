/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Dimensions, SafeAreaView, ImageBackground, Image, StatusBar, Animated } from 'react-native';
import React, { Component } from 'react'
import { useState, useEffect, useRef } from 'react';


const widthWindow = Dimensions.get('window').width;
const heightWindow = Dimensions.get('window').height;

function Splashscreen({navigation}) {
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
                        duration: 3000,
                        useNativeDriver: false,
                    }),

                    Animated.timing(
                        SizeMotionLogo,
                        {
                            toValue: 150,
                            duration: 3000,
                            useNativeDriver: false,
                        }),
                    
            ]),
            
            Animated.parallel([
                Animated.timing(
                    FontWeight,
                    {
                        toValue: 30,
                        duration: 3000,
                        useNativeDriver: false,
                    }),
                Animated.timing(
                    LeftMotion,
                    {
                        toValue: 50,
                        duration: 3000,
                        useNativeDriver: false,
                    }),
                    
                    Animated.timing(
                        SizeMotionLogo,
                        {
                            toValue: 120,
                            duration: 3000,
                            useNativeDriver: false,
                        }),
            ]),

            Animated.parallel([
               
                Animated.timing(
                    TopMotion,
                    {
                        toValue: -500,
                        duration: 1500,
                        useNativeDriver: false,
                    }),
                    
                    
            ])

        ]).start();
        
    }, [LeftMotion,FontWeight, SizeMotionLogo, TopMotion])
 
    setTimeout(() => {
        navigation.navigate('InTroduce');
    }, 8000);
    
    return (
       <SafeAreaView style={{width:'100%', height:'100%'}}>
           
               <StatusBar
                hidden={true}
               />
               <View style={{width: widthWindow, height: heightWindow, position:'relative'}}>
                <Image style={{position:'absolute', top:-300, left:-300}} source={require('../../drawble/drawblev24/Path1.png')}/>
                <Image style={{position:'absolute', bottom: -200, right:-100}} source={require('../../drawble/drawblev24/Path2.png')}/>
                <Image style={{position:'absolute', bottom:-100, right:-250}} source={require('../../drawble/drawblev24/Path4.png')}/>

                <Image style={{position:'absolute', bottom:-400, right:-100, width:widthWindow*2}} source={require('../../drawble/drawblev24/Path3.png')}/>

                <Animated.View style={{width: widthWindow, height: heightWindow, marginTop: TopMotion }}>
                            <View style={{width:'100%', alignItems:'center'}}>
                                <Animated.Image style={{ width:SizeMotionLogo, height: SizeMotionLogo,  }} source={require('../../drawble/drawblev24/MaskGroup1.png')}/>
                            </View>
                            <Animated.View style={{marginLeft: LeftMotion, width:'500%'}}>
                                <Animated.Text style={{fontSize:FontWeight, fontWeight: 'bold', color: 'white', marginTop: 20}}>
                                    CAO ĐẲNG VIỄN ĐÔNG
                                </Animated.Text>
                            </Animated.View>
                        
                    </Animated.View>
               </View>
               
                
       </SafeAreaView>
    );
}

export default Splashscreen