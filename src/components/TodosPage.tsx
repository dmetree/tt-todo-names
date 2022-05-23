import React, { useEffect, useState} from 'react';
import {ITodo} from "../types/types";
import {useHistory} from 'react-router-dom';
import TodoItem from "./TodoItem";
import axios from "axios";

const TodosPage = () => {
  const history = useHistory();

  const [todos, setTodos] = useState<ITodo[]>([])

  useEffect(() => {
    fetchTodos()
  }, [])

  async function fetchTodos() {
    try {
      const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10')
      setTodos(response.data)
    } catch (e) {
      alert(e)
    }
  }

  const todoslist = todos.map((todo: ITodo) => <TodoItem
    key={todo.id}
    todo={todo}
  />)


  return (
    <div>
      {todoslist}
    </div>
  );
};

export default TodosPage;
