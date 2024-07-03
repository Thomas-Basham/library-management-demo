import React from "react";

export default function AddBookForm({handleAddBook}) {
  return (
    <form
      onSubmit={handleAddBook}
      className="p-5 m-5 border border-emerald-800"
    >
      <h2 className="mb-2 text-2xl">Add a Book</h2>
      <div>
        <input
          className="w-1/4 p-1 border rounded border-emerald-600"
          placeholder="Title"
          type="text"
          name="title"
          id="title-input"
          required
        />
        <input
          className="w-1/4 p-1 border rounded border-emerald-600"
          placeholder="Author"
          type="text"
          name="author"
          id="author-input"
          required
        />
        <input
          className="w-1/4 p-1 border rounded border-emerald-600"
          placeholder="ISBN"
          type="text"
          name="isbn"
          id="isbn"
          required
        />
        <input
          className="w-1/4 p-1 border rounded border-emerald-600"
          placeholder="Available Copies"
          type="number"
          name="availableCopies"
          // id="available-copies"
          min={0}
          required
        />
      </div>
      <button
        className="p-2 my-4 border rounded border-emerald-500 hover:bg-emerald-600"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
}
