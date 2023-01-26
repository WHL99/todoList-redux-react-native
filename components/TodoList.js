import React, { useState } from 'react';
import { KeyboardAvoidingView, SafeAreaView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView, Platform } from 'react-native';
import Todo from './Todo';
import uuid from 'react-native-uuid';
import { useDispatch, useSelector } from 'react-redux';
import { saveTodoItem, selectTodoList } from "../redux/reducer";

export default function TodoList() {
  const [todo, setTodo] = useState('');
  const dispatch = useDispatch()
  const todoList = useSelector(selectTodoList)

  const handleAddTodo = () => {
    dispatch(saveTodoItem({
      id: uuid.v4(),
      title: todo,
      complete: false
    }))
    Keyboard.dismiss();
    setTodo('');
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps='handled'
      >
        <View style={styles.todoItemsWrapper}>
          <Text style={styles.listTitle}>My todos:</Text>
          <View style={styles.items}>
            {todoList.map((item) => {
              return (
                <TouchableOpacity key={item.id} >
                  <Todo id={item.id} title={item.title} complete={item.complete} />
                </TouchableOpacity>
              )
            })}
          </View>
        </View>
      </ScrollView>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.kbWriteTodo}
      >
        <TextInput style={styles.input} placeholder={'Have to do...'} value={todo} onChangeText={text => setTodo(text)} />
        <TouchableOpacity onPress={() => handleAddTodo()}>
          <View style={styles.addBtnWrapper}>
            <Text style={styles.addBtnText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(194,194,214)',
  },
  todoItemsWrapper: {
    paddingTop: 40,
    paddingHorizontal: 30,
  },
  listTitle: {
    fontSize: 30,
    fontWeight: 'bold'
  },
  items: {
    marginTop: 12,
  },
  kbWriteTodo: {
    paddingHorizontal: 5,
    position: 'absolute',
    bottom: 35,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  input: {
    padding: 16,
    fontSize: 18,
    backgroundColor: 'white',
    borderRadius: 10,
    borderColor: 'rgb(51, 51, 77)',
    borderWidth: 4,
    width: '70%',
  },
  addBtnWrapper: {
    width: 60,
    height: 60,
    borderRadius: 8,
    backgroundColor: 'rgb(51, 51, 77)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addBtnText: {
    color: 'white',
    fontSize: 34,
  },
});
