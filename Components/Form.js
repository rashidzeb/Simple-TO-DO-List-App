import React from "react";

const Form = ({
  title,
  setTitle,
  description,
  setDescription,
  error,
  setError,
  submitHandler,
}) => {
  return (
    <div className="w-96 p-6 bg-gray-800 rounded-lg shadow-md">
      <form onSubmit={submitHandler} className="space-y-4">
        <input
          placeholder="Title"
          className="w-full border rounded-md py-2 px-3 text-white leading-tight focus:outline-none focus:ring focus:border-blue-300 bg-gray-700"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Description"
          className="w-full border rounded-md py-2 px-3 text-white leading-tight focus:outline-none focus:ring focus:border-blue-300 bg-gray-700"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
          Submit
        </button>
        {error && (
          <p
            className="text-red-500 text-sm cursor-pointer"
            onClick={() => setError("")}
          >
            {error}
          </p>
        )}
      </form>
    </div>
  );
};

export default Form;
