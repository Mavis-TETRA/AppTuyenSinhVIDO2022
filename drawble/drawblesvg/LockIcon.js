import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import { Ionicons } from '@expo/vector-icons'


export default class LockIcon extends Component {
  render() {
    return (
      <View>
       <Ionicons name="lock-closed-outline" size={24} color="#898989" />
      </View>
    )
  }
}

const styles = StyleSheet.create({})