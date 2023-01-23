// import libraries to create components
import React from "react";
import {Text, StyleSheet } from "react-native";

// create a component that return some jsx / simple function

const CustomComponent = () =>{
  return <Text style={styles.textStyle}>Hey! I am Ashis Kumar Pal. This is my first custom components 😀😀😀.</Text>;
}

// create a StyleSheet to style the component

const styles = StyleSheet.create({
textStyle:{
  color: "blue",
},
})
// export the file, so that we can use it elsewhere in our app

export default CustomComponent;