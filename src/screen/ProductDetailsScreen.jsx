import { Image, Platform, StyleSheet, Text, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import Header from "../components/Header";
import { useRoute } from "@react-navigation/native";

const ProductDetailsScreen = () => {
  const route = useRoute();
  const product = route.params.item;

  return (
    <View style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={["rgba(20, 11, 178, 0.8)", "transparent"]}
        style={styles.background}
      />
      <Header />

      <View style={styles.imageContainer}>
        <Image source={{ uri: product.image }} style={styles.coverImage} />
      </View>
    </View>
  );
};

export default ProductDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    marginTop: Platform.OS == "android" ? 25 : 0,
    padding: 10,
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: "100%",
  },
  imageContainer: {
    height: 400,
    width: "100%",
    marginTop: 10,
  },
  coverImage: {
    resizeMode: "cover",
    flex: 1,
  },
});
