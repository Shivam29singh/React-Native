import React from "react";

import { ScrollView, TouchableOpacity } from "react-native";

import { useState, useEffect } from "react";

import { StyleSheet, Text, View, Button } from "react-native";

import { StatusBar } from "expo-status-bar";

import axios from "axios";

export default function productDetails(navigation) {
  const about = navigation.route.params.item;

  const [product, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/allproducts/" + about)

      .then((res) => {
        console.log(res.data);

        setProducts(res.data);
      });
  });
  const deleteHandler = (about) => {
    axios
      .delete("http://localhost:3000/allProducts/" + about)

      .then((response) => {
        console.log(response.data);

        navigation.navigation.navigate("Home");
      });
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        {
          <View style={styles.cardContent}>
            <Text style={styles.list}>
              <img src={product.productimage} style={{ height: "200px" }}></img>
            </Text>

            <Text style={styles.text1}> Product: {product.productName}</Text>
            <br></br>

            <Text style={styles.text}> Price: {product.productPrice}</Text>
            <br></br>

            <Text style={styles.text}>Category: {product.productCategory}</Text>
            <br></br>

            <Text style={styles.text}> InStock: {product.productStock}</Text>
            <br></br>

            <Text style={styles.text}>
              Description: {product.productDescription}
            </Text>
            <Button
              title="DELETE"
              onPress={() => deleteHandler(about)}
            ></Button>
          </View>
        }
      </ScrollView>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightblue",
  },

  list: {
    // fontSize:30,
    marginBottom: "auto",
    marginLeft: "auto",
    marginRight: "auto",
  },

  cardContent: {
    height: "auto",

    width: "300",

    marginBottom: "auto",

    marginLeft: "auto",

    marginRight: "auto",

    marginTop: 80,

    borderColor: "green",

    borderWidth: 2,

    padding: 20,
  },

  text: {
    marginBottom: "auto",

    // marginLeft:'auto',

    marginRight: "auto",

    fontSize: 15,
  },

  text1: {
    marginBottom: "auto",

    // marginLeft:'auto',

    marginRight: "auto",

    marginTop: 20,

    fontSize: 15,
  },
});
