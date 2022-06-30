/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Dimensions, SafeAreaView, ImageBackground, Image, StatusBar, Animated } from 'react-native';
import React, { Component } from 'react'
import { useState, useEffect, useRef } from 'react';


const widthWindow = Dimensions.get('window').width;
const heightWindow = Dimensions.get('window').height;

function Splashscreen({navigation}) {
    // set Time
    const timeToLogo1 = 3000;
    const timeToLogo2 = 1500;
    const timeToImagePath = 1000

    const LeftMotion = useRef(new Animated.Value(-1100)).current;
    const TopMotion = useRef(new Animated.Value(0.2* heightWindow)).current;
    const SizeMotionLogo = useRef(new Animated.Value(100)).current;
    const FontWeight = useRef(new Animated.Value(100)).current;
    // Image setup animation
    // part 1 Top-Left
    const Path1Top =  useRef(new Animated.Value(-350)).current;
    const Path1Left =  useRef(new Animated.Value(-350)).current;
    // part 2 Bottpm-right
    const Path2Bottom =  useRef(new Animated.Value(-500)).current;
    const Path2Right =  useRef(new Animated.Value(-500)).current;
    // part 3 Bottom-right
    const Path3Bottom =  useRef(new Animated.Value(-500)).current;
    const Path3Right =  useRef(new Animated.Value(-100)).current;
    // part 4 Bottom-right
    const Path4Bottom =  useRef(new Animated.Value(-300)).current;
    const Path4Right =  useRef(new Animated.Value(-250)).current;
    // part 5 Bottom-right
    const Path5Bottom =  useRef(new Animated.Value(-150)).current;
    const Path5Left =  useRef(new Animated.Value(-250)).current;

    useEffect(() => {
        Animated.sequence([
            // Image animation
            Animated.parallel([
                Animated.timing(
                    Path1Top,
                    {
                        toValue: -150,
                        duration: timeToImagePath,
                        useNativeDriver: false,
                    }),

                Animated.timing(
                    Path1Left,
                    {
                        toValue: -200,
                        duration: timeToImagePath,
                        useNativeDriver: false,
                    }),
                Animated.timing(
                    Path2Bottom,
                    {
                        toValue: -200,
                        duration: timeToImagePath,
                        useNativeDriver: false,
                    }),

                Animated.timing(
                    Path2Right,
                    {
                        toValue: -100,
                        duration: timeToImagePath,
                        useNativeDriver: false,
                    }),

                Animated.timing(
                    Path3Bottom,
                    {
                        toValue: -400,
                        duration: timeToImagePath,
                        useNativeDriver: false,
                    }),

                Animated.timing(
                    Path3Right,
                    {
                        toValue: -100,
                        duration: timeToImagePath,
                        useNativeDriver: false,
                    }),

                Animated.timing(
                    Path4Bottom,
                    {
                        toValue: -100,
                        duration: timeToImagePath,
                        useNativeDriver: false,
                    }),

                Animated.timing(
                    Path4Right,
                    {
                        toValue: -250,
                        duration: timeToImagePath,
                        useNativeDriver: false,
                    }),

                Animated.timing(
                    Path5Bottom,
                    {
                        toValue: -150,
                        duration: timeToImagePath,
                        useNativeDriver: false,
                    }),

                Animated.timing(
                    Path5Left,
                    {
                        toValue: -50,
                        duration: timeToImagePath,
                        useNativeDriver: false,
                    }),
                    
            ]),
            Animated.parallel([
                Animated.timing(
                    LeftMotion,
                    {
                        toValue: 200,
                        duration: timeToLogo1,
                        useNativeDriver: false,
                    }),

                    Animated.timing(
                        SizeMotionLogo,
                        {
                            toValue: 150,
                            duration: timeToLogo1,
                            useNativeDriver: false,
                        }),
                    
            ]),
            
            Animated.parallel([
                
                Animated.timing(
                    Path1Top,
                    {
                        toValue: -130,
                        duration: timeToImagePath,
                        useNativeDriver: false,
                    }),

                Animated.timing(
                    Path1Left,
                    {
                        toValue: -170,
                        duration: timeToImagePath,
                        useNativeDriver: false,
                    }),
                Animated.timing(
                    Path2Bottom,
                    {
                        toValue: -200,
                        duration: timeToImagePath,
                        useNativeDriver: false,
                    }),

                Animated.timing(
                    Path2Right,
                    {
                        toValue: -100,
                        duration: timeToImagePath,
                        useNativeDriver: false,
                    }),

                Animated.timing(
                    Path3Bottom,
                    {
                        toValue: -350,
                        duration: timeToImagePath,
                        useNativeDriver: false,
                    }),

                Animated.timing(
                    Path3Right,
                    {
                        toValue: -100,
                        duration: timeToImagePath,
                        useNativeDriver: false,
                    }),

                Animated.timing(
                    Path4Bottom,
                    {
                        toValue: -50,
                        duration: timeToImagePath,
                        useNativeDriver: false,
                    }),

                Animated.timing(
                    Path4Right,
                    {
                        toValue: -250,
                        duration: timeToImagePath,
                        useNativeDriver: false,
                    }),

                Animated.timing(
                    Path5Bottom,
                    {
                        toValue: -150,
                        duration: timeToImagePath,
                        useNativeDriver: false,
                    }),

                Animated.timing(
                    Path5Left,
                    {
                        toValue: 0,
                        duration: timeToImagePath,
                        useNativeDriver: false,
                    }),
                Animated.timing(
                    FontWeight,
                    {
                        toValue: 30,
                        duration: timeToLogo1,
                        useNativeDriver: false,
                    }),
                Animated.timing(
                    LeftMotion,
                    {
                        toValue: 50,
                        duration: timeToLogo1,
                        useNativeDriver: false,
                    }),
                    
                Animated.timing(
                    
                    SizeMotionLogo,
                    {
                        toValue: 120,
                        duration: timeToLogo1,
                        useNativeDriver: false,
                    }),
            ]),

            Animated.parallel([
               
                Animated.timing(
                    TopMotion,
                    {
                        toValue: -500,
                        duration: timeToLogo2,
                        useNativeDriver: false,
                    }),
                Animated.timing(
                    Path1Top,
                    {
                        toValue: -350,
                        duration: timeToImagePath,
                        useNativeDriver: false,
                    }),

                Animated.timing(
                    Path1Left,
                    {
                        toValue: -350,
                        duration: timeToImagePath,
                        useNativeDriver: false,
                    }),
                Animated.timing(
                    Path2Bottom,
                    {
                        toValue: -500,
                        duration: timeToImagePath,
                        useNativeDriver: false,
                    }),

                Animated.timing(
                    Path2Right,
                    {
                        toValue: -500,
                        duration: timeToImagePath,
                        useNativeDriver: false,
                    }),

                Animated.timing(
                    Path3Bottom,
                    {
                        toValue: -500,
                        duration: timeToImagePath,
                        useNativeDriver: false,
                    }),

                Animated.timing(
                    Path3Right,
                    {
                        toValue: -100,
                        duration: timeToImagePath,
                        useNativeDriver: false,
                    }),

                Animated.timing(
                    Path4Bottom,
                    {
                        toValue: -300,
                        duration: timeToImagePath,
                        useNativeDriver: false,
                    }),

                Animated.timing(
                    Path4Right,
                    {
                        toValue: -250,
                        duration: timeToImagePath,
                        useNativeDriver: false,
                    }),

                Animated.timing(
                    Path5Bottom,
                    {
                        toValue: -150,
                        duration: timeToImagePath,
                        useNativeDriver: false,
                    }),

                Animated.timing(
                    Path5Left,
                    {
                        toValue: -250,
                        duration: timeToImagePath,
                        useNativeDriver: false,
                    }),
            ])

        ]).start();
        
    }, [LeftMotion,FontWeight, SizeMotionLogo, TopMotion, Path1Top, Path1Left, Path2Bottom, Path2Right,Path3Right, Path3Bottom, Path4Bottom,Path4Right, Path5Left, Path5Bottom])
 
    setTimeout(() => {
        navigation.navigate('InTroduce');
    }, 8000);
    
    return (
       <SafeAreaView style={{width:'100%', height:'100%'}}>
           
               <StatusBar
                hidden={true}
               />
               <View style={{width: widthWindow, height: heightWindow, position:'relative'}}>
                <Animated.Image style={{position:'absolute', bottom: Path2Bottom, right:Path2Right}} source={require('../../drawble/drawblev24/Path2.png')}/>
                <Animated.Image style={{position:'absolute', top:Path1Top, left:Path1Left}} source={require('../../drawble/drawblev24/Path1.png')}/>

                <Animated.Image style={{position:'absolute', bottom:Path4Bottom, right:Path4Right}} source={require('../../drawble/drawblev24/Path4.png')}/>

                <Animated.Image style={{position:'absolute', bottom:Path3Bottom, right:Path3Right, width:widthWindow*2}} source={require('../../drawble/drawblev24/Path3.png')}/>
                <Animated.Image style={{position:'absolute', bottom:Path5Bottom, left:Path5Left, width:"90%"}} source={require('../../drawble/drawblev24/Path5.png')}/>

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