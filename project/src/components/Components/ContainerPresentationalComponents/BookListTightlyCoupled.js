// Tightly coupled component
import React, { Component } from 'react'
class BookList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      books: [],
    }
  }
  componentDidMount() {
    fetch(
      'https://learn-co-curriculum.github.io/books-json-example-api/books.json',
    )
      .then((response) => response.json())
      .then((bookData) => this.setState({ books: bookData.books }))
  }

  renderBooks = () => {
    return this.state.books.map((book) => {
      return (
        <div className="book">
          <img src={book.img_url} alt="BookList" />
          <h3>{book.title}</h3>
        </div>
      )
    })
  }

  render() {
    return <div className="book-list">{this.renderBooks()}</div>
  }
}
export default BookList
