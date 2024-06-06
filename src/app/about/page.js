import React from "react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen ">
      <div>
        <Image
          src={"/library.jpg"}
          alt="library with books"
          width={500}
          height={1000}
          className="mx-auto"
        ></Image>
      </div>
    </main>
  );
}
