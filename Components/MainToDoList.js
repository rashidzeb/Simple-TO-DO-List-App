"use client";
import React, { Fragment, useState } from "react";
import Form from "./Form";
import Task from "./Tasks";

const MainToDoList = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [task, setTask] = useState([]);
  const [error, setError] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) {
      setError("Title and description are required.");
      return;
    }
    setTask([...task, { title, description }]);
    setTitle("");
    setDescription("");
    setError("");
  };

  const deleteHandler = (i) => {
    let cpTask = [...task];
    cpTask.splice(i, 1);
    setTask(cpTask);
  };

  return (
    <Fragment>
      <div className="flex justify-center items-center h-screen bg-gray-900">
        <Form
          title={title}
          setTitle={setTitle}
          description={description}
          setDescription={setDescription}
          error={error}
          setError={setError}
          submitHandler={submitHandler}
        />
      </div>
      <Task tasks={task} deleteHandler={deleteHandler} />
    </Fragment>
  );
};

export default MainToDoList;
