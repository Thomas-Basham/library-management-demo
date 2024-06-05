import React from "react";

export default function Book({ title, author, isbn, availableCopies }) {
  return (
    <div className="p-5 m-5 border border-black rounded-md bg-emerald-500">
      Title: {title}
      <br></br>
      Author: {author}
      <br></br>
      ISBN: {isbn}
      <br></br>
      Available Copies: {availableCopies}
    </div>
  );
}
