import React from "react";

import {
  Picker,
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  Button,
} from "react-native";

import { useState, useEffect } from "react";

import axios from "axios";

import { useNavigation } from "@react-navigation/native";

export default function AddProduct() {
  const navigation = useNavigation();

  const [products, setProducts] = useState({
    id: "",

    productName: "",

    productimage: "",

    productPrice: "",

    productDescription: "",

    productStock: "",

    productCategory: "",
  });

  function getProductName(value) {
    products["productName"] = value;

    setProducts(products);
  }

  function getProductPrice(value) {
    products["productPrice"] = value;

    setProducts(products);
  }

  function getProductDescription(value) {
    products["productDescription"] = value;

    setProducts(products);
  }

  function getProductStock(value) {
    products["productStock"] = value;

    setProducts(products);
  }

  function getProductCategory(value) {
    products["productCategory"] = value;

    setProducts(products);
  }

  function getProductimage(value) {
    products["productimage"] = value;

    setProducts(products);
  }

  const addProduct = () => {
    const productRequestBody = products;

    console.log(productRequestBody);

    axios
      .post("http://localhost:3000/allproducts", productRequestBody)

      .then(
        (res) => {
          console.log(res.data);

          navigation.navigate("Home");
        },
        (error) => {
          console.log(error);
        }
      );
  };

  return (
    <View style={styles.maincontainer}>
      <ScrollView>
        <View style={styles.card}>
          <TextInput
            style={styles.inputproduct}
            placeholder="Enter Product Name"
            onChangeText={getProductName}
          ></TextInput>
          <br></br>

          <TextInput
            style={styles.inputproduct}
            placeholder="Enter Image URL"
            onChangeText={getProductimage}
          ></TextInput>
          <br></br>

          <TextInput
            style={styles.inputproduct}
            placeholder="Enter Product Price"
            onChangeText={getProductPrice}
          ></TextInput>
          <br></br>

          <TextInput
            style={styles.inputproduct}
            placeholder="Enter Product Description"
            onChangeText={getProductDescription}
          ></TextInput>
          <br></br>

          <TextInput
            style={styles.inputproduct}
            placeholder="Enter Product Stock"
            onChangeText={getProductStock}
          ></TextInput>
          <br></br>

          <Picker
            style={styles.inputproduct}
            placeholder="Enter Category"
            onValueChange={getProductCategory}
          >
            <br></br>

            <Picker.Item label="Select Category" />

            <Picker.Item label="Electronics" value="Electronics" />

            <Picker.Item label="Accessories" value="Accessories" />

            <Picker.Item label="clothing" value="clothing" />
          </Picker>

          <br></br>

          <Button
            style={styles.button}
            vairiant="warning"
            onPress={() => addProduct()}
            title="Add Product"
          ></Button>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  maincontainer: {
    backgroundColor: "lightblue",
  },
  card: {
    marginBottom: "auto",

    marginRight: "auto",

    marginLeft: "auto",

    marginTop: 80,

    borderWidth: 2,

    borderColor: "green",
    backgroundColor: "lightblue",
  },

  inputproduct: {
    borderWidth: 1,

    borderColor: "green",

    padding: 8,

    margin: 8,

    width: 300,
  },

  Button: {
    borderRadius: 8,

    paddingVertical: 14,

    paddingHorizontal: 12,

    backgroundColor: "green",
    color: "green",

    width: 20,
  },
});
