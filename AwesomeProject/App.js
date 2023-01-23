// import libraries to create components
import React from "react";
import { Text, StyleSheet, View } from "react-native";
import CustomComponent from "./src/screen/CustomComponent";

// create a component that return some jsx / simple function

const App = () => {
  return (
    <View>
      <Text style={styles.textStyle}>
        Ashis Kumar Pal. This is App JS component.
      </Text>
      <CustomComponent/>
    </View>
  );
};

// create a StyleSheet to style the component

const styles = StyleSheet.create({
  textStyle: {
    color: "blue",
  },
});
// export the file, so that we can use it elsewhere in our app

export default App;
