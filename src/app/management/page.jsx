"use client";
import React, { useState, useEffect } from "react";
import BookComponent from "@/components/Book";
import { Book, Library } from "@/utils/library";
import {
  getAllDocuments,
  addDocument,
  updateDocument,
  deleteDocument,
} from "@/utils/firebaseUtils";
import { db, auth } from "../../../firebase.config";

import AddBookForm from "@/components/AddBookForm";
import RegisterForm from "@/components/RegisterForm";
import LoginForm from "@/components/LoginForm";
import LogoutButton from "@/components/LogoutButton";

export default function ManagementPage() {
  const [library, setLibrary] = useState(
    new Library("Codex January Cohort", [])
  );

  useEffect(() => {
    async function fetchData() {
      // try to get all documents, if you cant, catch the error
      try {
        const documents = await getAllDocuments(db, "books");
        const bookInstances = documents.map((doc) => {
          const book = new Book(
            doc.title,
            doc.author,
            doc.isbn,
            doc.availableCopies
          );
          book.id = doc.id; // get id from firestore doc
          return book;
        });
        console.log(bookInstances);
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

    addDocument(db, "books", {
      title: e.target.title.value,
      author: e.target.author.value,
      isbn: e.target.isbn.value,
      availableCopies: parseInt(e.target.availableCopies.value),
    });

    const newLibrary = new Library(library.name, library.books);
    newLibrary.addBook(newBook);

    setLibrary(newLibrary);
  }

  /**
   *
   * @param {Book} bookToUpdate an instance of a Book class
   */
  async function updateBook(bookToUpdate) {
    console.log("UPDATED BOOK FROM LIBRARY", bookToUpdate);

    const bookObj = {
      title: bookToUpdate.title,
      author: bookToUpdate.author,
      isbn: bookToUpdate.isbn,
      availableCopies: bookToUpdate.availableCopies,
    };

    await updateDocument(db, "books", bookToUpdate.id, bookObj);

    const newBooks = library.books.map((book) => {
      return book.isbn === bookToUpdate.isbn ? bookToUpdate : book;
    });

    const newLibrary = new Library("Codex January Cohort", newBooks);

    setLibrary(newLibrary);
  }

  async function deleteBook(isbn, docID) {
    await deleteDocument(db, "books", docID);
    const newLibrary = new Library(library.name, library.books);
    newLibrary.removeBook(isbn);

    setLibrary(newLibrary);
  }

  const scrollToLoginForm = () => {
    document
      .getElementById("login-form")
      .scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <h1 className="py-12 text-6xl text-center bg-emerald-500">
        Management Page
      </h1>
      <h2 className="py-3 text-3xl text-center bg-emerald-300">
        We have the best Management!
      </h2>

      {!auth.currentUser ? (
        <>
          <RegisterForm />
          <p className="text-center bg-emerald-50">
            Already registered?
            <button
              onClick={scrollToLoginForm}
              className="text-emerald-500 hover:text-emerald-600"
            >
              &nbsp;Login here{" "}
            </button>
          </p>
          <LoginForm />
        </>
      ) : (
        <>
          <div className="my-2 text-center">
            <LogoutButton />
          </div>

          <AddBookForm handleAddBook={handleAddBook} />
          {library.books.map((book, index) => {
            return (
              <BookComponent
                id={book.id}
                key={index}
                title={book.title}
                author={book.author}
                isbn={book.isbn}
                availableCopies={book.availableCopies}
                updateBook={updateBook}
                deleteBook={deleteBook}
                isManagementPage={true}
              />
            );
          })}
        </>
      )}
    </div>
  );
}
