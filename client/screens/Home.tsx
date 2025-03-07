import { View, Text, StyleSheet } from 'react-native'
import React, { useContext } from 'react'
import { AuthContext } from '@/context/authContext'
import FooterMenu from '@/components/Menus/FooterMenu';

const Home = () => {
    //global state
    const {state} = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Text style={styles.userData}>{JSON.stringify(state,null,4)}</Text>
      <FooterMenu />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'space-between',
   
  },
  userData: {
    backgroundColor: '#f9f912',
    margin:10,
    color:"#333"
  }
});