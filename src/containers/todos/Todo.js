import React from "react";
import { View, Text } from "react-native";
import { TodoStyles as styles } from "../../styles/Styles";
import { Feather } from "@expo/vector-icons";

export default function Todo({ navigation, route }) {
  const { id, status, body } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Feather
          onPress={() => navigation.goBack()}
          name="arrow-left"
          size={25}
          color="black"
          style={styles.headerIcon}
        />
        <Text style={styles.headerTitle}>Todo {id}</Text>
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.id}>
          {id}. {status}
        </Text>
        <Text style={styles.body}>{body}</Text>
      </View>
    </View>
  );
}
