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
  TextInput,
  StatusBar
} 
  from 'react-native';
import React, { Component } from 'react'
import { useState, useEffect, useRef } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons'
import SQLite from 'react-native-sqlite-storage';

const widthWindow = Dimensions.get('window').width;
const heightWindow = Dimensions.get('window').height;



function Inforactivity({navigation}) {

    return (
      <SafeAreaView>
        <StatusBar
          hidden = {false}
        />
        <ScrollView style={{width: widthWindow, height: heightWindow, backgroundColor:'white', position:'relative'}}>
        <Image style={{position:'absolute', top:-500, left:-400}} source={require('../../drawble/drawblev24/Group32.png')}/>
          <View style={{flexDirection:'row', width:'100%', height:50, alignItems:'center', justifyContent:'space-between', marginTop: 30, paddingStart:30, paddingEnd: 30, marginBottom: 20}}>
           <View style={{flexDirection:'row'}}>
              <Image style={{width:50, height:50, borderRadius: 30}} source={require('../../drawble/Image/bg4.jpg')}/>
              <View style={{marginLeft: 10}}>
                <Text style={{fontSize: 13}}>Chào bạn !</Text>
                <Text style={{fontSize: 20, fontWeight:'bold', color: 'black'}}>Trần Minh Tân</Text>
              </View>
            </View>
            <View>
              <TouchableOpacity
                style = {{width:40, height:40, backgroundColor:'white', shadowColor: "#000",
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,

                elevation: 5, borderRadius:10, flexDirection: 'row', alignItems:'center', justifyContent:'center'}}
                onPress={() => {
                  navigation.navigate('Notificationactivity')
                }}
              >
              {/* <Image style={{width: 50, height:50}} source={require('../../drawble/drawblev24/Group-123.png')}/> */}
                    <Icon name="notifications" size={24} color="#B7B7B7"/>
                  </TouchableOpacity>
                </View>
            </View>
            {/* card profile */}
            <View style={{width:'100%', height: 0.25*heightWindow, alignItems: 'center', marginTop:20}}>
                <Text style={{fontSize:18, fontWeight:'bold', color:'black', marginBottom: 20}}>
                  THÔNG TIN CÁ NHÂN
                </Text>
                <View style={{width: widthWindow, height: '100%', alignItems:'center'}}>
                          
                          <View style={{width:'90%', height:'90%', borderRadius: 20, borderColor:'black', borderWidth:0.5, paddingTop:10, paddingStart: 20, paddingEnd:20, paddingBottom:10}}>
                              <View style={{flexDirection: 'row', justifyContent:'space-between' , marginBottom:5}}>
                                <Text style={{fontSize:15, color:'black'}}>
                                  Họ Và Tên 
                                </Text>
                                <Text style={{color:'green'}}>
                                  Trần Minh Tân
                                </Text>
                              </View>
                              <View style={{flexDirection: 'row', justifyContent:'space-between' , marginBottom:5}}>
                                <Text style={{fontSize:15, color:'black'}}>
                                  Số
                                </Text>
                                <Text style={{color:'black'}}>
                                074202000079
                                </Text>
                              </View>
                              <View style={{flexDirection: 'row', justifyContent:'space-between' , marginBottom:5}}>
                                <Text style={{fontSize:15, color:'black'}}>
                                  Ngày Sinh
                                </Text>

                                <Text style={{color:'black'}}>
                                07/09/2002
                                </Text>
                              </View>
                              <View style={{flexDirection: 'row', justifyContent:'space-between' , marginBottom:5}}>
                                <Text style={{fontSize:15, color:'black'}}>
                                  Giới Tính
                                </Text>

                                <Text style={{color:'black'}}>
                                Nam
                                </Text>
                              </View>
                              <View style={{flexDirection: 'row', justifyContent:'space-between' , marginBottom:5}}>
                                <Text style={{fontSize:15, color:'black'}}>
                                  Số Điện Thoại
                                </Text>

                                <Text style={{color:'black'}}>
                                0398802442
                                </Text>
                              </View>
                           

                              <View style={{flexDirection: 'row', justifyContent:'flex-end', marginEnd:0 }}>
                                
                                <TouchableOpacity>
                                  <Icon name="visibility" size={24} color="#FF8306"/>
                                </TouchableOpacity>
                                
                              </View> 
                          </View>
                      </View>
            </View>
            <View style={{width:'100%', height:'auto', marginTop: 35, alignItems:'center'}}>
                <Text style={{fontSize:18, fontWeight:'bold', color:'black', marginBottom: 20}}>
                  CÀI ĐẶT
                </Text>
                <View
                style={{width:'100%',height:'auto', marginBottom:80}}>
                  
                  <View style = {{width:'90%', height:'auto',backgroundColor:'#F8F8F8',margin:20, padding:10, borderRadius:10}}>
                    <Text style ={{fontWeight:'bold', color:'black', fontSize:15, textAlign:'center'}}>
                          Tài Khoản
                        </Text>
                    <TouchableOpacity
                      onPress={
                        () => {
                          navigation.navigate('MyAccount');
                        }
                      }
                      style={{width:'100%', height:100,flexDirection:'row', backgroundColor:'white', justifyContent:'center', marginBottom:20, padding:10}}>
                      </TouchableOpacity>
                      <Text style ={{fontWeight:'bold', color:'black', fontSize:15, textAlign:'center'}}>
                          Hồ Sơ
                        </Text>
                      <TouchableOpacity
                      onPress={
                        () => {
                          navigation.navigate('Recordkeeping');
                        }
                      }
                      style={{width:'100%', height:100,flexDirection:'row', backgroundColor:'white', justifyContent:'center', marginBottom:20, padding:10}}>
                        
                        
                      </TouchableOpacity>
                  </View>
                  <View style = {{ width:'90%', height:'auto',backgroundColor:'#F8F8F8',margin:20, padding:10, borderRadius:10}}>

                      <TouchableOpacity
                      onPress={
                        () => {
                          navigation.navigate('Login');
                        }
                      }
                      style={{width:'100%', height:'auto',flexDirection:'row', backgroundColor:'white', justifyContent:'center', marginBottom:20, padding:10}}>
                        <Icon name="published-with-changes" size={24} color="black" style={{marginEnd:10, }}/>
                        <Text style ={{fontWeight:'bold', color:'black', fontSize:15}}>
                          Thay đổi tài khoản
                        </Text>
                      </TouchableOpacity>

                      <TouchableOpacity
                      onPress={
                        () => {
                          navigation.navigate('Login');
                        }
                      }
                      style={{width:'100%', height:'auto',flexDirection:'row', backgroundColor:'white', justifyContent:'center', marginBottom:20, padding:10}}>
                        <Icon name="exit-to-app" size={24} color="black" style={{marginEnd:10, }}/>
                        <Text style ={{fontWeight:'bold', color:'black', fontSize:15}}>
                          Đăng xuất
                        </Text>
                      </TouchableOpacity>
                    
                  </View>
                </View>
            </View>
        </ScrollView>
      </SafeAreaView>
    )
}

export default Inforactivity