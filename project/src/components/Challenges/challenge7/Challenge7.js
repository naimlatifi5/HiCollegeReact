import React, { useState } from 'react'

const App = () => {
  const [text, setText] = useState('')
  const [dark, setDark] = useState(false)

  const themeStyle = {
    backgroundColor: dark ? 'black' : 'white',
    color: dark ? 'white' : 'black',
  }

  const handleTheme = () => {
    setDark(!dark)
  }

  const onChange = (e) => {
    setText(e.target.value)
  }

  return (
    <div style={themeStyle}>
      <h4>Use useMemo Hook to prevent expensive value rendering in the app</h4>
      <input value={text} onChange={onChange} />
      <ChildComponent text={text} />
      <button onClick={handleTheme}>Change Theme</button>
    </div>
  )
}

const ChildComponent = ({ text }) => {
  const alterText = (words) => {
    console.log('this is triggered')
    return `I like ${words}`
  }
  // write your magic below this line :) feel free to alter the code blow

  return <p>{alterText(text)}</p>
}

export default App
