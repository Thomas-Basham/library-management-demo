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
      <h1 className="py-12 text-6xl text-center bg-emerald-500">
        Codex&apos;s Library
      </h1>
      <h2 className="py-3 text-3xl text-center bg-emerald-300">
        We have the best books!
      </h2>

      <div>
        <h3 className="m-5 text-xl">Book list</h3>
        <hr className="mx-5"></hr>
        <div className="flex flex-wrap">
          {library.books.map((book) => {
            return (
              <div key={book.isbn} className="w-1/4">
                <BookComponent
                  title={book.title}
                  author={book.author}
                  isbn={book.isbn}
                  availableCopies={book.availableCopies}
                />
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
