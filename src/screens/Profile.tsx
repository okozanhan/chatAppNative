import {View, StyleSheet} from 'react-native';
import React from 'react';
import {
  Avatar,
  Box,
  Button,
  Card,
  Center,
  Divider,
  Flex,
  HStack,
  Icon,
  Switch,
  Text,
  VStack,
} from 'native-base';
import CustomHeader from '../components/CustomHeader';
import MaterialIcon from '../components/MaterialIcon';

const Profile = () => {
  return (
    <View>
      <Flex direction="column" style={{height: '100%'}}>
        <Box flex={1} style={styles.container}>
          <CustomHeader />
          <Center style={{justifyContent: 'center'}}>
            <Avatar
              bg="cyan.500"
              alignSelf="center"
              size="xl"
              source={{
                uri: 'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
              }}>
              {' '}
              HS
            </Avatar>
            <Text mt={5} color={'white'}>
              Kübra Göktaş
            </Text>
          </Center>
        </Box>

        <Box flex={2} pr={10} pl={10} mt={5}>
          <Text fontSize={'lg'} bold>
            User Settings
          </Text>
          <HStack style={styles.settingboxes}>
            <HStack>
              <Box>
                <MaterialIcon size="large" name="account-circle" />
              </Box>
              <Text style={styles.settingBoxText}>Change info</Text>
            </HStack>
            <Box>
              <MaterialIcon size="medium" name="chevron-right" />
            </Box>
          </HStack>
          <Text style={styles.settingtitle} fontSize={'lg'} bold>
            App Settings
          </Text>
          <HStack style={styles.settingboxes}>
            <HStack>
              <Box>
                <MaterialIcon size="large" name="bell-circle" />
              </Box>
              <Text style={styles.settingBoxText}>
                Enable/Disable notifications
              </Text>
            </HStack>
            <Box>
              <Switch size="sm" />
            </Box>
          </HStack>
          <HStack style={styles.settingboxes}>
            <HStack>
              <Box>
                <MaterialIcon size="large" name="theme-light-dark" />
              </Box>
              <Text style={styles.settingBoxText}>
                Enable/Disable dark mode
              </Text>
            </HStack>
            <Box>
              <Switch size="sm" />
            </Box>
          </HStack>
        </Box>
        <Button backgroundColor={'black'} leftIcon={<MaterialIcon size="large" name="logout" color='white'/>}>
          <Text color={'white'}>Log Out</Text>
        </Button>
      </Flex>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    width: '100%',
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
    color: 'white',
    // justifyContent: 'center'
  },
  settingboxes: {
    height: '10%',
    // backgroundColor:'red',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomColor: 'rgb(197,197,199)',
    borderBottomWidth: 1,
  },
  settingBoxText: {
    marginLeft: 10,
  },
  settingtitle: {
    marginTop: 30,
  },
});

export default Profile;
