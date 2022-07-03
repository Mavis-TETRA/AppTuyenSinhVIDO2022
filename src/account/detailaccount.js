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

  
  
  function DetailAccount({navigation}) {
    

    // const [listNoti, setListNoti] = useState([]);


      return (
        <SafeAreaView>
          <StatusBar
            hidden={false}
          />
          <View style={{width: widthWindow, height: '100%', position:'relative', backgroundColor:'white'}}>
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
                    Trần Minh Tân
                </Text>
              </View>
            </View>
            
            <View style={{width:widthWindow, height:heightWindow, alignItems: 'center'}}>
              <View style={{width:'100%', height: 0.25*heightWindow, alignItems: 'center', marginTop:20}}>
                  <View style={{width:'90%', height:'20%', flexDirection:'row', justifyContent:'flex-end', marginBottom: 10}}>
                    <TouchableOpacity style={{flexDirection:'row',marginTop: 10, marginStart: 10}}
                      onPress={
                        () => {
                          navigation.navigate('Newactivity');
                        }
                      }
                    >
                    
                      <Text style={{fontSize:12, color:'#FF8306', fontWeight:'bold',  marginEnd:4}}>
                        Xóa hồ sơ
                      </Text>
                      <Icon name="eraser" size={15} color="#FF8306"/>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flexDirection:'row',marginTop: 10, marginStart: 30}}>
                    
                      <Text style={{fontSize:12, color:'#FF8306', fontWeight:'bold', marginEnd:4}}>
                        Chỉnh sửa
                      </Text>
                      <Icon name="edit" size={15} color="#FF8306"/>
                    </TouchableOpacity>
                  </View>
                  <View style={{width: widthWindow, height: '100%', alignItems:'center'}}>
                            <View style={{width:'90%', height:'90%', borderRadius: 20, paddingTop:10, paddingStart: 20, paddingEnd:20, paddingBottom:10, backgroundColor:'white', 
                            shadowColor: "#000",shadowOffset:
                            {
                              width: 0,
                              height: 4,
                            },
                            shadowOpacity: 0.32,
                            shadowRadius: 5.46,
                            elevation: 9,
                          }}>
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
                            </View>
                        </View>
              </View>
              <View style={{width:'90%',height:'50%',backgroundColor:'#F5F5F5', marginTop:50, borderRadius:20}}>
                <ScrollView style={{width:'100%', height:'100%',borderRadius:20,paddingLeft:20, paddingEnd:20}}>
                  <View style={{marginTop:15}}><Text style={{color:'#D1D1D1'}}>Họ và tên thí sinh: </Text><Text style={{color:'black', fontSize:15}}>Trần Minh Tân</Text></View>
                  <View style={{marginTop:15, flexDirection:'row', justifyContent:'space-between'}}>
                    <View style={{marginTop:15}}><Text style={{color:'#D1D1D1'}}>CMND/CCCD: </Text><Text style={{color:'black', fontSize:15}}>074202000079</Text></View>
                    <View style={{marginTop:15}}><Text style={{color:'#D1D1D1'}}>Ngày sinh: </Text><Text style={{color:'black', fontSize:15}}>07/09/2002</Text></View>
                  </View>
                  <View style={{marginTop:15}}><Text style={{color:'#D1D1D1'}}>Giới tính: </Text><Text style={{color:'black', fontSize:15}}>Nam</Text></View>
                  <View style={{marginTop:15}}><Text style={{color:'#D1D1D1'}}>Đăng kí bậc học: </Text><Text style={{color:'black', fontSize:15}}>Đại học (Liên kết đại học Sư Phạm Kĩ Thật)</Text></View>
                  <View style={{marginTop:15}}><Text style={{color:'#D1D1D1'}}>Ngành học:</Text><Text style={{color:'black', fontSize:15}}>Công nghệ phần mềm</Text></View>
                  <View style={{marginTop:15}}><Text style={{color:'#D1D1D1'}}>Khối: </Text><Text style={{color:'black', fontSize:15}}>A00-Toán-Lý-Hóa</Text></View>
                  <View style={{marginTop:15, flexDirection:'row', justifyContent:'space-between', marginBottom:20}}>
                    <View style={{marginTop:15}}><Text style={{color:'#D1D1D1'}}>Thuộc đối tượng ưu tiên:</Text><Text style={{color:'black', fontSize:15}}>03</Text></View>
                    <View style={{marginTop:15}}><Text style={{color:'#D1D1D1'}}>Khu vực: </Text><Text style={{color:'black', fontSize:15}}>KV2NT</Text></View>
                  </View>
                </ScrollView>
              </View>
            </View>
          </View>
        </SafeAreaView>
      )
  }
  
  export default DetailAccount