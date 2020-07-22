import React, { useState, useRef, useContext } from "react";
import { View, Text, KeyboardAvoidingView, Platform } from "react-native";
import { TodosStyles as styles } from "../../styles/Styles";
import {
  FlatList,
  TextInput,
  TouchableOpacity,
} from "react-native-gesture-handler";
import TodoItem from "./TodoItem";
import { TodoListContext } from "../../../App";
import Animated, { Value, interpolate } from "react-native-reanimated";

const AnimatedFlatlist = Animated.createAnimatedComponent(FlatList);

export default function Todos({ navigation }) {
  const { todoList, setTodoList } = useContext(TodoListContext);
  const [inputText, setInputText] = useState("");
  const _scrollYAxis = useRef(new Value(0)).current;
  const _onScroll = Animated.event([
    {
      nativeEvent: {
        contentOffset: {
          y: _scrollYAxis,
        },
      },
    },
  ]);
  const _scale = interpolate(_scrollYAxis, {
    inputRange: [-50, 0, 0],
    outputRange: [1.2, 1, 1],
  });
  function addTodo(newTodo) {
    setTodoList((prevState) => [
      ...prevState,
      {
        id: prevState.length ? prevState[prevState.length - 1].id + 1 : 1,
        status: "Active",
        body: newTodo,
      },
    ]);
    setInputText("");
  }
  function deleteTodo(id) {
    const newList = todoList.filter((item) => item.id !== id);
    setTodoList(newList);
  }
  function updateTodo(id) {
    let newTodo = [...todoList];
    const selectedTodo = todoList.find((item) => item.id === id);
    const selectedIndex = todoList.findIndex((item) => item.id === id);
    selectedTodo.status = selectedTodo.status === "Done" ? "Active" : "Done";
    newTodo[selectedIndex] = selectedTodo;
    setTodoList([...newTodo]);
    setTimeout(
      () =>
        navigation.navigate("Todo", {
          ...selectedTodo,
        }),
      500
    );
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <Animated.Image
        source={require("../../assets/background.jpg")}
        resizeMode="cover"
        style={[
          styles.backgroundImage,
          {
            transform: [
              {
                scale: _scale,
              },
            ],
          },
        ]}
      />
      <View style={styles.wrapper}>
        <Text style={styles.flatListTitle}>TODO LIST ({todoList.length})</Text>
        <AnimatedFlatlist
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={<></>}
          stickyHeaderIndices={[0]}
          onScroll={_onScroll}
          data={todoList}
          renderItem={({ item }) => (
            <TodoItem
              deleteTodo={deleteTodo}
              updateTodo={updateTodo}
              item={item}
            />
          )}
          keyExtractor={(item) => item.id + "key"}
          ListFooterComponent={
            <View style={styles.footerContainer}>
              <TextInput
                style={styles.textInput}
                placeholder="Add todo..."
                placeholderTextColor="rgb(238,238,238)"
                value={inputText}
                onChangeText={setInputText}
              />
              <TouchableOpacity
                style={styles.footerButtonContainer}
                onPress={() => addTodo(inputText)}
              >
                <Text style={styles.footerButtonText}>Submit</Text>
              </TouchableOpacity>
            </View>
          }
        />
      </View>
    </KeyboardAvoidingView>
  );
}
