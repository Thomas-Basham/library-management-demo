import Image from "next/image";
import Book from "./components/Book";

export default function Home() {
  return (
    <main style={{ minHeight: "85vh" }}>
      <h1 className="my-12 text-6xl text-center">Codex's Library</h1>
      <h2 className="text-3xl text-center">We have the best books!</h2>

      <div>
        <h3 className="m-5 text-xl">Book list</h3>
        <hr className="mx-5"></hr>
        <Book
          title={"Rich Dad, Poor Dad"}
          author={"Robert Tiosayasoki"}
          isbn={23232323}
          availableCopies={4}
        />

        <Book
          title={"The Lost Symbol"}
          author={"Dan Brown"}
          isbn={23232323}
          availableCopies={4}
        />

        <Book
          title={"Holes"}
          author={"Louis S"}
          isbn={2323232323}
          availableCopies={4}
        />
      </div>
    </main>
  );
}
