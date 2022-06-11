import React from 'react'

const CustomButton = ({ handleClick, buttonName }) => {
  console.log('Button name re-rendered', buttonName)
  return (
    <div>
      <button type="button" onClick={handleClick}>
        {buttonName}
      </button>
    </div>
  )
}

export default CustomButton
