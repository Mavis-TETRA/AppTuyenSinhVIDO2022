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

  
  
  function ChangeInfor({navigation}) {
    const [datePicker, setDatePicker] = useState(false);
    const [date, setDate] = useState(new Date());
    const [dateOutput, setDateOutput] = useState('');
    const [selectImageTop, setSelectImageTop] = useState(false);
    const [selectImageBottom, setSelectImageBottom] = useState(false);
    const [imageCCCDTop, setImageCCCDTop] = useState('')
    const [imageCCCDBottom, setImageCCCDBottom] = useState('')
    // Lấy dữ liệu với  useState
    const [getCCCD, setCCCD] = useState('');
    const [getName, setName] = useState('');
    const [getPhone, setPhone] = useState('');
    const [gender, setGender] = useState('');
    const [imageCCCDTopData, setImageCCCDTopData] = useState('')
    const [imageCCCDBottomData, setImageCCCDBottomData] = useState('')

    // const [listNoti, setListNoti] = useState([]);
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

    const addCategory = () => {
      
    };

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
                    Chỉnh sửa thông tin
                </Text>
              </View>
            </View>
            <View>
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
            
            
              <View style={{width:'100%', height: 100, marginBottom: 60, flexDirection:'row', justifyContent:'center', marginTop:60}}>
                <TouchableOpacity
                  onPress={
                    addCategory
                  }
                 style={{width:'90%', height:'60%', backgroundColor:'#FF8306', alignItems:'center', padding:20, borderRadius:10}}>
                  <Text style={{color:'white', fontSize:15, fontWeight:'bold'}}>
                    Xác Nhận
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </SafeAreaView>
      )
  }
  
  export default ChangeInfor