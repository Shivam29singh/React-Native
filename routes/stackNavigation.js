import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import { NavigationContainer } from "@react-navigation/native";

import productDetails from "../productDetails";
import Home from "../Home";
import AddProduct from "../AddProduct";

const Stack = createStackNavigator();

function MyStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="App"
        screenOptions={{
          gestureEnabled: true,
          headerStyle: {
            backgroundColor: "green",
            height: 50,
          },
        }}
        headerMode="float"
      >
        <Stack.Screen name="Home" component={Home}></Stack.Screen>
        <Stack.Screen
          name="productDetails"
          component={productDetails}
        ></Stack.Screen>
        <Stack.Screen name="AddProduct" component={AddProduct}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MyStackNavigator;
