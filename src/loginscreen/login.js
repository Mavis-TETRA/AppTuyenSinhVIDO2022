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
import Icon from 'react-native-vector-icons/MaterialIcons'
import { useState, useEffect, useRef } from 'react';
import SQLite from 'react-native-sqlite-storage';


const widthWindow = Dimensions.get('window').width;
const heightWindow = Dimensions.get('window').height;

// const db = SQLite.openDatabase(
//   {
//     name: 'LoginDB',
//     location:'default',
//   },
//   () => { },
//   error => {console.log(error)}
// );

function Login({navigation}) {
  const [getEmail, setEmail] = useState('');
  const [checked, setchecked] = useState(false);
  // code set hide password
  const[getPasswordVisible, setPasswordVisible] = useState(false);
  //console.log("Get Email: ", getEmail);

  // useEffect(() => {
  //   createTable();
  // }, [])

  //  const createTable = () => {
  //   db.transaction((tx) => {
  //     tx.executeSql(
  //       "Create Table IF Not Exit"
  //       + "Users"
  //       +"(ID INTEGER PRIMARY KEY AUTOINCREMENT, Name TEXT, Pass TEXT);"
  //     )
  //   })
  // }

  return(
    <SafeAreaView style={{width:'100%', height:'100%', backgroundColor:'#FFFFFF'}}>
           <StatusBar hidden={true} /> 
                <View style={{width:'100%', height: '100%', flexDirection:'column'}}>
                <View style={{marginTop:0.2*widthWindow, width:'100%', height:'auto', alignItems: 'center'}}>
                  <Image source={require('../../drawble/Image/logo_color.jpg')} style={{width:100, height:100}} />
                  <Text style={{fontSize:25, fontStyle:'normal', color: '#F38320', fontWeight:'bold', marginTop: 20}}>CAO ĐẲNG VIỄN ĐÔNG</Text>
                </View>

                <View style={{width: '100%', height: 150, paddingStart: 20, paddingEnd: 20,  marginTop: 0.08* heightWindow}}>
                  <Text style={{ color: '#459173', fontSize:20, fontWeight:'bold', marginBottom:30}}>
                    Đăng Nhập
                  </Text>
                  <View style={{width: '90%', height: 40, flexDirection:'row'}}>
                    <Icon style={{marginTop: 10}} name="mail" size={24}/>
                    <TextInput style={{ color: 'black', width: '100%', height:'100%', marginStart:10, fontSize:14, borderBottomWidth: 1, borderBottomColor: 'gray' }}
                      autoCapitalize = 'none' 
                      value={getEmail}
                      onChangeText = {setEmail}
                      placeholder="Email"
                    />

                    
                  </View>
                  <View style={{width: '93%', height: 40, flexDirection:'row', marginTop:20}}>
                    <Icon style={{marginTop: 10}} name="lock" size={24} />
                    <View style={{width: '100%', height: '100%', flexDirection:'row', borderBottomWidth: 1, borderBottomColor: 'gray', paddingRight:0}}>
                      <TextInput style={{ color: 'black', width: '90%', height:'100%', marginStart:10, fontSize:14 }}
                        autoCapitalize = 'none' 
                        secureTextEntry={getPasswordVisible? false: true}
                        placeholder="Mật Khẩu"
                      /> 
                      <TouchableOpacity style={{width:30, height:40}}
                      onPress={() => {
                          setPasswordVisible(!getPasswordVisible);
                      }}>{
                        getPasswordVisible?
                        <Image source={require('../../drawble/drawbleimg/hidden_eye_icon.png')} style={{width:'100%', height:'100%'}}  resizeMode="contain"/>
                        : 
                        <Image source={require('../../drawble/drawbleimg/eye_icon.png')} style={{width:'100%', height:'100%'}}  resizeMode="contain"/>
                      }
                       
                      </TouchableOpacity> 
                      
                    </View>
                    
                  </View>
                </View>
                
                

                {/* set forgot pass and hide pass */}
                <View style={{ alignItems:'flex-end', marginEnd: 20, marginTop: 15}}>
                  <TouchableOpacity
                  onPress = {() => {
                    navigation.navigate('Confirmid');
                    // navigation.navigate('ComFirmID', {
                    //   email: getEmail
                    // });
                  }}>
                      <Text style={{color:'#F38320'}}>
                        Quên Mật Khẩu?
                      </Text>
                  </TouchableOpacity>
                </View>
                {/* Submit login */}
                <View style={{ width:'100%', height: 130,marginTop: 0.15*heightWindow}}>
                  <View style={{width:'100%', height:'auto', alignItems:'center'}}>
                    <TouchableOpacity style={{ alignItems: 'center', justifyContent:'center', width:'95%',height:60, backgroundColor:'#F38320', borderRadius:10}}
                    onPress = {() => {
                      navigation.navigate('ControlTab');
                      // navigation.navigate('ComFirmID', {
                      //   email: getEmail
                      // });
                    }}
                    >
                        <Text style={{fontSize:25, color:'white'}}>
                            Đăng Nhập 
                        </Text>
                    </TouchableOpacity>

                    <View style={{flexDirection:'row', marginTop:20}}>
                      <Text style={{fontSize: 15, marginEnd: 5}}>
                        Chưa có tài khoản?
                      </Text>
                      <TouchableOpacity 
                      onPress={() => {
                        navigation.navigate('Register');
                      }}>
                        <Text style={{color:'#F38320', fontSize: 15}}>
                          Đăng kí ngay
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
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

export default Login

