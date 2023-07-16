import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={{backgroundColor:'blue',flex:1,alignItems:'center',justifyContent:'center'}}>
        <Image source={require('../assets/images/homeimg.png')} />
      </View>
      <View style={{backgroundColor:'green',flex:1}}>

      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    width: '100%',
    height: '100%'
  }
});

export default Home