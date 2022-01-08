import React from 'react'

// components with props and ES6 function declaration
// props in functional components are received via props function arguments
const FunctionComponentProps = (props) => {
  return (
    <div className="block-container">
      <img
        src={props.imageUrl}
        className="block-container__image"
        alt="react"
      />
      <div className="block-container__content">
        <p>{props.text || 'no text is set'}</p> {/* passing default props */}
      </div>
      <a href={props.href} className="btn">
        {props.buttonText}
      </a>
    </div>
  )
}

export default FunctionComponentProps
