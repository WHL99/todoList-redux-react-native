import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Checkbox from 'expo-checkbox';
import { useDispatch } from 'react-redux';
import { setCheckbox } from '../redux/reducer'

const Todo = (props) => {
  const dispatch = useDispatch()
  const handleCheck = () => {
    dispatch(setCheckbox(props.id))
  };
  return (
    <View style={styles.itemsWrapper}>
      <View style={styles.item}>
        <Checkbox value={props.complete} onValueChange={handleCheck} />
        <Text style={styles.itemText}>
          <Text style={props.complete && styles.itemComplete}>
            &nbsp;&nbsp;{props.title}
          </Text>
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  itemsWrapper: {
    marginBottom: 10,
    backgroundColor: 'white',
    padding: 12,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  item: {
    paddingLeft: 4,
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  bullet: {
    height: 15,
    width: 15,
    backgroundColor: 'rgb(209, 209, 224)',
    borderRadius: '99px',
  },
  itemText: {
    fontSize: 18,
    maxWidth: '100%',
  },
  itemComplete: {
    textDecorationLine: 'line-through'
  }
});

export default Todo;