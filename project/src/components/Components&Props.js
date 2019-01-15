import React, {Component} from 'react'

// React function component
function WelcomToComponent (props) {
    return <p>Welcome to function components, { props.name}</p>
}

function CustomFunctionComponent (props) {
    return <div className={props.className}> { props.textContent }</div>
}
 
// or create a component by using ES6 syntax
class ComponentsProps extends Component {
  render() {
    return (
        <div>
            <h1>Welcome to the class component syntaxt</h1>
            {/* Create below div to  components */}
            <WelcomToComponent name="Naim"/>
            <WelcomToComponent name="Sara"/>
            
             <div className="box1">Component1</div>
             <div className="box2">Component2</div>

            <CustomFunctionComponent className="box1" textContent="First container" />
            <CustomFunctionComponent className="box2" textContent="Second container" />
        </div>
    )
  }
}

export default ComponentsProps
