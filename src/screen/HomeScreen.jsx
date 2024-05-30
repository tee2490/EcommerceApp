import {
  Platform,
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  FlatList,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import Header from "../components/Header";
import Category from "../components/Category";
import ProductCard from "../components/ProductCard";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={["rgba(0,0,0,0.5)", "transparent"]}
        style={styles.background}
      />
      <Header />
      <Text style={styles.headingText}>Match Your Style</Text>
      <View style={styles.inputContainer}>
        <Image
          source={require("../assets/search.png")}
          style={styles.searchIcon}
        />
        <TextInput placeholder="Search" style={styles.textInput} />
      </View>

      <Category />

      <FlatList
        numColumns={2}
        data={[1, 2, 3, 4, 5]}
        renderItem={ProductCard}
      />
   
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    marginTop: Platform.OS == "android" ? 25 : 0,
    padding: 20,
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 300,
  },
  headingText: {
    fontSize: 28,
    color: "#000000",
    marginVertical: 20,
  },
  inputContainer: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    height: 48,
    borderRadius: 12,
    alignItems: "center",
    flexDirection: "row",
  },
  searchIcon: {
    height: 26,
    width: 26,
    marginHorizontal: 12,
  },
  textInput: {
    fontSize: 18,
  },
});
