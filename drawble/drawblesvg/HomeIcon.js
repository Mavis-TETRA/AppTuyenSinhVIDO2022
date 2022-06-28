import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import { Ionicons } from '@expo/vector-icons'


export default class HomeIcon extends Component {
  render() {
    return (
      <View>
        <Ionicons name="home" size={24} color="black" />
      </View>
    )
  }
}

const styles = StyleSheet.create({})