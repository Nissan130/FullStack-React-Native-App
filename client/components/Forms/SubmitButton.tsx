import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

const SubmitButton = (props) => {
    const {btnTitle, loading, handleSubmit} = props;
  return (
    <TouchableOpacity style={styles.submitBtn} activeOpacity={0.8} onPress={handleSubmit}>
        <Text style={styles.btnTitle}>{loading?'Please Wait...':btnTitle}</Text>
    </TouchableOpacity>
  )
}

export default SubmitButton

const styles = StyleSheet.create({
    submitBtn: {
        // backgroundColor:"#1e2225",
        backgroundColor:"blue",
        marginHorizontal:20,
        borderRadius:10,
        height:50,
        justifyContent:'center',
        marginBottom:15
    },
    btnTitle: {
         color:'#fff',
         textAlign:'center',
         fontSize:20,
         fontWeight:'500'
    }
});