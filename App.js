import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./src/screen/HomeScreen";
import Entypo from "react-native-vector-icons/Entypo";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveTintColor: "red",
        }}
      >
        <Tab.Screen
          name="HOME"
          component={HomeScreen}
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
              return (
                <MaterialIcons name={"reorder"} size={size} color={color} />
              );
            },
          }}
        />
        <Tab.Screen
          name="CART"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ size, color }) => {
              return (
                <MaterialIcons
                  name={"shopping-cart"}
                  size={size}
                  color={color}
                />
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
    </NavigationContainer>
  );
};

export default App;
