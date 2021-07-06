import React, { useEffect, useState } from "react";

const initialFormValues = {
  title: "",
  description: "",
};

const TodoForm = ({ todoAdd, todoEdit, todoUpdate, setTodoEdit }) => {
  const [formValues, setFormValues] = useState(initialFormValues);
  const { title, description } = formValues;
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  useEffect(() => {
    if (todoEdit) {
      setFormValues(todoEdit);
    } else {
      setFormValues(initialFormValues);
    }
  }, [todoEdit]);

  const handleChange = (e) => {
    const changedFormValues = {
      ...formValues,
      [e.target.name]: e.target.value,
    };
    setFormValues(changedFormValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === "") {
      setError("Debes agregar un título");
      return;
    }
    if (description.trim() === "") {
      setError("Debes agregar una descripción");
      return;
    }
    if (todoEdit) {
      todoUpdate(formValues);
      setSuccess("Task Edited");
    } else {
      todoAdd(formValues);
      setSuccess("Task Added");
      setFormValues(initialFormValues);
    }

    setTimeout(() => {
      setSuccess(null);
    }, 2000);

    setError(null);
  };

  return (
    <div>
      <h1>{todoEdit ? "Edit Task" : "New Task"}</h1>

      {todoEdit && (
        <button
          className="btn btn-warning btn-sm mb-2"
          onClick={() => setTodoEdit(null)}
        >
          Cancel Edit
        </button>
      )}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Título"
          value={title}
          onChange={handleChange}
          name="title"
        />
        <textarea
          className="form-control"
          placeholder="Description"
          value={description}
          name="description"
          onChange={handleChange}
        ></textarea>
        <button className="btn btn-block btn-primary mt-2">
          {todoEdit ? "Edit Task" : "Add Task"}
        </button>
      </form>
      {error && (
        <div className="aler alert-danger mt-2 d-flex justify-content-center p-2">
          {error}
        </div>
      )}
      {success && (
        <div className="alert alert-success mt-2 d-flex justify-content-center p-2">
          {success}
        </div>
      )}
    </div>
  );
};

export default TodoForm;
