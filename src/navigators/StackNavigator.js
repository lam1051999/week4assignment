import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Todos from "../containers/todos/Todos";
import Todo from "../containers/todos/Todo";

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Todos"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Todos" component={Todos} />
      <Stack.Screen name="Todo" component={Todo} />
    </Stack.Navigator>
  );
}
