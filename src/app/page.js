"use client";
import BookComponent from "../components/Book";
import { Book, Library } from "../utils/library";
import { useState, useEffect } from "react";
import { getAllDocuments } from "@/utils/firebaseUtils";
import { db } from "../../firebase.config";

export default function Home() {
  const [library, setLibrary] = useState(
    new Library("Codex January Cohort's Library", [])
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
        console.log("error fetching docs", error);
      }
    }

    fetchData();
    return () => {
      console.log("home page side effect cleanup");
    };
  }, []);

  return (
    <main style={{ minHeight: "85vh" }}>
      <h1 className="my-12 text-6xl text-center">Codex&apos;s Library</h1>
      <h2 className="text-3xl text-center">We have the best books!</h2>

      <div>
        <h3 className="m-5 text-xl">Book list</h3>
        <hr className="mx-5"></hr>

        {library.books.map((book) => {
          return (
            <BookComponent
              key={book.isbn}
              title={book.title}
              author={book.author}
              isbn={book.isbn}
              availableCopies={book.availableCopies}
            />
          );
        })}
      </div>
    </main>
  );
}
