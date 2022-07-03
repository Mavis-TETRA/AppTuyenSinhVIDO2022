/* eslint-disable prettier/prettier */
import {
    View,
    TouchableOpacity,
    Dimensions,
    SafeAreaView,
    Image,
    ScrollView,
    Text,
    Animated ,
    StatusBar,
    TextInput,
    Alert,
    Button,
  } 
    from 'react-native';
  import React, { Component } from 'react'
  import { useState, useEffect, useRef } from 'react';
  import Icon from 'react-native-vector-icons/MaterialIcons'
  import CountDown from 'react-native-countdown-component';
  import OTPTextView from 'react-native-otp-textinput';


  const widthWindow = Dimensions.get('window').width;
  const heightWindow = Dimensions.get('window').height;
  
  function Accuracy({route, navigation}) {
    //set time otp
    const [time, setTime] = useState(true);
    const [countdown1, setCountdown] = useState('')


    //set param
    const { email, hashcode, otp, timeotp, id } = route.params;
    const [code, setCode] = useState([])

    //OTP
     const [output, input] = useState(0);
    //const otpInput = useRef('');

    const handchangetext = (otp, output) => {
      if (otp == output) {
        navigation.navigate('ControlTab');
      }
     }

     //countdown

     
     const countdownTime = (countdown1, setCountdown) => {
      
      if (countdown1 == false) {
        <TouchableOpacity style={{width:200, height:100}}
                      onPress={() => {setCountdown(true)}}>
                       <Text style={{color: '#FF8306'}}>
                         Gửi lại mã ?
                       </Text>
                     </TouchableOpacity>
      }
     }
 
    

    return(
      <SafeAreaView style={{width:'100%', height:'100%', backgroundColor:'#FFFFFF'}}>
        <StatusBar hidden={true} /> 
        <View style={{width:'100%', height: '100%', flexDirection:'column', position:'relative'}}>
        <Image style={{position:'absolute', bottom:-500, left:-300}} source={require('../../drawble/drawblev24/Group33.png')}/>
          <View style={{margin: 20, marginTop:30}}>
            <TouchableOpacity style={{ width:'auto', height:'auto'}}
              onPress={()=> {
                navigation.pop(1);
              }}>
              <Icon name="arrow-back" size={30} color="#FF8306" />
            </TouchableOpacity>
          </View>

          <View style={{margin: 20}}>
            <Text style={{fontSize: 25, fontWeight:'bold'}}>
              Chứng Thực OTP
            </Text>
            <Text>
              
              Mã OTP được gửi về email: {hashcode[0].substr(0, 3)}****{hashcode[1]}
            </Text>
            <View style={{flexDirection:'row', width:'100%', height: 100, paddingTop: 20, paddingBottom: 20}}>
              <View>
                <OTPTextView
                  handleTextChange={
                    (text) => input(text)
                  }
                  containerStyle={{marginBottom: 20}}
                  textInputStyle={{borderRadius: 10,borderWidth: 3}}
                  inputCount={4}
                  inputCellLength={1}
                />
                 {handchangetext(otp, output)}
                 <Text>
                 {otp}
                 </Text>
                <View>
                </View>
              </View>
            </View>
            <Text style={{color:'red', marginTop: 20}}>
              {/* {isValidOTAll ? 'Vui lòng nhập mã OTP': ''} */}
              </Text>
            <View style={{flexDirection:'row'}}>
              <Text style={{color:'#898989', marginTop: 50, marginEnd: 10}}
              >
                Gửi lại OTP sau: 
              </Text>
              <View style={{marginTop:40 , flexDirection:'row', justifyContent:'space-between', width: '50%'}} >
                <CountDown
                    id={id}
                    until={timeotp}
                    size={15}
                    onFinish={() => {
                      setCountdown('Gửi lại mã ?')
                    }}
                    digitStyle={{backgroundColor: '#FFF'}}
                    digitTxtStyle={{color: '#FF8306'}}
                    timeLabelStyle={{color: '#FF8306', fontWeight: 'bold'}}
                    separatorStyle={{color: '#FF8306'}}
                    timeToShow={['M', 'S']}
                    timeLabels={{m: '', s: ''}}
                    showSeparator ={true} 
                    />
                <TouchableOpacity style={{width:200, height:100, marginTop: 10}}
                  onPress={() => {
                    if (countdown1 == 'Gửi lại mã ?') {
                      setCountdown('')
                      navigation.navigate('Accuracy'
                      ,{
                       email: email,
                       hashcode: hashcode,
                       otp:  Math.floor((Math.random() * 1000) + 1000),
                       timeotp: timeotp,
                       id: String(String(Math.floor((Math.random() * 1000) + 1000)))
                     });

                    }
                  }}>
                  <Text style={{color: '#FF8306'}}>
                     {countdown1}
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

  //Email mẫu
  // Tài khoản: hanatashiyuna2507@gmail.com
  // Mật Khẩu: yuna.2507

  export default Accuracy