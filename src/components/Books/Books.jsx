import { useEffect, useState } from "react";
import Book from "../Book/Book";

export default function Books() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("./booksData.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <div className="font-play my-10 px-4 lg:px-0">
      <h1 className="text-5xl font-bold text-center mb-5">Books</h1>
      <p className="font-bold text-3xl text-center">
        All Books: 0{books.length}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 my-10">
        {books.map((book) => (
          <Book key={book.bookId} book={book} />
        ))}
      </div>
    </div>
  );
}
