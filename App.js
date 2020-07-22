import React, { createContext, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import BottomTabNavigator from "./src/navigators/BottomTabNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { TODOS } from "./src/constants/Constants";

export const TodoListContext = createContext();

export default function App() {
  const [todoList, setTodoList] = useState(TODOS);

  return (
    <TodoListContext.Provider value={{ todoList, setTodoList }}>
      <SafeAreaView style={{ flex: 1 }}>
        <NavigationContainer>
          <BottomTabNavigator />
        </NavigationContainer>
      </SafeAreaView>
    </TodoListContext.Provider>
  );
}
