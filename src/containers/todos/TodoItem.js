import React, { useRef } from "react";
import { Text, Alert } from "react-native";
import {
  LongPressGestureHandler,
  TapGestureHandler,
  State,
} from "react-native-gesture-handler";
import { TodoItemStyles as styles } from "../../styles/Styles";
import Animated, { Value, spring, SpringUtils } from "react-native-reanimated";

export default function TodoItem({ item, deleteTodo, updateTodo }) {
  const _scale = useRef(new Value(1)).current;
  function _longPressHandlerStateChange(evt) {
    if (evt.nativeEvent.state === State.ACTIVE) {
      handleScaleIn();
      Alert.alert(
        "Delete your todo?",
        item.body,
        [
          {
            text: "Cancel",
            style: "cancel",
            onPress: () => handleScaleOut(),
          },
          {
            text: "OK",
            onPress: () => {
              deleteTodo(item.id);
              handleScaleOut();
            },
            style: "destructive",
          },
        ],
        { cancelable: true }
      );
    }
  }
  function handleScaleIn() {
    spring(_scale, {
      ...SpringUtils.makeDefaultConfig(),
      overshootClamping: true,
      damping: new Value(15),
      toValue: 1.1,
    }).start();
  }
  function handleScaleOut() {
    spring(_scale, {
      ...SpringUtils.makeDefaultConfig(),
      overshootClamping: true,
      damping: new Value(15),
      toValue: 1,
    }).start();
  }
  function _tapHandlerStateChange(evt) {
    if (evt.nativeEvent.oldState === State.ACTIVE) {
      updateTodo(item.id);
    }
  }

  return (
    <LongPressGestureHandler
      onHandlerStateChange={_longPressHandlerStateChange}
    >
      <Animated.View>
        <TapGestureHandler onHandlerStateChange={_tapHandlerStateChange}>
          <Animated.View
            style={[
              styles.container,
              {
                backgroundColor: item.status === "Done" ? "#218838" : "#ffc107",
                transform: [
                  {
                    scale: _scale,
                  },
                ],
              },
            ]}
          >
            <Text style={styles.itemText}>{item.body}</Text>
          </Animated.View>
        </TapGestureHandler>
      </Animated.View>
    </LongPressGestureHandler>
  );
}
