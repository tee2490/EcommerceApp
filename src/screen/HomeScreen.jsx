import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import AntDesign from "react-native-vector-icons/AntDesign";

const HomeScreen = () => {
  return (
    <View>
      <Text>HomeScreen</Text>
      <Icon.Button
        name="facebook"
        backgroundColor="#3b5998"
        onPress={this.loginWithFacebook}
      >
        Login with Facebook
      </Icon.Button>

      <AntDesign name={"arrowright"} size={50} color={'red'} >
   
  </AntDesign>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
