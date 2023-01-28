// import libraries to create components
import React from "react";
import { Text, StyleSheet, View } from "react-native";
// import CustomComponent from "./src/screen/CustomComponent";
import FlatListDemo from "./src/screen/FlatListDemo";

// create a component that return some jsx / simple function

const App = () => {
  return (
    <View>  
        <FlatListDemo/>
    </View>
  );
};

// create a StyleSheet to style the component

const styles = StyleSheet.create({
  textStyle: {
    color: "blue",
    // marginTop: 200,
  },
});
// export the file, so that we can use it elsewhere in our app

export default App;
