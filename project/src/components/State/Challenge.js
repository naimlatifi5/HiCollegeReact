import React, { Component } from 'react'
// TODO- State challenge
/* 
  1. Inside the class component intialize a state with 
     the property fullname with value of your first name only
     and then call your fullname property from state 
     inside your template
     `<div class="state">
        <h1> --- Your fullname property--- </h1>
    </div>`
  
  2. Inside of the function handleStateChange write the code 
     to change the fullname state in order to be your 
     first and last name, and when you press the button 
     it will display your fullName on the page.

   3. Uncomment/include component <Challenge/> inside /State/Main.js 
      and VOILA you are DONE with the challenge - Good Job 
*/
class Challenge extends Component {
   constructor() {
      super()
     
   }
   handleStateChange = () => {
      // .... your code here
   }

   render () {
      return (
         <div className="state"> 
            <h1>What is your full name: --- your fullname --- </h1>
            <button className="handleState" onClick={this.handleStateChange}>Change state</button>
         </div>
         
      )
   } 
}

export default Challenge
