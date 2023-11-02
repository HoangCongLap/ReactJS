import React from "react";
import { createRoot } from "react-dom/client";
function Greeting() {
  return (
    <div>
      {person()}
      {message()}
    </div>
  );
}
const person = () => <h2>hello people</h2>;

const message = () => {
  return <p>this is my message</p>;
};

const root = createRoot(document.getElementById("root"));

root.render(<Greeting />);
