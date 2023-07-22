import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { Button } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { LoginStackNavigatorParam } from '../types/LoginStackNavigatorParam';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type homeScreenProp = NativeStackNavigationProp<LoginStackNavigatorParam,"Home">

const Home = () => {

  const navigation = useNavigation<homeScreenProp>()

  return (
    <View style={styles.container}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Image source={require('../assets/images/homeimg.png')} />
      </View>
      <View style={{ backgroundColor: "red", flex: 1 }}>
        <Button rounded="lg" onPress={() => navigation.navigate('Login')}>Click Me</Button>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    width: '100%',
    height: '100%',
    // backgroundColor: "#485461",
    // backgroundImage: " - gradient(315deg, #485461 0 %, #28313b 74 %)",
  }
});



export default Home