import * as React from 'react';

import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Home from "../Pages/Home";
import ListTodo from "../Pages/ListTodo";
import AddList from '../Pages/AddList';
import DetailList from '../Pages/DetailList'
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AddCategory from '../Pages/AddCategory';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeScreen() {
  return (

    <Stack.Navigator alignItems="center">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="Register" component={Register} options={{
        headerShown: false,
      }} />
      <Stack.Screen name="Detail" component={DetailList} />
      <Stack.Screen name="Login" component={Login} options={{
        headerShown: false,
      }} />
      <Stack.Screen name="Tab1" component={Tab1} options={{
        headerShown: false,
      }}
      />
    </Stack.Navigator>

  );
}

export default HomeScreen;

export function Tab1() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerMode: "screen",
        headerTintColor: "white",
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let iconColor;

          if (route.name === "Tab1") {
            iconName = "calendar-alt"
            iconColor = focused ? "red" : "gray"
          } else if (route.name === "List") {
            iconName = "clipboard-list"
            iconColor = focused ? "red" : "gray"
          } else if (route.name === "Category") {
            iconName = "th-list"
            iconColor = focused ? "red" : "gray"
          }

          return <FontAwesome5 name={iconName} size={24} color={iconColor} />
        },
        tabBarInactiveTintColor: "gray",
      })}
    >

      <Tab.Screen name="Todo" component={ListTodo} options={{
        headerShown: false,
      }} />
      {/* <FontAwesome name="calendar" size={24} color="black" /> */}
      <Tab.Screen name="List" component={AddList} options={{
        headerShown: false,
      }} />
      <Tab.Screen name="Category" component={AddCategory} options={{
        headerShown: false,
      }} />
    </Tab.Navigator>

  );
}