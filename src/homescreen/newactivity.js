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
  Alert
} from 'react-native'
import React, { Component } from 'react'
import { useState, useEffect, useRef } from 'react';
import Icon from "react-native-vector-icons/Ionicons";
import DateTimePicker from '@react-native-community/datetimepicker';
import {Picker} from '@react-native-picker/picker';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import SQLite from 'react-native-sqlite-storage';

const widthWindow = Dimensions.get('window').width;
const heightWindow = Dimensions.get('window').height;

const db = SQLite.openDatabase(
  {
    name: 'StudentDB',
    location:'default',
  },
  () => { },
  error => {console.log(error)}
);

function Newactivity({navigation}) {
  
  const [datePicker, setDatePicker] = useState(false);
  const [date, setDate] = useState(new Date());
  const [dateOutput, setDateOutput] = useState('');
  const [selectImageTop, setSelectImageTop] = useState(false);
  const [selectImageBottom, setSelectImageBottom] = useState(false);
  const [imageCCCDTop, setImageCCCDTop] = useState('')
  const [imageCCCDBottom, setImageCCCDBottom] = useState('')
  const [imageTest, setImageTest] = useState([])
  // Lấy dữ liệu với  useState
  const [getCCCD, setCCCD] = useState('');
  const [getName, setName] = useState('');
  const [getPhone, setPhone] = useState('');
  const [gender, setGender] = useState('');


   // const createTable = () => {
  //   db.transaction((tx) => {
  //     tx.executeSql(
  //       "Create Table IF Not Exit"
  //       + "User"
  //       +"();"
  //     )
  //   })
  // }
  
  // const setData = async () => {
  //   if (getName.length == 0 || getCCCD == 0 || getPhone == 0 ) {
  //     Alert.alert('Warning!', 'Please write your data.')
  //   }else {
  //     try {
  //       db.transaction((tx) => {
  //         tx.
  //       })
  //     } catch (error) {
        
  //     }
  //   }
  // }

  const showDatePicker = () => {
    if (datePicker == false) {
      setDatePicker(true);
    }
  }


  const onDateSelected = (event, value) => {
    setDatePicker(false),
    setDate(value),
    setDateOutput(value.getFullYear()+'/'+value.getMonth()+'/'+value.getDate())
  }

  const optionImageTop = () => {
    if (selectImageTop == true) {
      return (<View style ={{height:'100%',flexDirection:'row',marginTop:25, paddingTop:5, paddingStart: 10, paddingEnd: 10, borderWidth:1, borderColor:'#05850A', borderRadius:10}}>
                <TouchableOpacity style={{margin:5,width: 50, height:50}} 
                          onPress={() => {
                           openCamera()
                          }}>
                  <Icon style={{borderWidth:1, padding:8, borderRadius:10, borderColor:'#05850A', backgroundColor:'white'}} name="camera" size={30} color='#FB8824'/>
                  
                </TouchableOpacity>
                <TouchableOpacity style={{margin:5,width: 50, height:50}} 
                          onPress={() => {
                            openLibrary()
                          }}>
                  <Icon style={{borderWidth:1, padding:8, borderRadius:10, borderColor:'#05850A', backgroundColor:'white'}} name="folder" size={30} color='#FB8824'/>
                  
                </TouchableOpacity>
                <TouchableOpacity style={{margin:5,width: 50, height:50}} 
                          onPress={() => {
                            setSelectImageTop(false)
                          }}>
                  <Icon style={{borderWidth:1, padding:8, borderRadius:10, borderColor:'#05850A', backgroundColor:'white'}} name="close" size={30} color='#FB8824'/>
                  
                </TouchableOpacity>
              </View>)
    }
  }

  const optionImageBottom = () => {
    if (selectImageBottom == true) {
      return (<View style ={{height:'100%',flexDirection:'row',marginTop:25, paddingTop:5, paddingStart: 10, paddingEnd: 10, borderWidth:1, borderColor:'#05850A', borderRadius:10}}>
                <TouchableOpacity style={{margin:5,width: 50, height:50}} 
                          onPress={() => {
                            openCameraBottom()
                          }}>
                  <Icon style={{borderWidth:1, padding:8, borderRadius:10, borderColor:'#05850A', backgroundColor:'white'}} name="camera" size={30} color='#FB8824'/>
                  
                </TouchableOpacity>
                <TouchableOpacity style={{margin:5,width: 50, height:50}} 
                          onPress={() => {
                            openLibraryBottom()
                          }}>
                  <Icon style={{borderWidth:1, padding:8, borderRadius:10, borderColor:'#05850A', backgroundColor:'white'}} name="folder" size={30} color='#FB8824'/>
                  
                </TouchableOpacity>
                <TouchableOpacity style={{margin:5,width: 50, height:50}} 
                          onPress={() => {
                            setSelectImageBottom(false)
                          }}>
                  <Icon style={{borderWidth:1, padding:8, borderRadius:10, borderColor:'#05850A', backgroundColor:'white'}} name="close" size={30} color='#FB8824'/>
                  
                </TouchableOpacity>
              </View>)
    }
  }

  const openCamera = () => {
    const options = {
      storageOptions: {
        path:'images',
        mediaType:'photo',
      },
      includeBase64: true,
    };

    launchCamera(options, response => {
      // console.log("Response = ", response.assets)
      if (response.didCancel) {
        console.log('User cancelled image picker')
      }else if (response.error) {
        console.log('ImagePicker Error', response.error);
      }else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton)
      }else{
        console.log(response.base64)
        const source = {uri: 'data:image/jpeg;base64,' + response.assets[0]['base64']};
        setImageCCCDTop(source);
      }
    });
  };

  const openLibrary = () => {
    const option = {
      storageOption: {
        path:'images',
        mediaType:'photo',
      },
      includeBase64: true,
    };

    launchImageLibrary(option, response => {
      // console.log("Response = ", response.assets[0]['base64'])
      
      if (response.didCancel) {
        console.log('User cancelled image picker')
      }else if (response.error) {
        console.log('ImagePicker Error', response.error);
      }else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton)
      }else{
        const source = {uri:'data:image/jpeg;base64,'+response.assets[0]['base64']};
        setImageCCCDTop(source);
      }
    });
  };

  const openCameraBottom = () => {
    const option = {
      storageOption: {
        path:'images',
        mediaType:'photo',
      },
      includeBase64: true,
    };

    launchCamera(option, response => {
      // console.log("Response = ", response)
      if (response.didCancel) {
        console.log('User cancelled image picker')
      }else if (response.error) {
        console.log('ImagePicker Error', response.error);
      }else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton)
      }else{
        const source = {uri: 'data:image/jpeg;base64,'+ response.assets[0]['base64']};
        setImageCCCDBottom(source);
      }
    });
  };

  const openLibraryBottom = () => {
    const option = {
      storageOption: {
        path:'images',
        mediaType:'photo',
      },
      includeBase64: true,
    };

    launchImageLibrary(option, response => {
      // console.log("Response = ", response)
      if (response.didCancel) {
        console.log('User cancelled image picker')
      }else if (response.error) {
        console.log('ImagePicker Error', response.error);
      }else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton)
      }else{
        const source = {uri:'data:image/jpeg;base64,'+ response.assets[0]['base64']};
        setImageCCCDBottom(source);
       
      }
    });
  };

  
    return (
      <SafeAreaView>
        <StatusBar
          hidden={false}
        />
        <View style={{width: widthWindow, height: '100%'}}>
          <View style={{backgroundColor:'white', width: widthWindow, height: '10%', position:'relative', flexDirection:'row'}}>
            <TouchableOpacity style={{paddingTop: 30, paddingStart:20, width:'auto', paddingEnd:10}}
              onPress={() => {
                navigation.goBack();
              }}
            >
              <Image source={require('../../drawble/drawblev24/ic_chevron_left_24px.png')} />
            </TouchableOpacity>
            <View style={{width: widthWindow, height:'100%'}}>
              <Text style={{fontSize:20, fontWeight:'500',color:'black',padding:100, paddingTop: 25, paddingBottom:20}}>
                Nhập thông tin
              </Text>
            </View>
          </View>
          
          
          <ScrollView style={{backgroundColor:'white', width: widthWindow, height: '90%', position:'relative'}}>
            <View style={{width: '90%', height: 40, marginBottom: 40, marginStart: 10}}>
                    <Text style={{marginStart: 10}}>
                      Số/No
                    </Text>
                    <TextInput style={{ color: 'black', width: '100%', height:'100%', marginStart:10, fontSize:14, borderBottomWidth: 1, borderBottomColor: 'gray' }}
                      autoCapitalize = 'none' 
                      value={getCCCD}
                      onChangeText = {setCCCD}
                      placeholder="Nhập Số CCCD"
                    />
            </View>
            <View style={{width: '90%', height: 40, marginBottom: 40, marginStart: 10}}>
                    <Text style={{marginStart: 10}}>
                      Họ và Tên/Full Name
                    </Text>
                    <TextInput style={{ color: 'black', width: '100%', height:'100%', marginStart:10, fontSize:14, borderBottomWidth: 1, borderBottomColor: 'gray' }}
                      autoCapitalize = 'none' 
                      value={getName}
                      onChangeText = {setName}
                      placeholder="Nhập Họ và Tên"
                    />
            </View>

            <View style={{width: '90%', height: 40, marginBottom: 40, marginStart: 10, flexDirection:'row'}}>
              <View style={{flex:2}}>
                <Text style={{marginStart: 10}}>
                  Ngày sinh/Date of birth
                </Text>
                <View style={{width:'90%', height:'100%', flexDirection:'row',borderBottomWidth: 1,marginStart:10, justifyContent:'space-between'}}>
                  
                    <Text 
                    // placeholder="Ngày sinh"
                    // autoCapitalize = 'none' 
                    // value={date}
                    // onChangeText = {(value) => {setDate(value)}}
                    style={{width:'70%', marginTop:10, marginStart:5}}
                    >
                    {
                      dateOutput
                    }
                  </Text>
                  
                  {/* {console.log(date)} */}

                  {datePicker == false && (
                    <TouchableOpacity
                    onPress={showDatePicker}>
                    <Icon name="calendar" size={30} color='#FB8824'/>
                  </TouchableOpacity>
                  )}
                  {
                    datePicker == true && ( 
                      <DateTimePicker
                      value={date}
                      mode={'date'}
                      is24Hour={true}
                      display={Platform.OS === 'ios' ? 'spinner': 'calendar'}
                      format={"YYYY-MM-DD"}
                      onChange={onDateSelected}
                    />
                    )
                  }
                </View>
              </View>
              <View style={{flex:1,marginStart: 20, marginEnd: 10}}>
                <Text style={{}}>
                  Giới tính/Gender
                </Text>
                <Picker selectedValue={gender}
                   onValueChange={(itemValue, itemIndex) =>
                    setGender(itemValue)
                  }
                  style ={{width: 150, height: 50, color:'#333333'}}
                >
                  <Picker.Item label = 'Nam' value = '0' />
                  <Picker.Item label = 'Nữ' value = '1'/>
                </Picker>
                {/* {
                  console.log(gender)
                } */}
              </View>
            </View>
            <View style={{width: '90%', height: 40, marginBottom: 40, marginStart: 10}}>
                    <Text style={{marginStart: 10}}>
                      Số điện thoại/Phone Number
                    </Text>
                    <TextInput style={{ color: 'black', width: '100%', height:'100%', marginStart:10, fontSize:14, borderBottomWidth: 1, borderBottomColor: 'gray' }}
                      autoCapitalize = 'none' 
                      value={getPhone}
                      onChangeText = {setPhone}
                      placeholder="Nhập số điện thoại"
                    />
            </View>
            <View style={{width: '90%', height: 70, marginBottom: 40, marginStart: 20}}>
              <View style ={{flexDirection:'row', height: '100%'}}>
                <View style ={{height:'100%', width:'auto'}}>
                  <Text style={{marginBottom: 10}}>
                    Tải hình CCCD (Mặt trên):
                  </Text>
                  <TouchableOpacity style={{margin:5,width: 50, height:50}} 
                            onPress={() => {
                              setSelectImageTop(true)
                            }}>
                            <Icon name="add" size={35} color="#FF8306" style={{ borderWidth:1, padding:8, borderRadius:10, borderColor:'#05850A', backgroundColor:'white'}}/>
                  </TouchableOpacity>
                </View>
                {
                  optionImageTop()
                }
              </View>
            </View>
            {/* { console.log(imageCCCDTop)} */}
            <Image
                source={imageCCCDTop}
                style = {{width:"90%", height:250, borderColor:'black', marginBottom:80, marginStart: 20, borderWidth:1}}
              />
            <View style={{width: '90%', height: 70, marginBottom: 40, marginStart: 20}}>
              <View style = {{flexDirection:'row', height:'100%'}}>
                <View style ={{height:'100%', width:'auto'}}>
                  <Text style={{marginBottom: 10}}>
                    Tải hình CCCD (Mặt dưới):
                  </Text>
                  <TouchableOpacity style={{margin:5,width: 50, height:50}} 
                            onPress={() => {
                              setSelectImageBottom(true)
                            }}>
                            <Icon name="add" size={35} color="#FF8306" style={{ borderWidth:1, padding:8, borderRadius:10, borderColor:'#05850A', backgroundColor:'white'}}/>
                  </TouchableOpacity>
                </View>
                {
                  optionImageBottom()
                }
              </View>
              
            </View>
            <Image
                source={imageCCCDBottom}
                style = {{width:"90%", height:250, borderColor:'black', marginBottom:80, marginStart: 20, borderWidth:1}}
              />
          </ScrollView>
        </View>
      </SafeAreaView>
    )
}

export default Newactivity