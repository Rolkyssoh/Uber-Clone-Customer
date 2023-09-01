import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles'

const CovidMessage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Travel only if necessary</Text>
      <Text style={styles.text}>This is some dummy paragraph that will bee display after the title This is some dummy paragraph that will bee display after the title</Text>
      <Text style={styles.learnMore}>Learn more</Text>
    </View>
  )
}

export default CovidMessage