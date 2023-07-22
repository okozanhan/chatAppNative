import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { Box, Button } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { LoginStackNavigatorParam } from '../types/LoginStackNavigatorParam';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type homeScreenProp = NativeStackNavigationProp<LoginStackNavigatorParam, "Home">

const Home = () => {

  const navigation = useNavigation<homeScreenProp>()

  return (
    <View style={styles.container}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Image style={{ width: 150, height: 150 }} source={require('../assets/images/chatImg1.png')} />
      </View>
      <View style={{ flex: 1 }}>
        <Box >
          <Text style={styles.text1}>
            It's easy talking to your friends with chatApp
          </Text>
          <Text style={styles.text2}>
            Okan && Kübra first project.. Since 2023
          </Text>
        </Box>
        <Box alignItems={"center"} >
          <Button style={styles.button} _text={{
            color: "black",
            fontSize: 20
          }}
            onPress={() => navigation.navigate('Login')}
          >Get Started</Button>
        </Box>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    width: '100%',
    height: '100%',
  },
  text1: {
    fontSize: 40,
    margin: 10,
    color: "white"
  },
  text2: {
    color: "gray",
    margin: 20
  },
  button: {
    backgroundColor: "#F4E0B9",
    color: "green",
    borderRadius: 30,
    width: "90%",
    paddingTop: 20,
    paddingBottom: 20,
  }
});



export default Home