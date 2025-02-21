import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'



const InputBox = (props) => {
    const {
        inputTitle,
        autoComplete,
        keyboardType,
        secureTextEntry=false,
        value,
        setValue,
    } = props; //destructering the props
  return (
    <View>
     <Text>{inputTitle}</Text>
     <TextInput 
     style={styles.inputBox} 
     autoCorrect={false}
     keyboardType={keyboardType}
     autoComplete={autoComplete}
     secureTextEntry={secureTextEntry}
     value={value}
     onChangeText={(e)=>setValue(e)}

     />
    </View>
  )
}

export default InputBox

const styles =StyleSheet.create({
   inputBox: {
    height: 40,
    marginBottom: 20,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    marginTop: 10,
    paddingLeft: 10,
    color: "#333",
  },
});