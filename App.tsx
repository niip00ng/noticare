import React, {useEffect} from 'react';
import messaging from '@react-native-firebase/messaging';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {AppRegistry} from 'react-native';
import {View, Text, StatusBar} from 'react-native';

// Register background handler
messaging().setBackgroundMessageHandler(async remoteMessage => {
    console.log('Message handled in the background!', remoteMessage);
});

async function saveTokenToDatabase(token : string) {
    // Assume user is already signed in Add the token to the users datastore
    await firestore()
        .collection('users')
        .doc('11111')
        .update({
            tokens: firestore
                .FieldValue
                .arrayUnion(token)
        });
}

const App = () => {
    useEffect(() => {
        // Get the device token
        messaging()
            .getToken()
            .then(token => {
              console.log(token)
              
                return saveTokenToDatabase(token);
            });

        // Listen to whether the token changes
        return messaging().onTokenRefresh(token => {
            saveTokenToDatabase(token);
        });
    }, []);

    return (
        <View>
          <Text>start</Text>
        </View>
    )
};

export default App;
