import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

const BookList = () => {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
};
const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => <img src="./images/book-1.jpg" alt="An Innocent Client" />;
const Title = () => <h2>An Innocent Client</h2>;
const Author = () => {
  const inlineHeadingStyles = {
    color: "#617d98",
    fontSize: "0.75rem",
    marginTop: "0.5rem",
  };

  return <h4 style={inlineHeadingStyles}>Scott Pratt</h4>;
};

const root = createRoot(document.getElementById("root"));
root.render(<BookList />);
