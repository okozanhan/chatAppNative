import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Box, Button, Center, Checkbox, Flex, Input, Text } from 'native-base'

const Login = () => {
  return (
    <View style={style.container}>
      <Flex direction='column' style={{ height: '100%' }}>
        <Box flex={1} >
          <Text color={'white'}>
            1skskskskks
          </Text>
        </Box>
        <Box flex={2} style={style.downArea}>
          <Center>
            <View style={style.buttonGroup}>

              <Button style={style.group}>Login</Button>
              <Button style={style.group} variant="outline">Register</Button>

            </View>
            <View style={{ width: '90%' }}>
              <Input
                style={style.input}
                mt={5}
                rounded={10}
                placeholder="Mail" />
              <Input
                mt={5}
                rounded={10}
                style={style.input}
                placeholder="Password" />
              <Flex direction='row' alignItems={'center'} justifyContent={'space-between'}>
                <Checkbox value="one" my={2}>
                  Remember Me
                </Checkbox>
                <Text fontSize="xs">
                  Forgot Password?
                </Text>
              </Flex>
              <Button style={style.loginButton} _text={{
                color: "black",
                fontSize: 20
              }}
              >Login</Button>
            </View>
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
    borderRadius: 50

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