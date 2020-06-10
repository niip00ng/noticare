import React from 'react';
import messaging from '@react-native-firebase/messaging';
import { AppRegistry } from 'react-native';
import {
  View,
  Text,
  StatusBar,
} from 'react-native';

// Register background handler
messaging().setBackgroundMessageHandler(async remoteMessage => {
  console.log('Message handled in the background!', remoteMessage);
});

const App = () => {
  return (
    <>
      <View><Text>초기화면</Text></View>
    </>
  );
};

export default App;
