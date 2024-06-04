import "react-native-gesture-handler";
import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./src/screen/HomeScreen";
import Entypo from "react-native-vector-icons/Entypo";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductDetailsScreen from "./src/screen/ProductDetailsScreen";
import CartScreen from "./src/screen/CartScreen";
import { CartContext, CartProvider } from "./src/Context/CartContext";
import { Button, StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const MyHomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="HomeScreen"
    >
      <Stack.Screen name="HOME" component={HomeScreen} />
      <Stack.Screen name="PRODUCT_DETAILS" component={ProductDetailsScreen} />
    </Stack.Navigator>
  );
};

const TabsNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "red",
      }}
      initialRouteName=""
    >
      <Tab.Screen
        name="HOME_STACK"
        component={MyHomeStack}
        options={{
          tabBarIcon: ({ size, focused, color }) => {
            return <Entypo name={"home"} size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="REORDER"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ size, color }) => {
            return <MaterialIcons name={"reorder"} size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="CART"
        component={CartScreen}
        options={{
          tabBarIcon: ({ size, color }) => {
            const { cartItems } = useContext(CartContext);

            return (
              <View>
                <MaterialIcons
                  name={"shopping-cart"}
                  size={size}
                  color={color}
                />
                <View style={styles.badge}>
                  <Text style={{ color: "white", fontSize: 10 }}>
                    {cartItems.length}
                  </Text>
                </View>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="ACCOUNT"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ size, color }) => {
            return <FontAwesome6 name={"user"} size={size} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const App = () => {
  const [fontsLoaded, fontError] = useFonts({
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
    "Poppins-BlackItalic.ttf": require("./assets/fonts/Poppins-BlackItalic.ttf"),
  });

  if (!fontsLoaded && !fontError) {
    return <Text>Font loading...</Text>;
  }

  return (
    <NavigationContainer>
      <CartProvider>
        <Drawer.Navigator>
          <Drawer.Screen name="Home" component={TabsNavigator} />
          <Drawer.Screen name="About" component={NotificationsScreen} />
        </Drawer.Navigator>
      </CartProvider>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  badge: {
    position: "absolute",
    right: -5,
    bottom: 22,
    height: 14,
    width: 14,
    backgroundColor: "#E96E6E",
    borderRadius: 7,
    alignItems: "center",
    justifyContent: "center",
  },
});
