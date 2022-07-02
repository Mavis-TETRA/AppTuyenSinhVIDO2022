/* eslint-disable prettier/prettier */
import { Text,
  View,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Dimensions,
  Image,
  TextInput,
  ScrollView,
  Button,
  Platform
} from 'react-native'
import React, { Component } from 'react'
import { useState, useEffect, useRef } from 'react';
import Icon from "react-native-vector-icons/FontAwesome5";
import DateTimePicker from '@react-native-community/datetimepicker';
import {Picker} from '@react-native-picker/picker';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const widthWindow = Dimensions.get('window').width;
const heightWindow = Dimensions.get('window').height;



function ChangeImage({navigation}) {


    return (
      <SafeAreaView>
        <StatusBar
          hidden={false}
        />
        <View style={{width: widthWindow, height: '100%', position:'relative'}}>
          <Image style={{position:'absolute', top:-500, left:-400}} source={require('../../drawble/drawblev24/Group32.png')}/>
          <View style={{ height:'13%', flexDirection:'row'}}>
            <TouchableOpacity
            onPress={
              () => {
                navigation.goBack();
              }
            }
              style={{flexDirection:'row', alignItems:'center', margin:20}}
            >
              <Icon name="chevron-left" size={20} color="#000000"/>
            </TouchableOpacity>
            <View style={{flexDirection:'row', justifyContent:'center', width:'70%', alignItems:'center'}}>
              <Text style={{fontSize:20, fontWeight:'500',color:'#000000'}}>
                  Chỉnh sửa hình ảnh
              </Text>
            </View>
          </View>
          <View style={{}}>
            <View style={{flexDirection:'row', justifyContent:'center'}}>
              <Image style={{width: 300, height:300, borderRadius:150}} source={require('../../drawble/Image/bg4.jpg')}/>
            </View>
            <View style={{marginTop:30 }}>
              <TouchableOpacity 
                onPress={()=>{
                  
                }}
                style={{flexDirection:'row', width:'90%', height:'auto', backgroundColor:'white', margin: 20, marginTop:10, marginBottom:10, borderRadius: 20, padding:15, alignItems:'center',
                  shadowColor: "#000",
                  shadowOffset: {
                    width: 0,
                    height: 5,
                  },
                  shadowOpacity: 0.34,
                  shadowRadius: 6.27,
                  
                  elevation: 10,
                
                }}>
                    <Icon name="image" size={30} color="#555555"/>
                    <View style={{flexDirection:'row', justifyContent:'center', width:'80%'}}>
                      <Text style={{color:'black', fontSize: 20, fontWeight:'500', marginStart: 20}}>
                        Chọn ảnh đại diện
                      </Text>
                    </View>
                    
                </TouchableOpacity>

                <TouchableOpacity 
                onPress={()=>{
                  
                }}
                style={{flexDirection:'row', width:'90%', height:'auto', backgroundColor:'white', margin: 20, marginTop:10, marginBottom:10, borderRadius: 20, padding:15, alignItems:'center',
                  shadowColor: "#000",
                  shadowOffset: {
                    width: 0,
                    height: 5,
                  },
                  shadowOpacity: 0.34,
                  shadowRadius: 6.27,
                  
                  elevation: 10,
                
                }}>
                    <Icon name="camera" size={30} color="#555555"/>
                    <View style={{flexDirection:'row', justifyContent:'center', width:'80%'}}>
                      <Text style={{color:'black', fontSize: 20, fontWeight:'500', marginStart: 20}}>
                        Chụp ảnh đại diện
                      </Text>
                    </View>
                    
                </TouchableOpacity>
                <View style={{width:'100%', height: 100, marginBottom: 60, flexDirection:'row', justifyContent:'center', marginTop:60}}>
                <TouchableOpacity
                  // onPress={
                   
                  // }
                 style={{width:'90%', height:'60%', backgroundColor:'#FF8306', alignItems:'center', padding:20, borderRadius:10}}>
                  <Text style={{color:'white', fontSize:15, fontWeight:'bold'}}>
                    Xác Nhận
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
    )
}

export default ChangeImage