import React from 'react'
import { Text, ScrollView, StyleSheet } from 'react-native'

import { item } from './DATA'
import Sites from './Sites'

const Universe = () => (
<ScrollView style={styles.universe} showsVerticalScrollIndicator={false}>
<Text style={styles.question}>{item.question}</Text>
<Sites item={item.sites}/>
</ScrollView>
)

export default Universe;

const styles = StyleSheet.create({
question: {
    fontSize: 12,
    fontWeight: '250',
    paddingHorizontal: 10,
    paddingTop:5
  }
});