import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import AntDesign from "react-native-vector-icons/AntDesign";

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
      <View style={styles.likeContainer}>
        <AntDesign name="hearto" color={'red'} size={15} />
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
  likeContainer: {
    position: "absolute",
    padding: 5,
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    right: 10,
    top: 10,
  },
});

//position: "absolute" แสดงผลทับกันภายในพื้นที่เดียวกันได้ <View style={styles.container}>