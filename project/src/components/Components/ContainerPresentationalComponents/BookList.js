import React from "react"
import Book from "./Book"

const BookList = ({ books }) => (
  <div className="book-list">
    {books.map((book) => (
      <Book title={book.title} img_url={book.img_url} />
    ))}
  </div>
)

export default BookList
