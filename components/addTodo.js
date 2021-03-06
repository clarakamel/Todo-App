import React, { useState } from "react";
import { StyleSheet, Text, TextInput, Button, View } from "react-native";

/*component responsible for creating the input field and button to add a new Todo*/
export default function AddTodo({ submitHandler }) {
  const [text, setText] = useState("");

  const changeHandler = (val) => {
    setText(val);
  };
  return (
    <View>
      <TextInput placeholder="New Todo.." onChangeText={changeHandler} />
      <Button
        onPress={() => submitHandler(text)}
        title="Add Todo"
        color="coral"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    flex: 1,
    borderStyle: "dotted",
  },
});
