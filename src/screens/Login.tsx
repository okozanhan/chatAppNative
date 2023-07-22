import { StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import { Box, Button, Center, Checkbox, Divider, Flex, Input, KeyboardAvoidingView, Text } from 'native-base'
import { Controller, Form, useForm } from 'react-hook-form'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { LoginStackNavigatorParam } from '../types/LoginStackNavigatorParam'
import { useNavigation } from '@react-navigation/native'

type LoginScreenProp = NativeStackNavigationProp<LoginStackNavigatorParam, 'Login'>

const Login = () => {
  const navigation = useNavigation<LoginScreenProp>()
  const [selected, setselected] = useState('login')
  const {
    control,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm({ mode: 'onBlur' })

  const {
    control: control2,
    handleSubmit: handleSubmit2,
    formState: { errors: errors2 },
  } = useForm({
    mode: "onBlur",
  });

  const handlelogin = (data: any) => {
    if (data.email.toLowerCase() == 'admin' && data.password.toLowerCase() == 'admin') {
      // navigation.navigate('Messages')
    }
  }

  const handleregister = (data: any) => {
    console.log(data)
  }

  const registerForm = () => {
    return (
      <View style={{ width: '90%' }}>
         <Controller
          control={control2}
          name="fullname"
          render={({ field: { onChange, value, onBlur } }) => (
            <Input
              style={style.input}
              mt={5}
              rounded={10}
              placeholder="Full Name"
              value={value}
              onBlur={onBlur}
              onChangeText={value => onChange(value)}
            />
          )}

        />
         <Controller
          control={control2}
          name="email"
          render={({ field: { onChange, value, onBlur } }) => (
            <Input
              style={style.input}
              mt={5}
              rounded={10}
              placeholder="Mail"
              value={value}
              onBlur={onBlur}
              onChangeText={value => onChange(value)}
            />
          )}

        />

        <Controller
          control={control2}
          name="password"
          render={({ field: { onChange, value, onBlur } }) => (
            <Input
              mt={5}
              rounded={10}
              style={style.input}
              placeholder="Password"
              value={value}
              onBlur={onBlur}
              type='password'
              onChangeText={value => onChange(value)}
            />
          )}
        />
         <Button mt={5} style={style.loginButton} _text={{
          color: "black",
          fontSize: 20
        }}
          onPress={handleSubmit2(handleregister)}
        >Register</Button>
      </View>
    )
  }

  const loginForm = () => {
    return (
      <View style={{ width: '90%' }}>
        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, value, onBlur } }) => (
            <Input
              style={style.input}
              mt={5}
              rounded={10}
              placeholder="Mail"
              value={value}
              onBlur={onBlur}
              onChangeText={value => onChange(value)}
            />
          )}

        />

        <Controller
          control={control}
          name="password"
          render={({ field: { onChange, value, onBlur } }) => (
            <Input
              mt={5}
              rounded={10}
              style={style.input}
              placeholder="Password"
              value={value}
              onBlur={onBlur}
              type='password'
              onChangeText={value => onChange(value)}
            />
          )}
        />

        <Flex mt={2} direction='row' alignItems={'center'} justifyContent={'space-between'}>
          <Checkbox value="one" my={2}>
            Remember Me
          </Checkbox>
          <Text fontSize="xs">
            Forgot Password?
          </Text>
        </Flex>
        <Button mt={2} style={style.loginButton} _text={{
          color: "black",
          fontSize: 20
        }}
          onPress={handleSubmit(handlelogin)}
        >Login</Button>

        <Flex direction='row' alignItems={'center'} mt={3}>
          <Divider width={'35%'} thickness="2" mx="2" orientation="horizontal" />
          <Text>Or login with</Text>
          <Divider width={'35%'} thickness="2" mx="2" orientation="horizontal" />
        </Flex>
        <Flex mt={3} direction='row' justifyContent={'center'}>
          <Button flex={1} mr={1} variant="outline">Google</Button>
          <Button flex={1} variant="outline">FaceBook</Button>
        </Flex>
      </View>
    )
  }




  return (
    <View style={style.container}>

      <Flex direction='column' style={{ height: '100%' }}>

        <Box flex={1} alignItems={'center'} justifyContent={'center'}>
          <Text fontSize="4xl" style={style.text1} >
            Set Up Your Accounts!
          </Text>
          <Text fontSize="xs" style={style.text1} >
            Set Up Your Accounts!
          </Text>
        </Box>
        <Box flex={2} style={style.downArea}>
          <Center>
            <View style={style.buttonGroup}>

              <Button onPress={() => setselected('login')} style={selected == 'login' ? style.selectedgroup : style.group} _text={{
                color: 'rgb(166,167,170)', fontWeight: 'bold'
              }}>Login</Button>
              <Button onPress={() => setselected('register')} style={selected == 'register' ? style.selectedgroup : style.group} _text={{
                color: 'rgb(166,167,170)', fontWeight: 'bold'
              }}>Register</Button>

            </View>
            {selected == 'login' ? loginForm() : registerForm()}
          </Center>
        </Box>
      </Flex>
    </View>
  )
}
const style = StyleSheet.create({
  downArea: {
    backgroundColor: 'white',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50
  },
  text1: {
    // fontSize: 40,
    color: "white"
  },
  input: {
    height: 45,
  },
  loginButton: {
    backgroundColor: "#F4E0B9",
    borderRadius: 30,

  },

  container: {
    backgroundColor: 'black'
  },
  buttonGroup: {
    width: '90%',
    backgroundColor: 'rgb(235,237,239)',
    borderRadius: 40,
    height: 60,
    marginTop: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  group: {
    width: '48%',
    height: 50,
    borderRadius: 50,
    backgroundColor: 'transparent',
    color: 'rgb(166,167,170)'

  },
  selectedgroup: {
    width: '48%',
    height: 50,
    borderRadius: 50,
    backgroundColor: "#F4E0B9",
    color: 'rgb(166,167,170)'

  },
  roundButtonLeft: {
    borderTopLeftRadius: 40,
    width: '50%',
    borderBottomLeftRadius: 40
  },
  roundButtonRight: {
    borderTopRightRadius: 40,
    width: '50%',
    borderBottomRightRadius: 40
  },
})
export default Login