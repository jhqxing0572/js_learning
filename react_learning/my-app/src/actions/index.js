import { todoApi } from '../api/api';

export const initTodo = dispatch => async () => {
  try {
    const result = await todoApi.getAllTodos();
    console.log(result);
    dispatch({
      type: 'INIT',
      payload: result,
    });
  } catch (e) {
    console.log(e);
  }
};

export const addTodo = dispatch => async content => {
  try {
    const result = await todoApi.addTodo({
      content,
      isCompleted: false,
    });
    console.log(result);
    dispatch({
      type: 'ADD',
      payload: {
        content,
        isCompleted: false,
      },
    });
  } catch (e) {
    console.log(e);
  }
};

export const modTodo = dispatch => async index => {
  try {
    const result = await todoApi.modTodo(index);
    console.log(result);
    dispatch({
      type: 'MOD',
      payload: index,
    });
  } catch (e) {
    console.log(e);
  }
};

export const delTodo = dispatch => async index => {
  try {
    const result = await todoApi.delTodo(index);
    console.log(result);
    dispatch({
      type: 'DEL',
      payload: index,
    });
  } catch (e) {
    console.log(e);
  }
};
