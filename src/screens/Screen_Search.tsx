import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { theme } from '../config/app.variables'
import SearchTab from '../components/SearchTab'

const Screen_Search = () => {
  return (
    <View style={styles.main}>
      <SearchTab />
      <Text>Screen_Search</Text>
    </View>
  )
}

export default Screen_Search

const styles = StyleSheet.create({
  main:{
    backgroundColor: theme.primary,
    flex:1
  }
})