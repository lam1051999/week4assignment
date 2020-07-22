import { StyleSheet } from "react-native";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../constants/Constants";

export const TodosStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  backgroundImage: {
    ...StyleSheet.absoluteFill,
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
  },
  wrapper: {
    borderRadius: 5,
    flex: 1,
  },
  flatListTitle: {
    color: "white",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    paddingVertical: 10,
  },
  footerContainer: {
    marginBottom: 50,
    width: SCREEN_WIDTH - 30,
    alignItems: "center",
    marginHorizontal: 15,
  },
  textInput: {
    borderWidth: 2,
    borderColor: "rgb(238,238,238)",
    fontSize: 30,
    padding: 10,
    textAlign: "center",
    marginVertical: 10,
    color: "rgb(238,238,238)",
    width: "100%",
  },
  footerButtonContainer: {
    paddingVertical: 20,
    backgroundColor: "rgb(238,238,238)",
    borderRadius: 5,
    width: SCREEN_WIDTH - 100,
  },
  footerButtonText: {
    fontSize: 20,
    textAlign: "center",
  },
});

export const TodoItemStyles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    marginBottom: 10,
    borderRadius: 5,
    marginHorizontal: 30,
  },
  itemText: {
    fontSize: 17,
    color: "white",
    textAlign: "center",
  },
});

export const TodoStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    position: "relative",
  },
  headerContainer: {
    position: "relative",
    width: "100%",
    justifyContent: "center",
    paddingVertical: 15,
    backgroundColor: "white",
    borderBottomColor: "lightgrey",
    borderBottomWidth: 1,
  },
  headerIcon: {
    position: "absolute",
    left: 0,
    padding: 10,
    zIndex: 1000,
  },
  headerTitle: {
    fontSize: 25,
    textAlign: "center",
  },
  detailContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  id: {
    fontSize: 20,
  },
  body: {
    fontSize: 30,
    textAlign: "center",
  },
});

export const SideComponentStyles = StyleSheet.create({
  container: {
    paddingTop: 50,
    width: SCREEN_WIDTH - 30,
    marginHorizontal: 15,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    paddingVertical: 10,
  },
  prompt: {
    fontSize: 20,
    textAlign: "center",
  },
});

export const SideComponentItemStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    marginBottom: 10,
  },
  id: {
    width: "15%",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
    backgroundColor: "#ee1b22",
  },
  idText: {
    fontSize: 17,
    color: "white",
  },
  body: {
    width: "85%",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
  },
  bodyText: {
    fontSize: 17,
    textAlign: "center",
    color: "white",
  },
});
