import React from 'react'

// React function component without props
export function WelcomToComponent () {
  return <p>Welcome to function components</p>
}

// Second function component with multipe props passed
export const CustomFunctionComponent = ({className, textContent}) => {
  return <div className={className}>{ textContent }</div>
}
