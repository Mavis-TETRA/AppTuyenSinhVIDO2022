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
  Platform,
  Switch
} from 'react-native'
import React, { Component } from 'react'
import { useState, useEffect, useRef } from 'react';
import Icon from "react-native-vector-icons/FontAwesome5";
import DateTimePicker from '@react-native-community/datetimepicker';
import {Picker} from '@react-native-picker/picker';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const widthWindow = Dimensions.get('window').width;
const heightWindow = Dimensions.get('window').height;



function SetNotification({navigation}) {

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

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
                  Cài đặt thông báo
              </Text>
            </View>
          </View>
          <View style={{flexDirection:'row', justifyContent:'space-between', margin:20}}>
            <Text style={{color:'black', fontSize:20, fontWeight:'500'}}>
              Tắt toàn bộ thông báo
            </Text>
            <Switch
              trackColor={{ false: "#767577", true: "#f4f3f4" }}
              thumbColor={isEnabled ? "#FF8306" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
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
      </SafeAreaView>
    )
}

export default SetNotification