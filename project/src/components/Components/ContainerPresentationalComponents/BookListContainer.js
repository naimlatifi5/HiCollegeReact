import React, { useEffect, useState } from "react"
import BookList from "./BookList"

const BookListContainer = () => {
  const [books, setBooks] = useState([])
  
  useEffect(() => {
     fetch(
      "https://learn-co-curriculum.github.io/books-json-example-api/books.json"
    )
      .then((response) => response.json())
      .then((bookData) => setBooks( bookData.books ))
  }, [])

  return <BookList books={books} />
}

export default BookListContainer
