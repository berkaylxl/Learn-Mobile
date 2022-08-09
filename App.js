
import React,{useState} from 'react';
import { styles } from './Style'
import {
  SafeAreaView,
  View,
  Text,
  Button,
  TextInput,
  TouchableOpacity
} from 'react-native';

const App = () => {
   const [key, setkey] = useState("")
   const CreateKey = () => {
    var keys = []
    var characters = 'QWERTYUIOPASDFGHJKLZXCVBNMqwertyuopasdfghjklizxcvbnm0123456789!?'
    var charactersLength = characters.length

    for (let index = 0; index < 25; index++) {
      keys.push(characters.charAt(Math.floor((Math.random() * charactersLength))))
    }
    setkey(keys.join(''))
  } 

  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex:1,backgroundColor:"white",borderBottomWidth:2,}}>
      <Text style={styles.key}>Random Key </Text>
      <Button
        style={{margin:10}}
        onPress={CreateKey}
        title="Get Key"
        color="#841584"></Button>
        <Text style={{
          margin:10,
          borderWidth:1,
          padding:10,
          borderColor:"purple",fontWeight:'bold'}}>{key}</Text>
      </View>
       {/* -------------------------------------Login View*/}
      <View style={{flex:2,alignItems:'center',justifyContent:"center"}}>
       <TextInput 
       placeholder='UserName' 
       style={styles.logintexttBox}>

       </TextInput>
       <TextInput
        secureTextEntry={true}
        placeholder='Password' 
        style={styles.logintexttBox}>
        </TextInput>
        <TouchableOpacity style={styles.touchable}>
          <Text style={{textAlign:'center',color:"white"}}>Login</Text>
        </TouchableOpacity>

      </View>
      <View></View>
    </SafeAreaView>
  )
}
export default App;
