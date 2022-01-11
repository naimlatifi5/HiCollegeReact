import React from 'react'

// components with props and ES6 function declaration
// props in functional components are received via props function arguments
// or with the help of destructing you can access the prop name in function argument
// default props are assigned
const FunctionComponentProps = ({
  imageUrl = '#',
  buttonText = 'no button text set',
  href = '#',
  text = 'no text is set',
}) => {
  return (
    <div className="block-container">
      <img src={imageUrl} className="block-container__image" alt="react" />
      <div className="block-container__content">
        <p>{text}</p>{' '}
        {/* passing default props or default props can also be used as text || "this is a default prop" */}
      </div>
      <a href={href} className="btn">
        {buttonText}
      </a>
    </div>
  )
}

export default FunctionComponentProps
