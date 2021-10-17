import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

const TodoListItem = ({ todo, onPressTodo, onLongPressTodo }) => (
  <TouchableOpacity onPress={onPressTodo} onLongPress={onLongPressTodo}>
    <View style={line}>
      <Text style={[lineText, todo.done ? lineThrough : null]}>
        {todo.text}
      </Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  line: {
    height: 60,
    borderBottomWidth: 1,
    borderColor: '#bbb',
    flexDirection: 'row',
    alignItems: 'center',
  },
  lineText: {
    fontSize: 20,
    paddingLeft: 15,
    flex: 6,
  },
  lineThrough: {
    textDecorationLine: 'line-through',
  },
});
const { line, lineText, lineThrough } = styles;

export default TodoListItem;
