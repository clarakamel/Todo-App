import React, { useState } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

import Header from "./components/header";
import TodoItem from "./components/todoItem";
import AddTodo from "./components/addTodo";

export default function App() {
  /*creating an array of Todos*/
  const [todos, setTodos] = useState([
    { text: "Buy coffee", key: "1" },
    { text: "Create an app", key: "2" },
    { text: "Go to bed", key: "3" },
  ]);

  /*Function responsible for deleting Todos*/
  const deleteText = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.key != key);
    });
  };
  /* Function responsible for validating the input data*/
  const submitHandler = (text) => {
    if (text.length > 3) {
      setTodos((prevTodos) => {
        return [{ text: text, key: Math.random.toString() }, ...prevTodos];
      });
    } else {
      Alert.alert("Error!", "Todos must be at least 3 characters long", [
        { text: "Understood", onPress: () => console.log("Yes Pressed") },
        {
          text: "Not Understood!",
          onPress: () => console.log("No Pressed"),
        },
      ]);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TodoItem item={item} deleteText={deleteText} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
});
