import React, { useContext } from "react";
import { View, Text } from "react-native";
import { TodoStyles, SideComponentStyles as styles } from "../../styles/Styles";
import { TodoListContext } from "../../../App";
import { FlatList } from "react-native-gesture-handler";
import SideComponentItem from "./SideComponentItem";

export default function SideComponent({ title }) {
  const { todoList } = useContext(TodoListContext);
  const statusType = title === "Complete" ? "Done" : "Active";
  const list = todoList.filter((item) => item.status === statusType);

  return (
    <View style={[TodoStyles.container, styles.container]}>
      <Text style={styles.title}>
        {title} Todos ({list.length})
      </Text>
      {list.length > 0 ? (
        <FlatList
          data={list}
          renderItem={({ item }) => <SideComponentItem item={item} />}
          keyExtractor={(item) => item.id + "key"}
        />
      ) : (
        <Text style={styles.prompt} numberOfLines={2}>
          {title === "Complete"
            ? "You haven't finished any todo yet, lazy ass!!!"
            : "Wow, you done all the todos, good job!!!"}
        </Text>
      )}
    </View>
  );
}
