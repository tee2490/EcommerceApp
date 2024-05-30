import { Image, StyleSheet, View } from "react-native";
import React from "react";

const ProductCatd = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/girl2.png")}
        style={styles.coverImage}
      />
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
});


