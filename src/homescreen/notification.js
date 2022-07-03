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
  import Icon from "react-native-vector-icons/MaterialIcons";
  import DateTimePicker from '@react-native-community/datetimepicker';
  import {Picker} from '@react-native-picker/picker';
  import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
  
  const widthWindow = Dimensions.get('window').width;
  const heightWindow = Dimensions.get('window').height;

  const listnotification = [
    {
      title: "Đây là Tiêu Đề",
      date: "12:26 27/06/2022",
      detail:     "thông báo ở đây trong vài dòng  thông báo ở đây trong vài dòng  thông báo ở đây trong vài dòng  thông báo ở đây trong vài dòng ",
    },
    {
      title: "Đây là Tiêu Đề",
      date: "12:26 27/06/2022",
      detail:     "thông báo ở đây trong vài dòng  thông báo ở đây trong vài dòng  thông báo ở đây trong vài dòng  thông báo ở đây trong vài dòng ",
    },
    {
      title: "Đây là Tiêu Đề",
      date: "12:26 27/06/2022",
      detail:     "thông báo ở đây trong vài dòng  thông báo ở đây trong vài dòng  thông báo ở đây trong vài dòng  thông báo ở đây trong vài dòng ",
    },
    {
      title: "Đây là Tiêu Đề",
      date: "12:26 27/06/2022",
      detail:     "thông báo ở đây trong vài dòng  thông báo ở đây trong vài dòng  thông báo ở đây trong vài dòng  thông báo ở đây trong vài dòng ",
    }
  ];
  
  function Notificationactivity({navigation}) {
    

    // const [listNoti, setListNoti] = useState([]);


      return (
        <SafeAreaView>
          <StatusBar
            hidden={false}
          />
          <View style={{width: widthWindow, height: '100%', position:'relative'}}>
          <Image style={{position:'absolute', top:-500, left:-400}} source={require('../../drawble/drawblev24/Group32.png')}/>
            <View style={{backgroundColor:'#FB8824', width: widthWindow, height: '10%', position:'relative', flexDirection:'row'}}>
              <TouchableOpacity style={{paddingTop: 25, paddingStart:20, width:'auto', paddingEnd:10}}
                onPress={() => {
                  navigation.goBack();
                }}
              >
                
                <Icon name="chevron-left" size={35} color="white"/>

                {/* <Image source={require('../../drawble/drawblev24/ic_chevron_left_24px.png')} /> */}
              </TouchableOpacity>
              <View style={{width: widthWindow, height:'100%'}}>
                <Text style={{fontSize:20, fontWeight:'500',color:'white',padding:80, paddingTop: 25, paddingBottom:20}}>
                    Thông Báo
                </Text>
              </View>
            </View>

            <ScrollView style={{width:'100%', height:'100%', paddingEnd:20}}>
              {
                listnotification.map((e, index) => 
                  <View style = {{margin: 20,}}>
                    <Text style={{textAlign:'center', color:'#C2C2C2'}}>
                      {
                        e.date
                      }
                    </Text>
                    <View style={{backgroundColor:'#D7D7D7', marginTop: 10, height: 'auto', borderRadius:20}}>
                    <Text style={{padding:15, paddingStart:20,marginLeft: 10, marginRight: 10, borderBottomWidth:1, borderBottomColor:'#898989', fontWeight:'bold', fontSize: 15}}>
                      {
                        e.title
                      }
                    </Text>
                    <Text style={{margin:20,marginBottom: 80}}>
                      {
                        e.detail
                      }
                    </Text>
                    
                    </View>
                  </View>
                )
              }
              
            </ScrollView>
          </View>
        </SafeAreaView>
      )
  }
  
  export default Notificationactivity