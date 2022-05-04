import React, { useState, useReducer } from "react";

const App = () => {
  const initialBooks = [
    {
      id: 1,
      title: "Happy Days",
      author: "Jame Miller",
    },
    {
      id: 2,
      title: "The Apple Tree",
      author: "Kelly Ray",
    },
  ];

  const reducer = (state, action) => {
    switch (action.type) {
      case "ADD_BOOK":
        return [...state, action.payload];
      case "DELETE_BOOK":
        return state.filter((item) => item.id !== action.payload);
      default:
        return state;
    }
  };

  const [book, setBook] = useState({ id: 0, title: "", author: "" });
  const [books, dispatch] = useReducer(reducer, initialBooks);

  const handleOnChange = (e) => {
    setBook({
      ...book,
      id: books[books.length - 1].id + 1,
      [e.target.name]: e.target.value,
    });
  };

  const addBook = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_BOOK", payload: book });
  };

  const deleteBook = (id) => {
    dispatch({ type: "DELETE_BOOK", payload: id });
  };
  return (
    <div>
      <h1>
        Challenge9 - Use useReducer() Hook to "add" and "delete" a book in the
        book list
      </h1>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          width: "250px",
          margin: "0 auto",
        }}
      >
        <label>Title</label>
        <input value={book.title} name="title" onChange={handleOnChange} />
        <label>Author</label>
        <input value={book.author} name="author" onChange={handleOnChange} />
        <button style={{ marginTop: "10px" }} onClick={addBook}>
          Add Book
        </button>
      </form>
      <br />
      {books.map((book, index) => {
        return (
          <div key={index} style={{ marginTop: "10px" }}>
            <h3>
              {book.id} - {book.title}
            </h3>
            <p>{book.author}</p>

            <button onClick={() => deleteBook(book.id)}>Delete Book</button>
          </div>
        );
      })}
      <br />
      <br />
    </div>
  );
};

export default App;
