import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

const books = [
  {
    author: "Scott Pratt",
    title: "An Innocent Client",
    img: "./images/book-1.jpg",
    id: 1,
  },
  {
    author: " Hernan Diaz",
    title: "Trust",
    img: "./images/book-2.jpg",
    id: 2,
  },
];

const BookList = () => {
  return (
    <section className="booklist">
      <EventExamples />
      {books.map((book) => {
        return <Book {...book} key={book.id} />;
      })}
    </section>
  );
};

const EventExamples = () => {
  const handleFormInput = () => {
    console.log("handle form input");
  };
  const handleButtonClick = () => {
    alert("handle button click");
  };
  return (
    <section>
      <form>
        <h2>Typical form</h2>
        <input
          type="text"
          name="example"
          onChange={handleFormInput}
          style={{ margin: "1rem 0" }}
        />
      </form>
      <button onClick={handleButtonClick}>click me</button>
    </section>
  );
};

const Book = (props) => {
  const { img, title, author } = props;
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<BookList />);
