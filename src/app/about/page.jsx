import React from "react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen ">
      <h1 className="py-12 text-6xl text-center bg-emerald-500">About Page</h1>
      <h2 className="py-3 text-3xl text-center bg-emerald-300">About us</h2>
      <div>
        <p className="py-3 mb-4 text-xl text-center bg-emerald-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque facere
          blanditiis molestias nam hic ipsam, et laboriosam eaque inventore
          doloribus itaque non corporis quia neque rerum dolorem autem provident
          odio. Consectetur minima nesciunt perferendis voluptates, in quaerat
          repellendus quidem blanditiis sed dolorum rerum? Delectus veritatis
          nulla molestias odit sit voluptate! Debitis voluptatibus corrupti eum
          dolores culpa animi facere suscipit veniam. Tenetur aliquid qui
          placeat natus facilis eveniet dolor ad, debitis officiis laudantium
          nobis, libero tempora expedita provident cupiditate sapiente, vitae
          iusto! Enim, laboriosam vel. Tempore dolores rerum facilis fugiat
          consequuntur. Enim incidunt aperiam dolor quos accusantium excepturi
          corrupti dolores harum saepe nobis qui placeat sunt libero alias,
          soluta nam non? Harum hic voluptates dolore autem in, ea recusandae
          consequuntur iure. Maiores excepturi ipsa obcaecati voluptatibus
          perferendis voluptates voluptate mollitia itaque dolor? Quos ut quidem
          iusto enim deserunt ipsam vel vitae. Reiciendis sint dolorem odio
          corporis quos asperiores quis rerum earum.
        </p>
      </div>
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
