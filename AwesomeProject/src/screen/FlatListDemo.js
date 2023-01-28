import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";

const FlatListDemo = () => {
  const names = [{ name: "Ashis" }, { name: "Kumar" }, { name: "Pal" }];
  return (
    <FlatList
      data={names}
      renderItem={(element) => {
        console.log(element.item.name);
        return <Text style = {styles.testStyle}>{element.item.name}</Text>
      }}
    />
  );
};

const styles = StyleSheet.create({
  testStyle:{
    fontSize: 30,
  },
});

export default FlatListDemo;
