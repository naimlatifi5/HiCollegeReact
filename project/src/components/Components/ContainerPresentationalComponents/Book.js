import React from "react"

const Book = ({ title, img_url }) => (
  <div className="book">
    <img src={img_url} alt={title} />
    <h3>{title}</h3>
  </div>
)

export default Book
