import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import { Ionicons } from '@expo/vector-icons'


export default class ArrowCircleLeft extends Component {
  render() {
    return (
      <View>
       <Ionicons name="arrow-back-circle-outline" size={40} color="#F38320" />
      </View>
    )
  }
}

const styles = StyleSheet.create({})