import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import { Ionicons } from '@expo/vector-icons'


export default class KeyIcon extends Component {
  render() {
    return (
      <View>
        <Ionicons name="key" size={30} color="#cccccc" />
      </View>
    )
  }
}

const styles = StyleSheet.create({})