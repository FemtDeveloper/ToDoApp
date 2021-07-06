import React from "react";

const ToDo = ({ todo, todoDelete, todoToogleCompleted, setTodoEdit }) => {
  return (
    <div className="card mt-2">
      <div className="card-body ">
        <h3 className="card-title text-right">
          {todo.title}
          <button
            className={`btn btn-sm ${
              todo.completed ? "btn-success" : "btn-outline-success"
            } ml-2`}
            onClick={() => todoToogleCompleted(todo.id)}
          >
            {todo.completed ? "Terminado" : "Terminar"}
          </button>
        </h3>
        <p className="card-text text-right">{todo.description}</p>
        <hr />
        <div className="btn-container d-flex justify-content-end">
          <button
            className="btn btn-sm btn-outline-primary"
            onClick={() => setTodoEdit(todo)}
          >
            Edit
          </button>
          <button
            className="btn btn-sm btn-outline-danger ml-2"
            onClick={() => todoDelete(todo.id)}
          >
            Remove Task
          </button>
        </div>
      </div>
    </div>
  );
};

export default ToDo;
