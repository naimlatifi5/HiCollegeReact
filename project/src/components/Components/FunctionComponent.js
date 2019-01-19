import React from 'react'

// React function component without props
function WelcomToComponent (props) {
    return <p>Welcome to function components</p>
}
// second function component with multipe props passed
function CustomFunctionComponent (props) {
    return <div className={props.className}> { props.textContent }</div>
}

export {
    WelcomToComponent,
    CustomFunctionComponent
}