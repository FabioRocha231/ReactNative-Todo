import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { connect } from 'react-redux';

import { addTodo, setTodoText, updateTodo } from '../actions';

import Input from './Input';

class TodoForm extends React.Component {
  onChangeText(text) {
    this.props.dispatchSetTodoText(text);
  }
  onPress() {
    const { todo } = this.props;
    if (todo.id) {
      this.props.dispatchUpdateTodo(todo);
    } else {
      const { text } = this.props.todo;
      this.props.dispatchAddTodo(text);
    }
  }

  render() {
    const { text, id } = this.props.todo;
    return (
      <View style={formContainer}>
        <View style={inputContainer}>
          <Input
            onChangeText={(text) => this.onChangeText(text)}
            value={text}
          />
        </View>
        <View style={buttonContainer}>
          <Button onPress={() => this.onPress()} title={id ? 'save' : 'add'} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  formContainer: {
    flexDirection: 'row',
  },
  inputContainer: {
    flex: 4,
  },
  buttonContainer: {
    flex: 1,
    marginRight: 10,
  },
});

//const mapDispatchToProps = (dispatch) => {
//  return {
//    dispatchAddTodo: (text) => dispatch(addTodo(text)),
//  };
// };

const { formContainer, inputContainer, buttonContainer } = styles;

const mapStateToProps = (state) => {
  return { todo: state.editingTodo };
};

export default connect(mapStateToProps, {
  dispatchAddTodo: addTodo,
  dispatchSetTodoText: setTodoText,
  dispatchUpdateTodo: updateTodo,
})(TodoForm);
