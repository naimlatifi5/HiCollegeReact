import React, {Component} from 'react'

const blockData = {
  imageUrl : "https://cdn-images-1.medium.com/max/1600/1*i3hzpSEiEEMTuWIYviYweQ.png",
  text: "React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.",
  buttonText: "Read more...",
  href: "https://www.reactjs.org"
}
// React function component
function WelcomToComponent (props) {
    return <p>Welcome to function components, { props.name}</p>
}

function CustomFunctionComponent (props) {
    return <div className={props.className}> { props.textContent }</div>
}

// components with props and ES6 function declaration

const BlockComponent = (props) => {
  console.log("Props component" , props)
  return (
    <div className="block-container">
      <img src={ props.imageUrl } className="block-container__image" alt="react"/>
      <div className="block-container__content">
        <p>{ props.text || 'no text is set' }</p> {/* passing default props */}
      </div>
      <a href= {props.href} className="btn">{ props.buttonText }</a>
    </div>

  )
}

// Class component
class TestComponent extends Component {
   render () {
     const { name } = this.props;
  
     return <p> { name }</p>
   }
}
// default props for a class Component
TestComponent.defaultProps = {
   name: "Default class component name"
}



// Main Class component
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
            <br/>
            {/* spread operator is used to pass the whole object with data to component */}
            <BlockComponent {...blockData}/> 

            <TestComponent name = "My class component" />
        </div>
    )
  }
}
 

export default ComponentsProps
