import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import { Ionicons } from '@expo/vector-icons'


export default class PersonIcon extends Component {
  render() {
    return (
      <View>
        <Ionicons name="person-outline" size={24} color="#898989" />
      </View>
    )
  }
}

const styles = StyleSheet.create({})