/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons'
import Splashscreen from './splashscreen/splashscreen';
import SplashscreenLogin from './splashscreen/splashscreenlogin';
import InTroduce from './introduce/introduce';
import Login from './loginscreen/login';
import Accuracy from './loginscreen/accuracy';
import Confirmid from './loginscreen/confirmid';
import NewPass from './loginscreen/newpass';
import Register from './loginscreen/register';
import Mainactivity from './homescreen/mainactivity';
import Newactivity from './homescreen/newactivity';
import Inforactivity from './homescreen/inforactivity';
import Scanneractivity from './homescreen/scanneractivity';
import Notificationactivity from './homescreen/notification';
import Recordkeeping from './homescreen/recordkeeping';
// my-account
import MyAccount from './account/myaccount';
import ChangeInfor from './account/changeinfor';
import ChangeImage from './account/changeimg';
import SetNotification from './account/setnotification';
import DetailAccount from './account/detailaccount';



const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const widthWindow = Dimensions.get('window').width;
const heightWindow = Dimensions.get('window').height;

const CustomTabBarButton = ({children, onPress}) => (
  <TouchableOpacity style={{
    top: 10,
    justifyContent:'center',
    width:50,
    height:50,
  }}
  onPress= {onPress}>
    <View style={{
      width:'100%',
      height:'100%',
      backgroundColor:'#F38320',
      borderRadius:35
    }}>
      {children}
    </View>
  </TouchableOpacity>
)

function ControlTab() {
  
  return (
    <Tab.Navigator screenOptions={{
      headerShown: false,
      tabBarShowLabel: false,
      tabBarStyle: {
        position: 'absolute', bottom: 0, elevation: 0, backgroundColor: 'white', height:70, width: '100%'
      }
    }}>
      <Tab.Screen name="Mainactivity" component={Mainactivity} options={{
        tabBarIcon:({focused}) =>(
          <View style={{alignItems:'center', justifyContent:'center'}}>
            <Icon style={{}} name="home" size={25} color={ focused ? '#05850A': '#898989'}/>
            {/* <Image source = {require('../components/drawbleimg/houseicon.png')} resizeMode='contain' style={{ width: 25, height: 25, tintColor: focused ? '#F38320': '#000000'}} /> */}
            <Text style={{color: focused ? '#05850A': '#898989', fontSize:12}}>
              Trang Chủ
            </Text>
          </View>
        )
        }} />

      <Tab.Screen name="Newactivity" component={Newactivity} 
      
        options={{
          tabBarStyle: { display: "none" },
          tabBarIcon:({focused}) =>(
            // <Icon style={{}} name="plus-a" size={25} color="white"/>
             <Image source = {require('../drawble/drawbleimg/plus.png')} resizeMode='contain' style={{ width: 30, height: 30, tintColor:'#fff'}} />
          ), 
          tabBarButton: (props) => (
            <CustomTabBarButton {...props}/>
          )
          }}
      />

      <Tab.Screen name="Inforactivity" component={Inforactivity} 
        options={{
          tabBarIcon:({focused}) =>(
            <View style={{alignItems:'center', justifyContent:'center'}}>
            <Icon style={{}} name="person-outline" size={25}  color={ focused ? '#05850A': '#898989'}/>
            {/* <Image source = {require('../components/drawbleimg/infoicon.png')} resizeMode='contain' style={{ width: 25, height: 25, tintColor: focused ? '#F38320': '#898989'}} /> */}
            <Text style={{color: focused ? '#05850A': '#898989', fontSize:12}}>
              Cá Nhân
            </Text>
          </View>
          )
          }}
      />
    </Tab.Navigator>
  );
}

function RootComponent() {
    return (
        <NavigationContainer>
      {/* Rest of your app code */}
        <Stack.Navigator initialRouteName="Splashscreen" screenOptions={{headerShown: false}}>
          <Stack.Screen name="Splashscreen" component={Splashscreen} />
          <Stack.Screen name="SplashscreenLogin" component={SplashscreenLogin} />
          <Stack.Screen name="InTroduce" component={InTroduce} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Accuracy" component={Accuracy} />
          <Stack.Screen name="Confirmid" component={Confirmid} />
          <Stack.Screen name="NewPass" component={NewPass} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="ControlTab" component={ControlTab} />
          <Stack.Screen name="Mainactivity" component={Mainactivity} />
          <Stack.Screen name="Newactivity" component={Newactivity} />
          <Stack.Screen name="Scanneractivity" component={Scanneractivity} />
          <Stack.Screen name="Notificationactivity" component={Notificationactivity} />
          <Stack.Screen name="Recordkeeping" component={Recordkeeping} />
          <Stack.Screen name="Inforactivity" component={Inforactivity} />
          <Stack.Screen name="MyAccount" component={MyAccount} />
          <Stack.Screen name="ChangeInfor" component={ChangeInfor} />
          <Stack.Screen name="ChangeImage" component={ChangeImage} />
          <Stack.Screen name="SetNotification" component={SetNotification} />
          <Stack.Screen name="DetailAccount" component={DetailAccount} />
        </Stack.Navigator>
      </NavigationContainer>
    )
}

export default RootComponent

