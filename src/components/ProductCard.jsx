import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const ProductCatd = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/girl2.png")}
        style={styles.coverImage}
      />
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Test</Text>
        <Text style={styles.price}>$9.99</Text>
      </View>
    </View>
  );
};

export default ProductCatd;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  coverImage: {
    height: 256,
    width: "100%",
    borderRadius: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    color: "#444444",
  },
  price: {
    fontSize: 18,
  },
  contentContainer: {
    padding: 10,
  },
});
