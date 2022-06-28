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
  TextInput,
  StatusBar
} 
  from 'react-native';
import React, { Component } from 'react'
import { useState, useEffect, useRef } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons'
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

const listOption = [
  {
      type: "Hệ đào tạo",
      content: "Thông tin thí sinh"
    },
    {
      type: "Xét tuyển",
      content: "Xét Tuyển"
    },
    {
      type: "Liên lạc",
      content: "Liên Lạc"
    },
    {
      type: "Kết quả",
      content: "Kết Quả"
    }
]

const listSchool = [
  {
      grade: "Đại Học",
      detail: "Giao Thông Vận Tải thành phố Hồ Chí Minh",
      image: require("../../drawble/drawblev24/Group-148.png")
    },
    {
      grade: "Đại Học",
      detail: "Kinh Tế thành phố Hồ CHí Minh",
      image: require("../../drawble/drawblev24/Group-356.png")
    },
    {
      grade: "Đại Học",
      detail: "Sư Phạm Kĩ Thuật thành phố Hồ Chí Minh",
      image: require("../../drawble/drawblev24/hqdefault.png")
    },
    {
      grade: "Du Học",
      detail: "Nhật Bản",
      image: require("../../drawble/drawblev24/Component851.png")
    }
]




function Mainactivity ({navigation}) {

  const listDefault = [
    "074202000079||Trần Minh Tân1|07092002|Nam|361/12 Đường An Nhơn Tây, Tổ 1, Ấp Ba Sòng, An Nhơn Tây, Củ Chi, TP.Hồ Chí Minh|11022022",
    "074202000079||Trần Minh Tân2|07092002|Nam|361/12 Đường An Nhơn Tây, Tổ 1, Ấp Ba Sòng, An Nhơn Tây, Củ Chi, TP.Hồ Chí Minh|11022022",
    "074202000079||Trần Minh Tân9|07092002|Nam|361/12 Đường An Nhơn Tây, Tổ 1, Ấp Ba Sòng, An Nhơn Tây, Củ Chi, TP.Hồ Chí Minh|11022022"
  ];

  const [listPerSon, setListPerson] = useState(listDefault);
  const [cardActive, setCardActive] = useState(0);
  const [option, setOption] = useState(0);
  const [listItemPerSon, setListItemPerson] = useState([]);
  const [indexGet, setIndexGet] = useState(true)
  const [school, setSchool] = useState(false);
  const [inforSchool, setInforSchool] = useState([]);
  const [indexInfor, setindexInfor] = useState(0);

  useEffect(() => {
    createTable();
  }, [])

   const createTable = () => {
    db.transaction((tx) => {
      tx.executeSql(
        "Create Table IF Not Exit"
        + "Users"
        +"(ID INTEGER PRIMARY KEY AUTOINCREMENT,hoTen TEXT, gioiTinh INTEGER, cardID INTEGER, phoneNumber TEXT, dateBirth TEXT, cardImgTop TEXT, cardImgBT TEXT);"
      )
    })
  }
  

  for (let index = 0; index <= listDefault.length; index++) {
    if (indexGet) {
      if (index == listDefault.length) {
        setIndexGet(!indexGet);
      }else {
        const listItem = (listDefault[index].replace("||","|")).split("|");
        setListItemPerson(prevArray => [...prevArray, listItem]);
      }
    }else {
      break;
    }
  }

  onchange = (nativeEvent) => {
    // console.log(nativeEvent)
    if (nativeEvent) {
        const slide1 = Math.ceil(Math.ceil(nativeEvent.contentOffset.x) / Math.ceil(nativeEvent.layoutMeasurement.width));
        if (slide1 != cardActive) {
          setCardActive(slide1);
        }
        // console.log(nativeEvent.contentOffset.x+"||||"+ nativeEvent.layoutMeasurement.width+"|||"+Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width))
      }
    }

  function getInforSchool() {
    if (school == true) {
      return (
      <View style={school == true?{width: '100%', height:70, margin: 5, marginTop:20}:{width:0, height: 0}}>
                           
        <View style = {{flexDirection:'row',justifyContent:'space-between', marginEnd: 20}}>
          
          <View style={{flexDirection:'row'}}>
            <Image
              resizeMode='stretch'
              style={{width: 70, height:70}}
              source={listSchool[indexInfor].image}
            />
            <View style={{marginTop:10}}>
              <Text>
                {listSchool[indexInfor].grade}
              </Text>
              <Text style={{fontSize:10}}>
                {listSchool[indexInfor].detail}
              </Text>
            </View>
            
          </View>
          <TouchableOpacity
            style={{marginTop:15}}
            onPress={() => {
              setSchool(false)
              setindexInfor(0)
              }
            }
          >
            <Icon name="refresh" size={24} color="#FF8306"/>
          </TouchableOpacity>
        </View>
       </View>)
    }
  }

    return (
      <SafeAreaView>
        <StatusBar
          hidden={false}
        />
        <View style={{width: widthWindow, height: heightWindow, backgroundColor:'white'}}>
          {/* name and logo */}
          <View style={{flexDirection:'row', width:'100%', height:50, alignItems:'center', justifyContent:'space-between', marginTop: 30, paddingStart:30, paddingEnd: 30, marginBottom: 20}}>
                <View style={{flexDirection:'row'}}>
                  <Image style={{width:50, height:50, borderRadius: 30}} source={require('../../drawble/Image/bg4.jpg')}/>
                  <View style={{marginLeft: 10}}>
                    <Text style={{fontSize: 13}}>Chào bạn !</Text>
                    <Text style={{fontSize: 20, fontWeight:'bold', color: 'black'}}>Trần Minh Tân</Text>
                  </View>
                </View>
                <View>
                  <TouchableOpacity
                    style = {{width:40, height:40, backgroundColor:'white', shadowColor: "#000",
                    shadowColor: "#000",
                    shadowOffset: {
                      width: 0,
                      height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,

                    elevation: 5, borderRadius:10, flexDirection: 'row', alignItems:'center', justifyContent:'center'}}
                    onPress={() => {
                      navigation.navigate('Notificationactivity');
                    }}
                  >
                    {/* <Image style={{width: 50, height:50}} source={require('../../drawble/drawblev24/Group-123.png')}/> */}
                    <Icon name="notifications" size={24} color="#B7B7B7"/>
                  </TouchableOpacity>
                </View>
            </View>
            {/* card profile */}
            <View style={{width:'100%', height: 0.25*heightWindow, alignItems: 'center'}}>
                <ScrollView
                  onScroll={({nativeEvent}) => onchange(nativeEvent)}
                  showsHorizontalScrollIndicator={false}
                  pagingEnabled
                  horizontal
                  style={{width: '100%', height: '100%'}}
                >
                
                  {
                    listItemPerSon.map((e, index) =>
                      
                      <View style={{width: widthWindow, height: '100%', alignItems:'center'}}>
                          
                          <View style={{width:'90%', height:'100%', borderRadius: 20, borderColor:'black', borderWidth:0.5, paddingTop:10, paddingStart: 20, paddingEnd:20, paddingBottom:10}}>
                              <View style={{flexDirection: 'row', justifyContent:'space-between' , marginBottom:5}}>
                                <Text style={{fontSize:15, color:'black'}}>
                                  Họ Và Tên 
                                </Text>
                                <Text style={{color:'green'}}>
                                  {listItemPerSon[index][1]}
                                </Text>
                              </View>
                              <View style={{flexDirection: 'row', justifyContent:'space-between' , marginBottom:5}}>
                                <Text style={{fontSize:15, color:'black'}}>
                                  Số
                                </Text>
                                <Text style={{color:'black'}}>
                                {listItemPerSon[index][0]}
                                </Text>
                              </View>
                              <View style={{flexDirection: 'row', justifyContent:'space-between' , marginBottom:5}}>
                                <Text style={{fontSize:15, color:'black'}}>
                                  Ngày Sinh
                                </Text>

                                <Text style={{color:'black'}}>
                                {listItemPerSon[index][2]}
                                </Text>
                              </View>
                              <View style={{flexDirection: 'row', justifyContent:'space-between' , marginBottom:5}}>
                                <Text style={{fontSize:15, color:'black'}}>
                                  Giới Tính
                                </Text>

                                <Text style={{color:'black'}}>
                                {listItemPerSon[index][3]}
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
                           

                              <View style={{flexDirection: 'row', justifyContent:'space-between' }}>
                                <TouchableOpacity>
                                  <View style={{width:80, height:30, backgroundColor:'#FFE6CD', alignItems:'center', padding:5, borderRadius:20}}>
                                    <Text style={{color: '#FF8306'}}>
                                      Cập Nhật
                                    </Text>
                                  </View>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                  <Icon name="visibility" size={24} color="#FF8306"/>
                                </TouchableOpacity>
                              </View> 
                          </View>
                      </View>
                      )
                  }
                  
                      <View style={{width: widthWindow, height: '100%', alignItems:'center'}}>
                      <View style={{width:'90%', height:'100%', backgroundColor: 'white', borderRadius: 20, borderColor:'black', borderWidth:0.5, paddingTop:10, paddingStart: 20, paddingEnd:20, paddingBottom:10}}>
                    
                  {/* Tạo scanner and add new information */}

                  <View style={{width: '100%', height: '100%', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{marginBottom: 20}}>
                      Bạn chưa có thông tin. Vui lòng nhập hồ sơ
                    </Text>
                    <View style={{width:'100%',flexDirection:'row', justifyContent:'space-around'}}>
                      <TouchableOpacity style={{alignItems:'center', margin:5}} 
                        onPress={() => {
                          navigation.navigate('Newactivity');
                        }}
                      >
                        <Icon name="add" size={35} color="#FF8306" style={{width: 50, height:50, borderWidth:1, padding:8, borderRadius:10, borderColor:'#05850A'}}/>
                        <Text style={{fontWeight:'bold', color:'black'}}>Nhập thông tin</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={{alignItems:'center', margin:5}}
                        onPress={() => {
                          navigation.navigate('Scanneractivity');
                        }}
                      >
                        <Icon name="qr-code" size={35} color="#FF8306" style={{width: 50, height:50, borderWidth:1, padding:8, borderRadius:10, borderColor:'#05850A'}}/>
                        <Text style={{fontWeight:'bold', color:'black'}}>Quét CCCD</Text>
                      </TouchableOpacity>
                     
                    </View>
                  </View>
                </View>
                </View>
                </ScrollView>
                {/* Tạo một ScrollView full Option */}
                
                <View style={{position:'absolute', bottom: '-13%', flexDirection:'row', alignSelf: 'center'}}>
                        {
                            listItemPerSon.map((e1, index1) => 
                                <Text 
                                    style ={cardActive == index1  ? { margin:3,
                                        color:'#05850A', height:20}: { margin:3,
                                            color:'#DBDBDB', height:20}}
                                >
                                  ●
                                </Text>
                            )
                        }
                        <Text 
                                    style ={cardActive >= Number(listDefault.length)  ? { margin:3,
                                        color:'#05850A', height:20}: { margin:3,
                                            color:'#DBDBDB', height:20}}
                                >
                                  ●
                                   {/* {
                                      console.log(cardActive == Number(listDefault.length+1)  ? 'true':'false')

                                   } */}
                                </Text>
                  </View>
            </View>
            {/* set button */}
            <View style={{ width:'100%', height: (0.6*heightWindow), marginTop:20, alignItems:'center'}}>
              <View style={{width: widthWindow, height:'10%', marginTop:10, marginBottom:10, marginStart: 20, marginEnd: 20}}>
                  <ScrollView
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    style={{width: "98%", height: '100%', paddingStart:10, marginEnd:10}}
                  >
                    {
                      listOption.map((e2, index2) =>
                       <TouchableOpacity style={option == index2  ?{marginStart: 10, marginEnd: 10, backgroundColor: '#FF8306', width: 'auto', height: 'auto', paddingTop:10, paddingBottom: 10,paddingStart: 20, paddingEnd: 20, borderRadius: 5}:
                       {marginStart: 10, marginEnd: 10, backgroundColor: '#E1E9E2', width: 'auto', height: 'auto', paddingTop:10, paddingBottom: 10,paddingStart: 20, paddingEnd: 20, borderRadius: 5}}
                       onPress={() =>{
                        const slide1 = index2;
                        if (slide1 != option) {
                          setOption(slide1);
                        }
                       }}>
                        <Text style={option == index2  ?{color:'white'}: {color:'#05850A'}}
                        >
                          {
                            e2.type
                          }
                        </Text>
                    </TouchableOpacity>
                  )
                    }
                  </ScrollView>
                </View>
                <View style={{ width:'90%', height:'70%', backgroundColor:'white', flexDirection: 'column'}}>
                     <View style={{width:'100%', height:'12%', backgroundColor:'white', flexDirection:'row'}}>
                      <View style={{flex: 4, backgroundColor:'#F5F5F5', borderTopStartRadius:10, borderTopEndRadius: 10 }}>
                        <Text style={{textAlign:'center', marginTop:5, fontSize:15, fontWeight:'bold', color: 'black'}}>
                          {
                            listOption[option].content
                          }
                        </Text>
                      </View>
                      <View style={{flex: 6, backgroundColor: 'white', flexDirection:'row', justifyContent:'center'}}>
                        <TouchableOpacity style={{flexDirection:'row',marginTop: 10, marginStart: 10}}
                          onPress={
                            () => {
                              navigation.navigate('Newactivity');
                            }
                          }
                        >
                         
                          <Text style={{fontSize:12, color:'#FF8306',  marginEnd:4}}>
                            Tạo thêm hồ sơ
                          </Text>
                          <Icon name="edit" size={15} color="#FF8306"/>
                        </TouchableOpacity>
                        <TouchableOpacity style={{flexDirection:'row',marginTop: 10, marginStart: 10}}>
                         
                          <Text style={{fontSize:12, color:'#FF8306', marginEnd:4}}>
                            Chỉnh sửa
                          </Text>
                          <Icon name="edit" size={15} color="#FF8306"/>
                        </TouchableOpacity>
                      </View>
                     </View>
                     <View style={{width:'100%', height:'90%', backgroundColor:'#F5F5F5', borderRadius:10, borderTopLeftRadius:0}}>
                        <ScrollView
                          showsHorizontalScrollIndicator={false}
                          style={{width: "100%", height: '100%'}}
                        >
                          <Text style={{fontWeight:'bold', marginStart: 10, color:'black'}}>
                              Đăng kí bậc học
                            </Text>
                          <View style={{width:'100%', height: '100%', flexDirection:'row', flexWrap:'wrap'}}>
                            
                          {
                            listSchool.map((e3, index3) =>
                            <TouchableOpacity style={school == false?{width: 70, height:70, margin: 5, marginTop:20}:{width:0, height:0}}
                            onPress={() =>{
                            setSchool(true);
                            setindexInfor(index3);

                            }}>
                              <Image
                                resizeMode='stretch'
                                style={{width: '100%', height:'100%'}}
                                source={listSchool[index3].image}
                                />
                          </TouchableOpacity>
                          )
                          }
                          {
                            getInforSchool()
                          }
                          
                              
                            
                          </View>
                        </ScrollView>
                     </View>
                </View>
            </View>
        </View>
      </SafeAreaView>
    )
}

export default Mainactivity