import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import { Ionicons } from '@expo/vector-icons'


export default class LightIcon extends Component {
  render() {
    return (
      <View>
        <Ionicons name="flashlight" size={30} color="#F38320" />
      </View>
    )
  }
}

const styles = StyleSheet.create({})