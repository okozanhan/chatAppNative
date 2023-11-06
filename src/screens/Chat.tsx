import { SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Avatar, Badge, Box, Center, Flex, HStack, Input, ScrollView, Text, VStack, View } from 'native-base'
import MaterialIcon from '../components/MaterialIcon'
import { ChatMessage } from '../types/ChatMessage'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { LoginStackNavigatorParam } from '../types/NavigatorParam'

type LoginScreenProp = NativeStackNavigationProp<LoginStackNavigatorParam, 'Login'>

const Chat = () => {
    const [messages, setmessages] = useState<ChatMessage[] | undefined>([])
    const navigation = useNavigation<LoginScreenProp>()


    useEffect(() => {
        setmessages([{
            UserId: '1',
            Message: 'Merhaba'
        },
        {
            UserId: '2',
            Message: 'Merhaba'
        },
        {
            UserId: '1',
            Message: 'Nasılsın?'
        },
        {
            UserId: '2',
            Message: 'Teşekkür ederim'
        },
        {
            UserId: '2',
            Message: 'Sağlığınıza Duacıyım'
        },
        {
            UserId: '2',
            Message: 'Sizler de Afiyettesiniz İnşallah.Sizler de Afiyettesiniz İnşallah'
        }])
    }, [])


    return (
        <SafeAreaView style={{ height: '100%', backgroundColor: 'black' }}>
            <Flex direction='column' style={{ height: '100%' }}>
                <Box flex={1} style={styles.title}>
                    <Flex style={styles.titleflex} direction='row' >
                        <Box flex={2}>
                            <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.goBack()}>
                                <Box style={styles.buttonContainer}>
                                    <MaterialIcon name='chevron-left' color='white' size='large' />
                                </Box>
                            </TouchableOpacity>
                        </Box>
                        <Box flex={8}>
                            <Flex direction='row' alignItems={'center'} >
                                <Avatar />
                                <VStack backgroundColor={'red'} ml={2}>
                                    <Text color={'white'}>Kübra Göktaş</Text>
                                    <Text color={'rgb(96,93,90)'} fontSize={'xs'} fontWeight={'bold'}>Online</Text>
                                </VStack>
                            </Flex>
                        </Box>
                        <Box flex={1}>
                            <MaterialIcon name='more-vert' color='white' size='large' />

                        </Box>
                    </Flex>

                </Box>
                <Box flex={6} style={styles.messages}>
                    <Center mt={2}>
                        <Badge color={'rgb(245,221,251)'} backgroundColor={'rgb(245,221,251)'} rounded={'xl'}>Today</Badge>
                    </Center>
                    <ScrollView>
                        {
                            messages?.map((item, key) => {
                                return <Flex direction='row' width={'100%'} display={'flex'} style={item.UserId == '1' ? styles.messageRight : styles.messageLeft}>
                                    <Box key={key} backgroundColor={item.UserId == '1' ? 'rgb(248,248,249)' : '#F4E0B9'} style={styles.messageBuble}>
                                        <Text fontWeight={'medium'} color={'rgb(118,118,116)'}>{item.Message}</Text>

                                    </Box>
                                </Flex>
                            })
                        }
                    </ScrollView>
                    <Box style={styles.textBox}>
                        <Flex direction='row' alignItems={'center'}>
                            <Input flex={10} mx="3" placeholder="Message..." w="100%" h="100%" borderColor={'transparent'} />
                            <Box style={styles.sendButton}>
                                <MaterialIcon name='send' color='rgb(125,175,222)' size='large' />

                            </Box>
                        </Flex>
                    </Box>
                </Box>

            </Flex>
        </SafeAreaView>
    )
}

export default Chat

const styles = StyleSheet.create({
    title: {
        // backgroundColor: 'red',
        // color: 'white'

    },
    messageRight: {
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        paddingRight: 15,
        // backgroundColor:'red'

    },
    sendButton: {
        backgroundColor: 'rgb(230,242,254)',
        height: 40,
        width: 40,
        borderRadius: 40,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textBox: {
        backgroundColor: 'rgb(248,248,249)',
        // backgroundColor: 'green',
        // width: '100%',
        alignItems: 'center',


        justifyContent: 'center',
        height: '10%',
        margin: 15,
        borderRadius: 30,
        padding: 5

    },
    messageLeft: {
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        marginLeft: 15,
    },
    messages: {
        backgroundColor: 'white',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50

    },
    titleflex: {
        color: 'white',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        height: '100%',
        alignItems: 'center'

    },
    messageBuble: {
        // backgroundColor: 'red',
        padding: 10,

        margin: 7,
        maxWidth: '60%',
        borderRadius: 20,
        alignSelf: 'flex-start',
        color: 'rgb(118,118,116)',
        fontWeight: 'bold'


    },
    buttonContainer: {
        width: 50,
        height: 50,
        borderRadius: 50,
        backgroundColor: 'rgb(32,27,23)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'

    }

})