import { Platform, StyleSheet, Text, View } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import AntDesign from "react-native-vector-icons/AntDesign";

const HomeScreen = () => {
  return (
    <View style={{ marginTop: Platform.OS == "android" ? 20 : 0 }}>
      <Text>HomeScreen</Text>
      <Icon.Button
        name="facebook"
        backgroundColor="#3b5998"
        onPress={this.loginWithFacebook}
      >
        Login with Facebook
      </Icon.Button>

      <AntDesign name={"arrowright"} size={50} color={"red"} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
