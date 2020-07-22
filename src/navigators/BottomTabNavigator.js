import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Complete from "../containers/complete/Complete";
import Active from "../containers/active/Active";
import StackNavigator from "./StackNavigator";
import {
  MaterialCommunityIcons,
  Ionicons,
  FontAwesome,
} from "@expo/vector-icons";

const Tabs = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, focused }) => {
          switch (route.name) {
            case "Complete":
              return (
                <MaterialCommunityIcons
                  name="check-all"
                  size={24}
                  color={color}
                />
              );
            case "All":
              return (
                <Ionicons
                  name={focused ? "md-add-circle" : "md-add-circle-outline"}
                  size={24}
                  color={color}
                />
              );
            case "Active":
              return <FontAwesome name="th-list" size={24} color={color} />;
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: "#ee1b22",
        inactiveTintColor: "#757575",
        labelStyle: {
          fontSize: 12,
        },
      }}
      initialRouteName="All"
    >
      <Tabs.Screen name="Complete" component={Complete} />
      <Tabs.Screen name="All" component={StackNavigator} />
      <Tabs.Screen name="Active" component={Active} />
    </Tabs.Navigator>
  );
}
