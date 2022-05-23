import { useDispatch } from 'react-redux';
import { delTodo, modTodo } from '../actions';
//import {todo-item.css} from './styles'

export const TodoItem = ({ content, isCompletd, index }) => {
  const dispatch = useDispatch();

  return (
    <li className="one-todo">
      <span
        className={isCompletd ? 'todo-text-content-completed' : 'todo-text-content-incompleted'}
        style={{ textDecoration: isCompletd ? 'line-through' : 'none' }}
        onDoubleClick={() => {
          modTodo(dispatch)(index);
        }}
      >
        {content}
      </span>
      <button
        onClick={() => {
          delTodo(dispatch)(index);
        }}
      >
        Delete Todo
      </button>
    </li>
  );
};
