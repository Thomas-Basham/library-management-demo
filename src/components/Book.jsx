"use client"
import React, { useState } from "react";
import { Book } from "@/utils/library";

export default function BookComponent({
  title,
  author,
  isbn,
  availableCopies,
  updateBook,
}) {
  const [isEditing, setIsEditing] = useState(false);

  function handleUpdateFormSubmit(e) {
    e.preventDefault();

    const newBook = new Book(
      e.target.title.value,
      e.target.author.value,
      e.target.isbn.value,
      parseInt(e.target.availableCopies.value)
    );

    updateBook(newBook); // needs a book to update
    setIsEditing(false);
  }
  return (
    <div className="flex justify-between p-5 m-5 border border-black rounded-md bg-emerald-500">
      {isEditing ? (
        <form onSubmit={handleUpdateFormSubmit} className="flex justify-between w-full">
          <div className="">
            <input
              className="block p-1 border rounded border-emerald-600"
              placeholder="Title"
              type="text"
              name="title"
              id="title-input"
              required
              // value={title} // TODO: put in state instead of getting from props
            />
            <input
              className="block p-1 border rounded border-emerald-600"
              placeholder="Author"
              type="text"
              name="author"
              id="author-input"
              required
              // value={author} // TODO: put in state instead of getting from props
            />
            <input
              className="block p-1 border rounded border-emerald-600"
              placeholder="ISBN"
              type="text"
              name="isbn"
              id="isbn"
              required
              // value={isbn} // TODO: put in state instead of getting from props
            />
            <input
              className="block p-1 border rounded border-emerald-600"
              placeholder="Available Copies"
              type="number"
              name="availableCopies"
              // id="available-copies"
              min={0}
              required
              // value={availableCopies} // TODO: put in state instead of getting from props
            />
          </div>
          <button
            className="p-2 my-4 border rounded border-emerald-500 hover:bg-emerald-600"
            type="submit"
          >
            Submit
          </button>
        </form>
      ) : (
        <>
          <div>
            <p className="my-1">Title: {title}</p>
            <p className="my-1">Author: {author}</p>
            <p className="my-1">ISBN: {isbn}</p>
            <p className="my-1">Available Copies: {availableCopies}</p>
          </div>

          <div>
            <button
              onClick={() => setIsEditing(true)}
              title="Edit this book"
              className="p-2 my-4 rounded border-emerald-900 hover:bg-emerald-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                />
              </svg>
            </button>
          </div>
        </>
      )}
    </div>
  );
}
