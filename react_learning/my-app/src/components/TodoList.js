import { TodoItem } from './TodoItem';
import { useSelector } from 'react-redux';
export const TodoList = () => {
  const todoLists = useSelector(state => state);
  return (
    <ul>
      {todoLists.map(({ content, isCompleted }, index) => {
        return <TodoItem key={`${content}-%{index}`} content={content} isCompletd={isCompleted} index={index} />;
      })}
    </ul>
  );
};
