import React from 'react'
import { Image, Text, View, FlatList, StyleSheet } from 'react-native'



const sitesItem = ({ item }) => (
<View style={styles.sites_item}>
<Image
    style={styles.site_icon}
    source={{uri: item.site_icon}}
   />
<Text style={styles.site_name}>{item.site_name}</Text>
</View>
  );

const Sites = ({ item }) => (
<FlatList
    style={styles.sites}
    data={item}
    renderItem={sitesItem}
    keyExtractor={item => item.id}
    showsVerticalScrollIndicator={false}
    />
);

export default Sites;

const styles = StyleSheet.create({
site_icon: {
    width: '10vw',
    height: '10vw',
    margin: 5
  },
site_name: {
    color: 'hsl(274,100%,60%)',
    fontSize: 15,
    fontWeight: '400',
    paddingHorizontal: 10,
    paddingTop: 5
  }
});