import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import AntDesign from "react-native-vector-icons/AntDesign";

const ProductCard = ({ item, toggleFavorite, handleProductClick }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => handleProductClick(item)}
    >
      <Image source={{ uri: item.image }} style={styles.coverImage} />
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>${item.price}</Text>
      </View>

      <TouchableOpacity
        onPress={() => toggleFavorite(item)}
        style={styles.likeContainer}
      >
        {item?.isFavorite ? (
          <AntDesign name="heart" color={"red"} size={15} />
        ) : (
          <AntDesign name="hearto" color={"red"} size={15} />
        )}
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default ProductCard;

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
