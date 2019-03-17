import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
    <header>
      <nav className="nav">
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/jsx'>JSX</Link></li>
          <li><Link to='/components'>Components</Link></li>
          <li><Link to='/state'>State</Link></li>
          <li><Link to='/props'>Props</Link></li>
          <li><Link to='/listConditionRendering'>Lists & conditional rendering</Link></li>
          <li><Link to='/eventsForms'>Events & Forms</Link></li>
          <li><Link to='/lifeCycleMethods'>Life Cycle Methods</Link></li>
          <li><Link to='/challenge'>Challenge</Link></li>
        </ul>
      </nav>
    </header>
  )

  export default Header
