import React from "react";
import { View, Text } from "react-native";
import { SideComponentItemStyles as styles } from "../../styles/Styles";

export default function CompleteItem({ item }) {
  return (
    <View style={styles.container}>
      <View style={styles.id}>
        <Text style={styles.idText}>{item.id}</Text>
      </View>
      <View
        style={[
          styles.body,
          {
            backgroundColor: item.status === "Done" ? "#218838" : "#ffc107",
          },
        ]}
      >
        <Text style={styles.bodyText} numberOfLines={2}>
          {item.body}
        </Text>
      </View>
    </View>
  );
}
