"use client";
import React from "react";
import { useState } from "react";

export default function ManagementPage() {
  const [count, setCount] = useState(0);
  const [username, setUsername] = useState("NO USERNAME");

  function handleUsername(event) {
    event.preventDefault();

    setUsername(event.target.value); // set our username state
    console.log(username);
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    // do stuff with your state
    console.log(username);
  }

  return (
    <main className="min-h-screen m-0">
      <p>Count: {count} </p>
      <button
        onClick={() => setCount(count + 1)}
        className="px-4 py-2 font-bold text-white rounded bg-emerald-500 hover:bg-emerald-700"
      >
        Button
      </button>

      <p className="my-10">Username: {username}</p>
      <form onSubmit={(e) => handleFormSubmit(e)} className="m-5">
        <input
          onInput={(e) => handleUsername(e)}
          placeholder="Enter Username.. "
          id="username"
          type="text"
          className="p-2 border border-emerald-500"
        ></input>

        <button className="p-2 border border-emerald-500" type="submit">
          Submit
        </button>
      </form>
    </main>
  );
}
