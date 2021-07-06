import "./App.css";
import TodoList from "./components/TodoList/TodoList";
import TodoForm from "./components/TodoForm/TodoForm";
import { useEffect, useState } from "react";

const initialTodos = [
  {
    id: 1,
    title: "To Do # 1",
    description: "Description del To do #1",
    completed: false,
  },
  {
    id: 2,
    title: "To Do # 2",
    description: "Description del To do #2",
    completed: true,
  },
];
const localTodos = JSON.parse(localStorage.getItem("todos"));

function App() {
  const [todoEdit, setTodoEdit] = useState(null);
  const [todos, setTodos] = useState(localTodos || initialTodos);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const todoDelete = (todoId) => {
    if (todoEdit && todoEdit.id === todoId) {
      setTodoEdit(null);
    }
    const changedTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(changedTodos);
  };
  const todoToogleCompleted = (todoId) => {
    const changedTodos = todos.map((todo) =>
      todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
    );

    setTodos(changedTodos);
  };
  const todoAdd = (todo) => {
    const newTodo = {
      id: Date.now(),
      ...todo,
      completed: false,
    };
    const changedTodos = [newTodo, ...todos];
    setTodos(changedTodos);
  };
  const todoUpdate = (todoEdit) => {
    const changedTodos = todos.map((todo) =>
      todo.id === todoEdit.id ? todoEdit : todo
    );
    setTodos(changedTodos);
  };

  return (
    <div className="container mt-4">
      <div className="d-flex row">
        <div className="tasks-container col-8">
          <TodoList
            todos={todos}
            todoDelete={todoDelete}
            todoToogleCompleted={todoToogleCompleted}
            setTodoEdit={setTodoEdit}
          />
        </div>
        <div className="form-container col-4">
          <TodoForm
            todoEdit={todoEdit}
            todoAdd={todoAdd}
            todoUpdate={todoUpdate}
            setTodoEdit={setTodoEdit}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
