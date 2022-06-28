import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import { Ionicons } from '@expo/vector-icons'


export default class QrIcon extends Component {
  render() {
    return (
      <View>
        <Ionicons name="qr-code" size={30} color="black" />
      </View>
    )
  }
}

const styles = StyleSheet.create({})