"use client";
import React, { useState, useEffect } from "react";
import BookComponent from "@/components/Book";
import { Book, Library } from "@/utils/library";
import { getAllDocuments } from "@/utils/firebaseUtils";
import { db } from "../../../firebase.config";

export default function ManagementPage() {
  const [library, setLibrary] = useState(
    new Library("Codex January Cohort", [])
  );

  useEffect(() => {
    async function fetchData() {
      try {
        const documents = await getAllDocuments(db, "books");
        const bookInstances = documents.map((doc) => {
          return new Book(doc.title, doc.author, doc.isbn, doc.availableCopies);
        });
        setLibrary(new Library(library.name, bookInstances));
      } catch (error) {
        console.log("Failed fetching data", error);
      }
    }

    fetchData();
    return () => {
      console.log("get all docs cleanup");
    };
  }, []);

  function handleAddBook(e) {
    e.preventDefault();

    const newBook = new Book(
      e.target.title.value,
      e.target.author.value,
      e.target.isbn.value,
      parseInt(e.target.availableCopies.value)
    );

    const newLibrary = new Library(library.name, library.books);
    newLibrary.addBook(newBook);

    setLibrary(newLibrary);
  }

  function updateBook(bookToUpdate) {
    console.log("UPDATED BOOK FROM LIBRARY", bookToUpdate);

    const newBooks = library.books.map((book) => {
      return book.isbn === bookToUpdate.isbn ? bookToUpdate : book;
    });

    const newLibrary = new Library("Codex January Cohort", newBooks);

    setLibrary(newLibrary);
  }

  function deleteBook(isbn) {
    const newLibrary = new Library(library.name, library.books);
    newLibrary.removeBook(isbn);

    setLibrary(newLibrary);
  }

  return (
    <div>
      <h1 className="my-12 text-6xl text-center">Management Page</h1>

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

      {library.books.map((book, index) => {
        return (
          <BookComponent
            key={index}
            title={book.title}
            author={book.author}
            isbn={book.isbn}
            availableCopies={book.availableCopies}
            updateBook={updateBook}
            deleteBook={deleteBook}
          />
        );
      })}
    </div>
  );
}
