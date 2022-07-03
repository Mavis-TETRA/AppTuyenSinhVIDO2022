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
    StatusBar,
    RefreshControl
} 
    from 'react-native';
import React, { Component } from 'react';
import { useState, useEffect, useRef } from 'react';
import { Easing } from 'react-native-reanimated';


const widthWindow = Dimensions.get('window').width;
const heightWindow = Dimensions.get('window').height;

const images = [
    {
        type: "Background1",
        image: require("../../drawble/drawblev24/humaaans-standing.png")
      },
      {
        type: "Background2",
        image: require("../../drawble/drawblev24/Group-28.png")
      },
      {
        type: "Background3",
        image: require("../../drawble/drawblev24/Group-41.png")
      },
      {
        type: "Background4",
        image: require("../../drawble/drawblev24/Group-42.png")
      }
]

const content = [
    {
        type: "Backgroundcontent",
        statuscontent: 'Thông minh và tiện lợi'
      },
      {
        type: "Backgroundcontent",
        statuscontent: 'Đăng kí xét duyệt'
      },
      {
        type: "Backgroundcontent",
        statuscontent: 'An toàn bảo đảm'
      },
      {
        type: "Backgroundcontent",
        statuscontent:'Xác thực chính xác'
      }

]


function InTroduce({navigation}) {
    const [imageActive, setImageActive] = useState(0);
     // code animation 
     const topMotion = useRef(new Animated.Value(-50)).current;
     const leftMotion = useRef(new Animated.Value(0)).current;
     const rightMotion = useRef(new Animated.Value(0)).current;
     useEffect(() => {
         
            Animated.parallel([
                Animated.timing(
                    topMotion, 
                    {
                        toValue:0,
                        duration: 3000,
                        useNativeDriver:false,
                    }),
    
                    Animated.timing(
                        leftMotion, 
                        {
                            toValue:50,
                            duration: 2000,
                            useNativeDriver:false,
                            
                        }
                    ),
                    Animated.timing(
                        rightMotion, 
                        {
                            toValue:50,
                            duration: 2000,
                            useNativeDriver:false,
                        }
                    )
             ])
         .start();
     }, [topMotion, leftMotion, rightMotion]);
    onchange = (nativeEvent) => {
        if (nativeEvent) {
            const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
            if (slide != imageActive) {
                setImageActive(slide);
            }
        }
    }

    return (
        <SafeAreaView style={{backgroundColor: 'white'}}>
             <StatusBar hidden={true} /> 
            <View style={{width:'100%', height:'100%'}}>
                <View style={{position:'absolute', top:0, left: 100}}>
                    {/* <Animated.View style={{marginTop: topMotion, backgroundColor:'#FFE8BA', flexDirection:'row', justifyContent:'center', width:100, height: 100, borderRadius:100}}>       
                    </Animated.View> */}
                    <Animated.Image source={require('../../drawble/drawblev24/light.png')} style={{marginTop: topMotion, width:200, height: 200}}>

                    </Animated.Image>
                </View>
                <View style={{position:'absolute', top:150, left: 0}}>
                    <Animated.View style={{marginLeft: leftMotion, backgroundColor:'#DBF0FF', flexDirection:'row', justifyContent:'center', width:80, height: 80, borderRadius:100}}>       
                    </Animated.View>
                </View> 
                <View style={{position:'absolute', top:150, right: 0}}>
                    <Animated.View style={{marginRight: rightMotion, backgroundColor:'#DBF0FF', flexDirection:'row', justifyContent:'center', width:50, height: 50, borderRadius:100}}>       
                    </Animated.View>
                </View>   
                <View style={{width:'100%', height: '80%',}}>
                    <ScrollView
                        onScroll={({nativeEvent}) => onchange(nativeEvent)}
                        showsHorizontalScrollIndicator={false}
                        pagingEnabled
                        horizontal
                        style={{width: widthWindow, height: '100%'}}
                        
                    >
                        {
                                images.map((e, index) => 
                                <View style={index == 0 ?{width: widthWindow, height: '100%', alignItems:'center'}:{width: widthWindow, height: '100%', alignItems:'center', backgroundColor:'white'}}>
                                    <Image
                                    option={e}
                                    resizeMode='stretch'
                                    style={index == 0 ?{width: '30%', height:'40%', marginTop:'30%'}: {width: '80%', height:'50%', marginTop:'15%'}}
                                    source={images[index].image}
                                    />
                                </View>
                                
                            ) 
                           
                            
                        }
                       
                    </ScrollView>
                    <View style={{position:'absolute', bottom: '30%', flexDirection:'row', alignSelf: 'center'}}>
                        {
                            images.map((e, index) => 
                                <Text 
                                    option={e}
                                    style ={imageActive == index ? { margin:3,
                                        color:'#FF8306', height:20}: { margin:3,
                                            color:'#DBDBDB', height:20}}
                                >
                                   ⬤
                                </Text>
                            )
                        }
                    </View>

                    <View style={{position:'absolute', bottom: '24%', flexDirection:'row', alignSelf: 'center'}}>
                        <Text style={{color: '#05850A', fontSize:25, fontWeight:'bold'}}>
                            {
                                content[imageActive].statuscontent
                            }
                        </Text>
                    </View>

                    <View style={{position:'absolute', bottom: '20%', flexDirection:'row', alignSelf: 'center'}}>
                        <Text>
                            Nhanh Chóng - Hiệu Quả
                        </Text>
                    </View>
                    
                </View>
                <View style={{width:'100%', height:'20%', flexDirection:'column', justifyContent:'center', alignItems:'center', position:'relative'}}>
                    <Image style={{position:'absolute', top:-300, left:-300}} source={require('../../drawble/drawblev24/Group33.png')}/>
                    <TouchableOpacity style={{width: widthWindow* 0.9, height: heightWindow*0.07,borderRadius: 10, backgroundColor:'#FF8306'}}
                        onPress = {
                            () => {
                                navigation.navigate('Register');
                                // navigation.navigate('ComFirmID', {
                                //   email: getEmail
                                // });
                              }
                        }
                    >
                        <View>
                            <Text style={{textAlign:'center', padding:10 , fontWeight: '500', fontSize: 20, color:'white'}}>
                               ĐĂNG KÍ NGAY
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <View style={{flexDirection:'row', marginTop: 20}}>
                        <Text style={{color:'black', fontWeight:'500'}}>
                            Bạn đã có tài khoản? 
                        </Text>
                        <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('Login');
                            // navigation.navigate('ComFirmID', {
                            //   email: getEmail
                            // });
                          }}>
                            <Text style={{color:'#FF8306', fontWeight:'500', marginLeft:5}}>
                                Đăng Nhập
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                

            </View>
        </SafeAreaView>  
    );
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

{/* <View>
                        <Animated.View style={{marginTop: topMotion, backgroundColor:'#FFE8BA', flexDirection:'row', justifyContent:'center', width:150, height: 150, borderRadius:50}}>
                            
                        </Animated.View>
                    </View> */}

export default InTroduce