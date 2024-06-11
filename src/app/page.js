import BookComponent from "../components/Book";
import { Book, Library } from "../utils/library";

export default function Home() {
  //Const Array of random books
  const libraryBooks = [
    new Book("To Kill a Mockingbird", "Harper Lee", "InStoreNumber1", 2),
    new Book(
      "The Adventures of Huckleberry Finn",
      "Marl Twain",
      "InStoreNumber2",
      1
    ),
    new Book("The Catcher in the Rye", "J.D. Salinger", "InStoreNumber3", 3),
    new Book("Hamlet", "William Shakespeare", "InStoreNumber4", 4),
  ];
  
  //New library object made with a name and books array passed in
  const library = new Library("Codex January Cohort's Library", libraryBooks);

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
