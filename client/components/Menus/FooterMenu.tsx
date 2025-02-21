import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const FooterMenu = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <FontAwesome5 name="home" style={styles.footerIcon} />
        <Text>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <FontAwesome5 name="plus-square" style={styles.footerIcon} />
        <Text>Post</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <FontAwesome5 name="info-circle" style={styles.footerIcon} />
        <Text>About</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <FontAwesome5 name="user-circle" style={styles.footerIcon} />
        <Text>Acount</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FooterMenu;
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderTopWidth: 1,
    borderColor: "#ddd",
    paddingTop: 3,
    backgroundColor: "cyan",
    padding: 10,
  },
  footerIcon: {
    marginBottom: 3,
    alignSelf: "center",
    fontSize: 23,
  },
});
