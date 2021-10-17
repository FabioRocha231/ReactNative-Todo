if (__DEV__) {
  import('../ReactotronConfig').then(() =>
    console.log('reactotron Configurado'),
  );
}
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createStore } from 'redux';
import Reactotron from '../ReactotronConfig';
import { Provider } from 'react-redux';

import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import rootReducer from './reducers';

const store = createStore(rootReducer, Reactotron.createEnhancer());

export default class TodoApp extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={container}>
          <TodoForm />
          <TodoList />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
  },
});

const { container } = styles;
