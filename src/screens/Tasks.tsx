import {View, SafeAreaView, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import CustomHeader from '../components/CustomHeader';
import CustomCalendarCard from '../components/customCalendarCard';

import {
  Avatar,
  Badge,
  Box,
  Center,
  Flex,
  Input,
  ScrollView,
  VStack,
  Text,
  Card,
} from 'native-base';
import MaterialIcon from '../components/MaterialIcon';
import TaskCard from '../components/TaskCard';

const Tasks = () => {
  return (
    <SafeAreaView style={{height: '100%', backgroundColor: 'black'}}>
      <Flex direction="column" style={{height: '100%'}}>
        <Box flex={2} style={styles.title}>
          <Flex direction="column">
            <Box>
              <CustomHeader />
            </Box>
            <ScrollView horizontal={true}>
              <CustomCalendarCard />
              <CustomCalendarCard />
              <CustomCalendarCard />
              <CustomCalendarCard />
              <CustomCalendarCard />
            </ScrollView>
          </Flex>
        </Box>
        <Box flex={8} style={styles.messages}>
          <Center mt={2}>
            <Badge
              color={'rgb(245,221,251)'}
              backgroundColor={'rgb(245,221,251)'}
              rounded={'xl'}>
              Today
            </Badge>
          </Center>
          <ScrollView padding={5}>
            <TaskCard />
          </ScrollView>
        </Box>
      </Flex>
    </SafeAreaView>
  );
};

export default Tasks;

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
    justifyContent: 'center',
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
    padding: 5,
  },
  messageLeft: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginLeft: 15,
  },
  messages: {
    backgroundColor: 'white',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  titleflex: {
    color: 'white',
  },
  messageBuble: {
    // backgroundColor: 'red',
    padding: 10,

    margin: 7,
    maxWidth: '60%',
    borderRadius: 20,
    alignSelf: 'flex-start',
    color: 'rgb(118,118,116)',
    fontWeight: 'bold',
  },
  buttonContainer: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: 'rgb(32,27,23)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
