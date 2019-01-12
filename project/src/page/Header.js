import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
    <header>
      <nav class="nav">
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/jsx'>Jsx</Link></li>
          <li><Link to='/formListConditionRendering'>Form List and conditional rendering</Link></li>
          <li><Link to='/props'>Props</Link></li>
          <li><Link to='/containerComponents'>Container components</Link></li>
          <li><Link to='/stateLifeCyckleEvents'>State Life Cycle Events</Link></li>
        </ul>
      </nav>
    </header>
  )
  
  export default Header
  