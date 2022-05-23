import React, {FC} from 'react';
import {ITodo} from "../types/types";
import {useHistory} from 'react-router-dom';

interface TodoItemProps {
  todo: ITodo;
}

const TodoItem: FC<TodoItemProps> = ({todo}) => {
  const history = useHistory();

  return (
    <div onClick={() => history.push('/' + todo.id)}>
      {/* {todo.id}.  */}
      {todo.title}
    </div>
  );
};

export default TodoItem;
