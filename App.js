import React from "react";
import { List, NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
// import HomeScreen from "./Route/Route";
// import ListTodo from "./pages/ListTodo";
// import AddCategory from "./pages/AddCategory";
// import AddList from "./pages/AddList";
// import ListTodo from "./pages/DetailList";
import Route from "./src/Route/Route"

//! EXPORT PLACE
export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <Route />
      </NativeBaseProvider>
    </NavigationContainer>
  );
}