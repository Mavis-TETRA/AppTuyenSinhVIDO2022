import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import { Ionicons } from '@expo/vector-icons'


export default class CirclePersonIcon extends Component {
  render() {
    return (
      <View>
        <Ionicons name="person-circle" size={30} color="#cccccc" />
      </View>
    )
  }
}

const styles = StyleSheet.create({})