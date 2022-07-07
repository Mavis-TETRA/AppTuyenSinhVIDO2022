/* eslint-disable prettier/prettier */
import React, { Component } from "react";
import { useState, useEffect, useRef } from 'react';

import { View, Dimensions, Text, TouchableOpacity } from "react-native";
import QRCodeScanner from "react-native-qrcode-scanner";
import Icon from "react-native-vector-icons/MaterialIcons";
import * as Animatable from "react-native-animatable";
import {openDatabase} from 'react-native-sqlite-storage';


const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;

console.disableYellowBox = true;
const db = openDatabase(
  {
    name: 'studentdb',
  },
);
// ["074202000079", "Trần Minh Tân", "07092002", "Nam", "361/12 Đường An Nhơn Tây, Tổ 1, Ấp Ba Sòng, An Nhơn Tây, Củ Chi, TP.Hồ Chí Minh", "11022022"]
function Scanneractivity({navigation})  { //extends Component
  const addData = (data) => {
    // const genderConvert = 0;
    if (data[3] == "Nam") {
      const genderConvert = 1;
    }else {
      const genderConvert = 0;
    }
    db.transaction(txn => {
      txn.executeSql(
        `INSERT INTO users (hoten, gioitinh , cardid , phonenumber, datebirth, cardimgtop, cardimgbt) VALUES (?,?,?,?,?,?,?)`,
        [data[1],data[3], data[0], "0398802442", "07/09/2002", null, null],
        (sqlTxn, res) => {
          console.log(`${data[1]} category added successfully`);
          navigation.navigate('Mainactivity')
        },
        error => {
          console.log("error on adding category " + error.message);
        },
      );
    });
  };


  const onSuccess = (e) => {
    if ((e.data).indexOf("|") > -1) {
      const replaceData = (e.data).replace('||', '|');
      const split = replaceData.split('|');
      alert(split);
      console.log(split);
      addData(split);
    }else {
      alert("Mời bạn Scan lại QR Code");
    }
    
    
  }

  const makeSlideOutTranslation = (translationType, fromValue) => {
    return {
      from: {
        [translationType]: SCREEN_WIDTH * -0.18
      },
      to: {
        [translationType]: fromValue
      }
    };
  }

  
    return (
      <QRCodeScanner
        showMarker
        onRead={onSuccess.bind(this)}
        cameraStyle={{ height: SCREEN_HEIGHT }}
        customMarker={
          <View style={styles.rectangleContainer}>
            <View style={styles.topOverlay}>
              <TouchableOpacity style={{margin:20}} 
                onPress={() => {
                  navigation.goBack();
                }}
              >
                <Icon style={{}} name="close" size={24} color='white'/>
              </TouchableOpacity>
            </View>

            <View style={{ flexDirection: "row" }}>
              <View style={styles.leftAndRightOverlay} />

              <View style={styles.rectangle}>
                {/* <Icon
                  name="qr-code-scanner"
                  size={SCREEN_WIDTH * 0.73}
                  color={iconScanColor}
                /> */}
                <View style={{width:SCREEN_WIDTH * 0.73, height: SCREEN_WIDTH * 0.73}}></View>
                <Animatable.View
                  style={styles.scanBar}
                  direction="alternate-reverse"
                  iterationCount="infinite"
                  duration={1700}
                  easing="linear"
                  animation={makeSlideOutTranslation(
                    "translateY",
                    SCREEN_WIDTH * -0.54
                  )}
                />
              </View>

              <View style={styles.leftAndRightOverlay} />
            </View>

            <View style={styles.bottomOverlay} >
              <View style={{top: 10,flexDirection: 'row', justifyContent: 'center'}}>
                <Text style={{color: 'white'}}>
                  Căn mã CCCD vào ô này.
                </Text>
              </View>
              <View style={{position:'absolute', bottom: 20, left:'35%', borderWidth: 1, width:'30%', height: '20%', borderRadius: 20, padding:8, borderColor:'white'}}>
                <Text style={{color: 'white', textAlign:'center'}}>
                  Quét CCCD
                </Text>
              </View>
            </View>
          </View>
        }
      />
    );
  
}

const overlayColor = "rgba(0,0,0,0.5)"; // this gives us a black color with a 50% transparency

const rectDimensions = SCREEN_WIDTH * 0.65; // this is equivalent to 255 from a 393 device width
const rectBorderWidth = SCREEN_WIDTH * 0.005; // this is equivalent to 2 from a 393 device width
const rectBorderColor = "#FF8306";

const scanBarWidth = SCREEN_WIDTH * 0.46; // this is equivalent to 180 from a 393 device width
const scanBarHeight = SCREEN_WIDTH * 0.0025; //this is equivalent to 1 from a 393 device width
const scanBarColor = "#22ff00";

const iconScanColor = "blue";

const styles = {
  rectangleContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent"
  },

  rectangle: {
    height: rectDimensions,
    width: rectDimensions,
    borderWidth: rectBorderWidth,
    borderColor: rectBorderColor,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent"
  },

  topOverlay: {
    flex: 1,
    height: SCREEN_WIDTH,
    width: SCREEN_WIDTH,
    backgroundColor: overlayColor,
    position:'relative'
  },

  bottomOverlay: {
    flex: 1,
    height: SCREEN_WIDTH,
    width: SCREEN_WIDTH,
    backgroundColor: overlayColor,
    paddingBottom: SCREEN_WIDTH * 0.25,
    position: 'relative'
  },

  leftAndRightOverlay: {
    height: SCREEN_WIDTH * 0.65,
    width: SCREEN_WIDTH,
    backgroundColor: overlayColor
  },

  scanBar: {
    width: scanBarWidth,
    height: scanBarHeight,
    backgroundColor: scanBarColor
  }
};

export default Scanneractivity;