

import React from 'react';

import {
  StyleSheet,
  View,
  Text,
  Button,
  Alert
} from 'react-native';

const App = () => {
  
  const CreateKey = () => {
    var key = ""
    var characters = 'QWERTYUIOPASDFGHJKLZXCVBNMqwertyuopasdfghjklizxcvbnm0123456789!?'
    var keys = []
    var charactersLength = characters.length

    for (let index = 0; index < 25; index++) {

      keys.push(characters.charAt(Math.floor((Math.random() * charactersLength))))
    }
    key=keys.join('')
    Alert.alert
    (
      "Key Anahtarınız:",
      key
    )
  }
  return (
    <View style={styles.container}>
      <Text style={styles.key}>Random Key </Text>
      <Button
        onPress={CreateKey}
        title="Get Key"
        color="#841584"
      />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: 'grey',
    flex: 1
  },
  key: {
    fontSize: 20,
    marginTop: 10
  },
})

export default App;
