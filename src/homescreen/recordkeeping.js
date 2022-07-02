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

  
  
  function Recordkeeping({navigation}) {
    

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
                    Quản lý hồ sơ
                </Text>
              </View>
            </View>
            <ScrollView>
              <View style={{flexDirection:'row', width:'90%', height:'auto', justifyContent:'space-between', backgroundColor:'white', margin: 20, borderRadius: 20, padding:15, alignItems:'center',
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 5,
              },
              shadowOpacity: 0.34,
              shadowRadius: 6.27,
              
              elevation: 10,
            }}>
                <View style={{flex:60}}>
                  <Text style={{color:'#249428', fontSize: 14, fontWeight:'500'}}>
                    Trần MInh Tân
                  </Text>
                </View>
                <View style={{flexDirection:'row', justifyContent:'space-around', flex: 40, alignItems:'center'}}>
                  <TouchableOpacity>
                    <Icon name="eraser" size={20} color="#000000"/>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Icon name="eye" size={20} color="#000000"/>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Icon name="edit" size={20} color="#000000"/>
                  </TouchableOpacity>
                </View>
              </View>

              <TouchableOpacity style={{flexDirection:'row', width:'90%', height:'auto', backgroundColor:'white', margin: 20, marginTop:10, marginBottom:10, borderRadius: 20, padding:15, alignItems:'center',
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 5,
              },
              shadowOpacity: 0.34,
              shadowRadius: 6.27,
              
              elevation: 10,
            }}>
                  <Icon name="plus" size={20} color="#555555"/>
                  <Text style={{color:'#BBBBBB', fontSize: 14, fontWeight:'500', marginStart: 20}}>
                    Tạo thêm hồ sơ...
                  </Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </SafeAreaView>
      )
  }
  
  export default Recordkeeping