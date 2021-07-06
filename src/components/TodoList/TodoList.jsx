import React from "react";
import ToDo from "../ToDo";

const TodoList = ({ todos, todoDelete, todoToogleCompleted, setTodoEdit }) => {
  return (
    <>
      <h1>ToDo App</h1>
      {todos.length === 0 ? (
        <h2 className="alert alert-primary">No tasks added</h2>
      ) : (
        todos.map((todo) => (
          <ToDo
            todo={todo}
            key={todo.id}
            todoDelete={todoDelete}
            todoToogleCompleted={todoToogleCompleted}
            setTodoEdit={setTodoEdit}
          />
        ))
      )}
    </>
  );
};

export default TodoList;
