import React from "react";

const TaskComponent = ({ tasks, deleteHandler }) => {
  return (
    <div className="m-10">
      {tasks.map((task, index) => (
        <div
          key={index}
          className="bg-gray-800 rounded-lg shadow-md p-4 mb-4 flex justify-between items-center"
        >
          <div>
            <h3 className="text-lg font-semibold text-white">{task.title}</h3>
            <p className="text-gray-300">{task.description}</p>
          </div>
          <button
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
            onClick={() => deleteHandler(index)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default TaskComponent;
