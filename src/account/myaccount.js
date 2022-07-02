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

  
  
  function MyAccount({navigation}) {
    

    // const [listNoti, setListNoti] = useState([]);


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
                    Tài khoản
                </Text>
              </View>
            </View>
            <View>
              <View style={{margin: 20}}>
                <View style={{marginBottom: 10}}>
                  <Text style={{color:'#BBBBBB'}}>Tên tài khoản: </Text>
                  <Text style={{color:'black', fontWeight:'bold', fontSize:16}}>
                    Trần Minh Tân
                  </Text>
                </View>
                <View style={{flexDirection:'row', justifyContent:'space-between', marginBottom: 10}}>
                  <View>
                    <Text style={{color:'#BBBBBB'}}>Giới tính:</Text>
                    <Text style={{color:'black', fontWeight:'bold', fontSize:16}}>
                      Nam
                    </Text>
                  </View>
                  <View>
                    <Text style={{color:'#BBBBBB'}}>Ngày sinh</Text>
                    <Text style={{color:'black', fontWeight:'bold', fontSize:16}}>07/09/2002</Text>
                  </View>
                </View>

                <View style={{flexDirection:'row', justifyContent:'space-between', marginBottom: 10}}>
                  <View>
                    <Text style={{color:'#BBBBBB'}}>Số điện thoại:</Text>
                    <Text style={{color:'black', fontWeight:'bold', fontSize:16}}>0398802442</Text>
                  </View>
                  <View>
                    <Text style={{color:'#BBBBBB'}}>CCCD:</Text>
                    <Text style={{color:'black', fontWeight:'bold', fontSize:16}}>074202000079</Text>
                  </View>
                </View>

                <View style={{marginBottom: 10}}>
                    <Text style={{color:'#BBBBBB'}}>Email:</Text>
                    <Text style={{color:'black', fontWeight:'bold', fontSize:16}}>tranminhtan4869@gmail.com</Text>
                </View>
              </View>
              <View style={{marginTop:20}}>
              <TouchableOpacity 
              onPress={()=>{
                navigation.navigate("ChangeInfor")
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
                  <Icon name="edit" size={20} color="#555555"/>
                  <View style={{flexDirection:'row', justifyContent:'center', width:'80%'}}>
                    <Text style={{color:'black', fontSize: 20, fontWeight:'500', marginStart: 20}}>
                      Chỉnh sửa thông tin
                    </Text>
                  </View>
                  
              </TouchableOpacity>
              <TouchableOpacity 
              onPress={()=>{
                navigation.navigate("ChangeImage")
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
                  <Icon name="sync-alt" size={20} color="#555555"/>
                  <View style={{flexDirection:'row', justifyContent:'center', width:'80%'}}>
                    <Text style={{color:'black', fontSize: 20, fontWeight:'500', marginStart: 20}}>
                      Thay đổi ảnh đại diện
                    </Text>
                  </View>
                  
              </TouchableOpacity>
              <TouchableOpacity 
              onPress={()=>{
                navigation.navigate("SetNotification")
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
                  <Icon name="bell" size={20} color="#555555"/>
                  <View style={{flexDirection:'row', justifyContent:'center', width:'80%'}}>
                    <Text style={{color:'black', fontSize: 20, fontWeight:'500', marginStart: 20}}>
                      Cài đặt thông báo
                    </Text>
                  </View>
                  
              </TouchableOpacity>
              </View>
            </View>
          </View>
        </SafeAreaView>
      )
  }
  
  export default MyAccount