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
    StatusBar,
    TextInput
  } 
    from 'react-native';
  import React, { Component } from 'react'
  import { useState, useEffect, useRef } from 'react';
  import Icon from 'react-native-vector-icons/MaterialIcons'
  import { SMTPClient } from 'emailjs';

  
  const widthWindow = Dimensions.get('window').width;
  const heightWindow = Dimensions.get('window').height;
  
  function Register({navigation}) {
    const [getFirshName, setFirshName] = useState('');
    const [getName, setName] = useState('');
    const [getEmail, setEmail] = useState('');
    const [getPasword, setPasword] = useState('');
    const [checked, setchecked] = useState(false);
    // code set hide password
    const[getPasswordVisible, setPasswordVisible] = useState(false);

    //sent otp
    // const client = new SMTPClient({
    //   user: 'hanatashiyuna2507@gmail.com',
    //   password: 'yuna.2507',
    //   host: 'smtp.your-email.com',
    //   ssl: true,
    //   tls: '587'
    // });


    return(
      <SafeAreaView style={{width:'100%', height:'100%', backgroundColor:'#FFFFFF'}}>
        <StatusBar hidden={true} /> 
        <View style={{width:'100%', height: '100%', flexDirection:'column', position:'relative'}}>
        <Image style={{position:'absolute', bottom:-500, left:-300}} source={require('../../drawble/drawblev24/Group33.png')}/>
                <View style={{marginTop:0.2*widthWindow, width:'100%', height:'auto', alignItems: 'center'}}>
                  <Image source={require('../../drawble/Image/logo_color.jpg')} style={{width:100, height:100}} />
                  <Text style={{fontSize:25, fontStyle:'normal', color: '#F38320', fontWeight:'bold', marginTop: 20}}>CAO ĐẲNG VIỄN ĐÔNG</Text>
                </View>

                <View style={{width: '100%', height: 150, paddingStart: 20, paddingEnd: 20,  marginTop: 0.08* heightWindow}}>
                  <Text style={{ color: '#459173', fontSize:20, fontWeight:'bold', marginBottom:30}}>
                    Đăng Kí
                  </Text>
                  <View style={{width: '100%', height:40, flexDirection:'row', justifyContent:'space-between'}}>
                    <View style={{width:'40%', height:40, flexDirection:'row'}}>
                    <Icon style={{marginTop: 10}} name="person" size={24}/>
                      <TextInput style={{ color: 'black', width: '100%', height:40, marginStart:10, fontSize:14, borderBottomWidth: 1, borderBottomColor: 'gray' }}
                        autoCapitalize = 'none' 
                        value={getFirshName}
                        onChangeText = {setFirshName}
                        placeholder="Họ"
                      />
                    </View>

                    <View style={{width:'40%', height:40, flexDirection:'row'}}>
                      
                      <TextInput style={{ color: 'black', width: '100%', height:40, fontSize:14, borderBottomWidth: 1, borderBottomColor: 'gray' }}
                        autoCapitalize = 'none' 
                        value={getName}
                        onChangeText = {setName}
                        placeholder="Tên"
                      />
                      
                    </View>
                  </View>
                  
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
                    <View style={{width: '100%', height: 40, flexDirection:'row', borderBottomWidth: 1, borderBottomColor: 'gray', paddingRight:0}}>
                      <TextInput style={{ color: 'black', width: '90%', height:40, marginStart:10, fontSize:14 }}
                        autoCapitalize = 'none' 
                        onChangeText = {setPasword}
                        secureTextEntry={getPasswordVisible? false: true}
                        placeholder="Mật Khẩu"
                      /> 
                      <TouchableOpacity style={{width:30, height:40}}
                      onPress={() => {
                          setPasswordVisible(!getPasswordVisible);
                      }}>
                       {
                        getPasswordVisible?
                        <Image source={require('../../drawble/drawbleimg/hidden_eye_icon.png')} style={{width:'100%', height:'100%'}}  resizeMode="contain"/>
                        : 
                        <Image source={require('../../drawble/drawbleimg/eye_icon.png')} style={{width:'100%', height:'100%'}}  resizeMode="contain"/>
                      }
                      </TouchableOpacity> 
                      
                    </View>
                    
                  </View>
                </View>
                
                {/* Submit login */}
                <View style={{ width:'100%', height: 130,marginTop: 0.2*heightWindow}}>
                  <View style={{width:'100%', height:'auto', alignItems:'center'}}>
                    <TouchableOpacity style={{ alignItems: 'center', justifyContent:'center', width:'95%',height:60, backgroundColor:'#F38320', borderRadius:10}}
                    onPress = {() => {
                       navigation.navigate('Accuracy'
                       ,{
                        email: getEmail,
                        hashcode: getEmail.split("@"),
                        otp:  Math.floor((Math.random() * 1000) + 1000),
                        timeotp: (60*5 +30),
                        id:String(Math.floor((Math.random() * 1000) + 1000))
                      });
                      // client.send(
                      //   {
                      //     text: 'i hope this works',
                      //     from: 'you <hanatashiyuna2507@gmail.com>',
                      //     to: 'someone <tranminhtan4869@gmail.com>',
                      //     subject: 'testing emailjs',
                      //   },
                      //   (err, message) => {
                      //     console.log(err || message);
                      //   }
                      // );

                     

                    }}
                    >
                        <Text style={{fontSize:25, color:'white'}}>
                            Đăng Kí
                        </Text>
                    </TouchableOpacity>

                    <View style={{flexDirection:'row', marginTop:20}}>
                      <Text style={{fontSize: 15, marginEnd: 5}}>
                        Đã Có Tài Khoản?
                      </Text>
                      <TouchableOpacity 
                      onPress={() => {
                        navigation.navigate('Login');
                      }}>
                        <Text style={{color:'#F38320', fontSize: 15}}>
                          Đăng nhập ngay
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
  
  export default Register
  
  