import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import { Ionicons } from '@expo/vector-icons'


export default class MailIcon extends Component {
  render() {
    return (
      <View>
       <Ionicons name="mail-outline" size={24} color="#898989" />
      </View>
    )
  }
}

const styles = StyleSheet.create({})