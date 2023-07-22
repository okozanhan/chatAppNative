import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { Box, Button, Flex } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { LoginStackNavigatorParam } from '../types/LoginStackNavigatorParam';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type messagesScreemProp = NativeStackNavigationProp<LoginStackNavigatorParam, "Messages">


const Messages = () => {

    const navigation = useNavigation<messagesScreemProp>()

    return (
        <View style={styles.container}>
            <Flex direction='column'>
                <Box flex={1}>
                    <Text>
                        asdasd
                    </Text>
                </Box>
                <Box flex={2}>
                    <Text>
                        asdasd
                    </Text>
                </Box>
            </Flex>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // display: "flex",
        backgroundColor: 'gray',
        width: '100%',
        height: '100%',
    },
    box1: {
        // flex: 1,
        backgroundColor: "green",
        // height: "50%"
    },
    box2: {
        // flex: 1,
        borderColor: "white"
    }
});

export default Messages