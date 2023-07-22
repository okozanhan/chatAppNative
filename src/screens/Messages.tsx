import { StyleSheet, Image } from 'react-native'
import React from 'react'
import { Avatar, Box, Button, Flex, Text, View } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { LoginStackNavigatorParam } from '../types/LoginStackNavigatorParam';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
// import Icon from 'react-native-vector-icons/MaterialIcons';

type messagesScreemProp = NativeStackNavigationProp<LoginStackNavigatorParam, "Messages">


const Messages = () => {

    const navigation = useNavigation<messagesScreemProp>()

    return (
        <View style={styles.container}>
            <Flex direction='column' style={{ height: '100%' }}>
                <Box style={styles.box1} flex={1} >
                    <Text style={styles.text1} color={'white'}>
                        Welcome User
                    </Text>

                    {/* <Icon name="gesture" size={30} color="#900" /> */}
                    <Avatar bg="green.500" style={{ width: 75, height: 75 }} source={{
                        uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                    }}>
                        AJ
                    </Avatar>
                </Box>
                <Box style={styles.box2} flex={2} >
                    <Text color={'black'}>
                        1skskskskks
                    </Text>
                </Box>

            </Flex>
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
        marginTop: 10,
        marginBottom: 20
    },
    box1: {
        backgroundColor: "black",
    },
    box2: {
        backgroundColor: "white",
        borderTopStartRadius: 50,
        borderTopEndRadius: 50
    }
});

export default Messages